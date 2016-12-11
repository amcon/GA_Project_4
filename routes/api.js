const router           = require('express').Router();
const usersRouter      = require('./users.js');
const groupsRouter   = require('./groups.js');
// const applicantsRouter = require('./applicants.js');
// const questionsRouter  = require('./questions.js');

router.use('/users', usersRouter);
router.use('/groups', groupsRouter);


const md5 = require('md5');

router.get('/test', (req, res) => {

  // testing
  console.log(md5('testing testing 1 2 3'))
  console.log(md5('testing testing 1 2 3'))
  console.log(md5('testing testing 1 2 3'))
  res.send('ook');
})

module.exports = router;
