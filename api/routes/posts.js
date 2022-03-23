//requires
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

//routes
router.get('/', postsController.showAll);
router.get('/:id', postsController.showOne);
router.post('/',postsController.create);

//export our router for use elsewhere
module.exports = router;