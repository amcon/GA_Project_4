const db = require('../db/db.js');
const auth = require('../lib/auth.js');
const CloudinaryService = require('../services/cloudinary.js');

const md5 = require('md5');
const fs = require('fs');
const path = require('path');

function getOneGroup (req, res, next) {
  const group_id = req.params.id;

  const query = `SELECT * FROM group WHERE group_id = $1;`;
  const values = [group_id];

  db.oneOrNone(query, values)
  .then((group) => res.rows = group)
  .then(() => next())
  .catch(err => next(err));
}

function getAllGroups (req, res, next) {
  const query = `SELECT * FROM group;`;

  db.any(query, values)
  .then((groups) => res.rows.groups = groups)
  .then(() => next())
  .catch(err => next(err));
}

function getAllPosts (req, res, next) {
  const query = `SELECT * FROM post WHERE group_id = $1;`;

  db.any(query, values)
  .then((posts) => res.rows.posts = posts)
  .then(() => next())
  .catch(err => next(err));
}

function getUserData (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  auth.getUserData(token)
  .then((user) => {
    req.userInfo = user.data
    req.userData = user.data
  })
  .then(() => next())
  .catch(err => next(err));
}


 // ** THIS REALLY MIGHT NEED SOME WORK!
function getAllUserData (req, res, next) {
  const values = [
    username,
    email,
    prof_pic,
    password,
    ];
  const query = `SELECT * FROM user LEFT JOIN members ON members.group_id = group_id WHERE members.group_id = $1;`;
  db.any(query, values)
  .then(users => res.userInfo = user.data)
  .then(() => next())
  .catch(err => next(err));
}

function createGroup (req, res, next) {
  const name = req.body.name;
  const admin = req.body.admin;
  const users = req.body.users;

  const queryOne = `
    INSERT INTO group
      (group_name)
    VALUES
      ($1)
    RETURNING *;
  `;

  const queryTwo = `
    INSERT INTO members
      (group_id, user_id, admin_id)
    VALUES
      ($2, $3, $4)
    ;
  `;

  const values = [
    name,
    admin,
    users,
  ];

  db.one(queryOne, values)
  .then((inserted) => {
    res.insertedPost = inserted;
    values.push(parseInt(inserted.group_id, inserted.user_id, inserted.admin_id));
    db.none(queryTwo, values)
    .then(() => next())
    .catch(err => next(err));
  })
  .catch(err => next(err));
}

function createPost (req, res, next) {
  const text = req.body.text;
  const image_url = req.body.image_url;
  const group_id = req.body.group_id;
  const user_id = req.body.user_id;

  const query = `
    INSERT INTO post
      (text, image_url, group_id, user_id)
    VALUES
      ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [
    text,
    image_url,
    group_id,
    user_id,
  ];

  db.one(query, values)
  .then((inserted) => {
    res.insertedPost = inserted;
    values.push(parseInt(inserted.group_id, inserted.user_id))
    .then(() => next())
    .catch(err => next(err));
  })
  .catch(err => next(err));
}

function generateFilePrefix (req, res, next) {
  const post = res.insertedPost;
  const user = res.userData;
  const hash = md5(`${post.post_id}-${user.user_id}`);
  res.generatedFilePrefix = hash;
  next();
}

function createImages (req, res, next) {
  const post = res.insertedPost;
  let allLocalImagePaths = [];
  const filePrefix = res.generatedFilePrefix;
  for (let fileKey in req.files) {
    let file = req.files[fileKey][0];
    let oldPath = file.path;
    let newPath = `${file.destination}${filePrefix}-${file.fieldname}${path.extname(file.originalname)}`;
    fs.renameSync(oldPath, newPath)
    allLocalImagePaths.push(path.join(__dirname, `../${newPath}`));
  }

  Promise.all(allLocalImagePaths.map((path) => {
    return CloudinaryService.uploadImage(path).catch(err => err);
  }))
  .then((data) => {
    db.tx(t => {
      const queryOne = `INSERT INTO image (title, alt_text, url) VALUES ($1, $1, $2) RETURNING *;`;
      const queryTwo = `INSERT INTO image_post_ref (post_id, image_id) VALUES ($1, $2);`;

      data.forEach((result) => {
        let valuesOne = [
          post.title,
          result.url,
        ];
        return t.one(queryOne, valuesOne)
          .then((insertedImage) => {
              const valuesTwo = [
                post.post_id,
                insertedImage.image_id,
              ];
              return t.none(queryTwo, valuesTwo);
          })
          .catch(err => next(err));
        });
    })
    .then(() => next())
    .catch(err => next(err));
    res.rows = data;
  })
  .catch(err => next(err));
}

function deleteGroup (req, res, next) {
  const group_id = req.params.id;

  const query = `DELETE FROM members WHERE group_id = $1; DELETE FROM group WHERE group_id = $1;`;
  const values = [group_id];

  db.none(query, values)
  .then(() => res.rows = 'Successfully Deleted')
  .then(() => next())
  .catch(err => next(err));
}

function deletePost (req, res, next) {
  const post_id = req.params.id;

  const query = `DELETE FROM post WHERE post_id = $1;`;
}

module.exports = {
  getOneGroup,
  getAllGroups,
  getAllPosts,
  getUserData,
  getAllUserData,
  createGroup,
  createPost,
  generateFilePrefix,
  createImages,
  deleteGroup,
  deletePost,
}
