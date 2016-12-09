const router = require('express').Router();

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/:user_id')
  .get(sendAsJSON)
  .put(sendAsJSON);

router.route('/')
  .get(/* getAllUsers */ sendAsJSON)
  .post(/* createUser */ sendAsJSON);

  module.exports = router;
