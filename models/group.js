const db = require('./db.js');
const auth = require('../lib/auth.js');
const CloudinaryService = require('../services/cloudinary.js');
// initially I wanted to use cloudinary and md5 to encorporate the react dropzone
// I hope to encorporate this after user auth.
const md5 = require('md5');
const fs = require('fs');
const path = require('path');

// function getOneGroup is the backend fetch to my PSQL DB to get all the information
// from one particular group (which will be used to get the selected group)
function getOneGroup (req, res, next) {
  db.oneOrNone(`SELECT * FROM "group" WHERE group_id = $1`, [req.params.group_id])
  .then((group) => {
    res.group_info = group;
    next();
  })
  .catch(err => next(err));
}
// function getAllUserData fetches from the DB with an inner join for my cross reference table.
// its getting all the users in a particular group.
function getAllUserData (req, res, next) {
  db.any(`SELECT * FROM "user" INNER JOIN members ON members.group_id = group_id WHERE members.user_id = "user".user_id AND members.group_id = $1;`, [req.params.group_id])
  .then(users => res.get_users = users)
  .then(() => next())
  .catch(err => next(err));
}
// function getAllPosts gets all the posts for a selected group
function getAllPosts (req, res, next) {
  db.any(`SELECT * FROM post WHERE group_id = $1`, [req.params.group_id])
  .then((posts) => {
    res.get_posts = posts;
    next();
  })
  .catch(err => next(err));
}
// function prepareResponse takes the data from getOneGroup, getUserData, and getAllPosts and returns
// all of the data to use just one route and one front end fetch call.
function prepareResponse (req, res, next) {
  const group_info = res.group_info;
  const get_users = res.get_users;
  const get_posts = res.get_posts;

  const retObj = {
    group_info: group_info,
    get_users: get_users,
    get_posts: get_posts,
  }

  res.rows = retObj;
  next();
}
// grabs all of the group data in the database to be able to filter through by user on the front end
function getAllGroups (req, res, next) {
  db.any('SELECT * FROM "group";')
  .then((groups) => {
    res.rows = groups;
    next();
  })
  .catch(err => next(err));
}
// this fetch call gets the group data of the groups that the user administrates.
function getAdminGroups (req, res, next) {
  db.any('SELECT * FROM "group" WHERE admin_id = $1;', [req.params.user_id])
  .then((groups) => {
    res.rows = groups;
    next();
  })
  .catch(err => next(err));
}
// this call gets all the groups that the selected user is in. Using the cross reference table members.
function getGroupsImIn (req, res, next) {
  db.any(`SELECT * FROM "group" INNER JOIN members ON members.user_id = user_id WHERE members.group_id = "group".group_id AND members.user_id = $1`, [req.params.user_id])
  .then((groups) => {
    res.rows = groups;
    next();
  })
  .catch(err => next(err));
}
// this doesn't get called, but was a dummy for getting user data with the token
// referenced from Joey P. in my chairShare group
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

// this doesn't get called yet, but is the dummy for the backend call that would create a new user. It would
// submit information into the main table and the members cross reference table.
function createGroup (req, res, next) {
  const name = req.body.name;
  const admin = req.body.admin;
  const users = req.body.users;

  const queryOne = `
    INSERT INTO "group"
      (group_name, admin_id)
    VALUES
      ($1, $2)
    RETURNING *;
  `;

  const queryTwo = `
    INSERT INTO members
      (group_id, user_id)
    VALUES
      ($3, $4)
    ;
  `;

  const values = [
    name,
    admin,
    users,
  ];

  db.one(queryOne, values)
  .then((inserted) => {
    res.insertedGroup = inserted;
    values.push(parseInt(inserted.group_id, inserted.user_id, inserted.admin_id));
    db.none(queryTwo, values)
    .then(() => next())
    .catch(err => next(err));
  })
  .catch(err => next(err));
}

// this is the call that creates a post with the form data required in req.body.
function createPost (req, res, next) {
  console.log(req.body);
  db.none(`INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ($1, $2, $3, $4, $5)`, [req.body.post_text, req.body.image_url, req.params.group_id, req.body.user_id, req.body.prof_pic])
    .then(next())
    .catch(err => next(err));
}

// this was supposed to be used to deal with the picture parsing
// function createImages (req, res, next) {
//   const post = res.insertedPost;
//   let allLocalImagePaths = [];
//   const filePrefix = res.generatedFilePrefix;
//   for (let fileKey in req.files) {
//     let file = req.files[fileKey][0];
//     let oldPath = file.path;
//     let newPath = `${file.destination}${filePrefix}-${file.fieldname}${path.extname(file.originalname)}`;
//     fs.renameSync(oldPath, newPath)
//     allLocalImagePaths.push(path.join(__dirname, `../${newPath}`));
//   }

//   Promise.all(allLocalImagePaths.map((path) => {
//     return CloudinaryService.uploadImage(path).catch(err => err);
//   }))
//   .then((data) => {
//     db.tx(t => {
//       const queryOne = `INSERT INTO image (title, alt_text, url) VALUES ($1, $1, $2) RETURNING *;`;
//       const queryTwo = `INSERT INTO image_post_ref (post_id, image_id) VALUES ($1, $2);`;

//       data.forEach((result) => {
//         let valuesOne = [
//           post.title,
//           result.url,
//         ];
//         return t.one(queryOne, valuesOne)
//           .then((insertedImage) => {
//               const valuesTwo = [
//                 post.post_id,
//                 insertedImage.image_id,
//               ];
//               return t.none(queryTwo, valuesTwo);
//           })
//           .catch(err => next(err));
//         });
//     })
//     .then(() => next())
//     .catch(err => next(err));
//     res.rows = data;
//   })
//   .catch(err => next(err));
// }


// this isn't being utilized yet, but would be the call that would delete a group. I would also
// need to delete from the x reference table.
function deleteGroup (req, res, next) {
  const group_id = req.params.id;

  const query = `DELETE FROM members WHERE group_id = $1; DELETE FROM "group" WHERE group_id = $1;`;
  const values = [group_id];

  db.none(query, values)
  .then(() => res.rows = 'Successfully Deleted')
  .then(() => next())
  .catch(err => next(err));
}
// this deletes a post in the database
function deletePost (req, res, next) {
  db.none(`DELETE FROM post WHERE post_id = $1;`, [req.params.post_id])
    .then(next())
    .catch(err => next(err));
}

module.exports = {
  getOneGroup,
  getAllGroups,
  getAdminGroups,
  getGroupsImIn,
  getAllPosts,
  getUserData,
  getAllUserData,
  createGroup,
  createPost,
  deleteGroup,
  deletePost,
  prepareResponse,
}
