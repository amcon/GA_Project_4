const router = require('express').Router();
const groupModel = require('../models/group.js');
const auth = require('../lib/auth.js');

const multer = require('multer');
const path = require('path');
const md5 = require('md5');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const tempPath = `public/uploads/temp`;
    callback(null, tempPath);
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);
    const title = req.body.title.toLowerCase();
    const userID = req.userInfo.user_id;
    const hash = md5(`${userID}-${title}`);
    const newName = `${hash}-${file.fieldname}${extension}`;
    callback(null, newName);
  },
});

const upload = multer({ storage: storage });

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}


// Get the groups for one specific user and display them on the user side-bar
router.route('/:user_id/groups')
  .get(groupModel.getAllGroups, sendAsJSON)
  .post(groupModel.createGroup, sendAsJSON);

// Get the specific group information and render the chat box
router.route('/:group_id')
  .get(groupModel.getOneGroup, groupModel.getAllPosts, groupModel.getUserData, groupModel.getAllUserData, sendAsJSON)
  .post(groupModel.createPost, groupModel.generateFilePrefix, groupModel.createImages, sendAsJSON)
  .delete(groupModel.deleteGroup);

router.route('/:group_id/:post_id')
  .delete(groupModel.deletePost)

module.exports = router;
