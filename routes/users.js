const router = require('express').Router();

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

// Get the specific user information and edit the specific user
router.route('/:user_id')
  .get(sendAsJSON)
  .put(sendAsJSON);

// Get all users for groups and make a new user
router.route('/')
  .get(/* getAllUsers */ sendAsJSON)
  .post(/* createUser */ sendAsJSON);

  module.exports = router;
