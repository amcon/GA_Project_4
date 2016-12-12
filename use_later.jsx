const bcrypt = require('bcrypt');
const db = require('../db/db.js');
const auth = require('../lib/auth.js');
const { isValidEmail } = require('../lib/lib.js');

const SALTROUNDS = 10;

function getAllUsers (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  auth.getAllUsers(token)
  db.any('SELECT * FROM "user";')
  .then((users) => {
    res.users = users;
    next();
  })
  .catch(err => next(err));
}

function createUser (req, res, next) {
  // Get Data
  const username = req.body.username;
  const email = req.body.email.toLowerCase();
  const prof_pic = req.body.prof_pic;
  const password = bcrypt.hashSync(req.body.password, SALTROUNDS);

  // Validate Data
  if (!(username || email || prof_pic || password)) next(new Error('Please fill out all fields.'));
  if (!isValidEmail(email)) next(new Error('Please enter a valid email.'));

  // Build query
  const query = `INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ($1, $2, $3, $4) RETURNING user_id, user_name, email, profile_pic, password;`;
  // Prepare the values array
  const values = [
    username,
    email,
    prof_pic,
    password,
  ];

  // execute query with the data
  db.one(query, values)
  .then((data) => {
    // get a token for the user
    auth.getUserToken(data)
    .then((token) => res.rows = token)
    .then(() => next())
    .catch(err => next(err));
  })
}

function getUserData (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  auth.getUserData(token)
  .then((user) => req.userInfo = user.data)
  .then(() => next())
  .catch(err => next(err));
}

function getUserGroups (req, res, next) {
  const values = [res.userInfo.user_id];
  const query =  `SELECT * FROM "group" INNER JOIN members ON members.group_id = group.group_id WHERE members.user_id = $1;`;
  db.any(query, values)
  .then(groups => res.userGroups = groups)
  .then(() => next())
  .catch(err => next(err));
}

function updateUser (req, res, next) {
  if (!isValidEmail(req.body.email)) next(new Error('Please sumit a valid email.'));

  let query = `UPDATE "user" SET `;
  let params = [req.body.username, req.body.email, req.body.prof_pic, req.body.password];
  let columns = ['user_name', 'email', 'profile_pic', 'password'];
  let values = [];

  params.forEach((val, i) => {
    if (val) {
      if (columns[i] == 'password') {
        values.push(bcrypt.hashSync(params[i], SALTROUNDS))
        query += `${columns[i]} = $${values.length}, `
      } else {
        values.push(params[i])
        query += `${columns[i]} = $${values.length}, `
      }
    }
  });
  query = query.slice(0, -2);
  query += ` WHERE user_id = $${values.length}, `
  values.push(res.userInfo.user_id);

  // Execute query with the data
  db.one(query, values)
  .then((data) => {
    // then get the token and send it back
    auth.getUserToken(data)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
  })
  .catch(err => next(err));
}

module.exports = {
  getAllUsers,
  createUser,
  getUserData,
  getUserGroups,
  updateUser,
}
