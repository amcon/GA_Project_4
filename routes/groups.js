const router = require('express').Router();

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

// Get the groups for one specific user and display them on the user side-bar
router.route('/:user_id/groups')
  .get(/*getAllGroups*/sendAsJSON)
  .post(/*addGroup*/sendAsJSON);

// Get the specific group information and render the chat box
router.route('/:group_id')
  .get(/*getUsers, getPosts*/sendAsJSON)
  .post(/*newPost*/sendAsJSON);

module.exports = router;
