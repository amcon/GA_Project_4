const router = require('express').Router();
const userModel = require('../models/user.js');
const auth = require('../lib/auth.js');

// router.use('/users', usersRouter);

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

// Get the specific user information and edit the specific user
router.route('/:user_id')
  .get(userModel.getUserData, sendAsJSON)
  .put(userModel.updateUser, sendAsJSON);

// Get the groups that belong to a specific user
router.route('/:user_id/groups')
  .get(userModel.getUserGroups, sendAsJSON);

// Get all users for groups and make a new user
router.route('/')
  .get(/* getAllUsers */auth.authenticateUser, sendAsJSON)
  .post(userModel.createUser, sendAsJSON);

module.exports = router;
