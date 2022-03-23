const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

router.get('/', postsController.showAll);
router.get('/:id', postsController.showOne);
router.post('/',postsController.create);

module.exports = router;