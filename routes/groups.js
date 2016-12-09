const router = require('express').Router();

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/:user_id/groups')
  .get(/*getAllGroups*/sendAsJSON)
  .post(/*addGroup*/sendAsJSON);

router.route('/:group_id')
  .get(/*getUsers, getPosts*/sendAsJSON)
  .post(/*newPost*/sendAsJSON);

module.exports = router;
