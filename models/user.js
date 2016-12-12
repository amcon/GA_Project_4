const bcrypt = require('bcrypt');
const db = require('../db/db.js');
const auth = require('../lib/auth.js');
const { isValidEmail } = require('../lib/lib.js');

const SALTROUNDS = 10;

function getAllUsers (req, res, next) {
  db.any('SELECT * FROM "user";')
    .then((users) => {
      res.rows = users;
      next();
    })
    .catch(err => next(err));
}

function createUser (req, res, next) {
  console.log(req.body);
  db.none(`INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ($1, $2, $3, $4)`, [req.body.user_name, req.body.email, req.body.profile_pic, req.body.password])
    .then(next())
    .catch(err => next(err));
}

function getUserData (req, res, next) {
  db.oneOrNone(`SELECT * FROM "user" WHERE user_id = $1`, [req.params.user_id])
  .then((user) => {
    res.rows = user;
    next();
  })
  .catch(err => next(err));
}

function getUserGroups (req, res, next) {
  db.any(`SELECT * FROM "group" INNER JOIN members ON members.user_id = user_id WHERE members.group_id = "group".group_id AND members.user_id = $1`, [req.params.user_id])
  .then(users => res.rows = users)
  .then(() => next())
  .catch(err => next(err));
}

function updateUser (req, res, next) {
  db.none(`UPDATE "user" SET user_name = $1, email = $2, profile_pic = $3, password = $4 WHERE user_id = $5`, [req.body.user_name, req.body.email, req.body.profile_pic, req.body.password, req.params.user_id])
    .then(next())
    .catch(err => next(err));
}

module.exports = {
  getAllUsers,
  createUser,
  getUserData,
  getUserGroups,
  updateUser,
}
