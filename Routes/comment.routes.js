const {Router} = require('express')
const { commentController } = require('../Controllers/comments.controller')
const authMiddleware = require('../Controllers/middleware/auth.middleware')
const router = Router()

router.patch('/news/comment/:id', authMiddleware, commentController.addComment)
router.delete('/news/comment/:id', commentController.deleteComment)

module.exports = router