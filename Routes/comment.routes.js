const {Router} = require('express')
const { commentController } = require('../Controllers/comments.controller')
const router = Router()

router.post('/news/comment', commentController.addComment)
router.delete('/news/comment', commentController.deleteComment)

module.exports = router