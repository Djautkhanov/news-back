const {Router} = require('express')
const { categoryController } = require('../Controllers/categories.controller')
const router = Router()

router.post('/category', categoryController.addCategory)
router.delete('/category', categoryController.deleteCategory)
router.get('/category', categoryController.getCategory)
router.get('/category/:id', categoryController.getCategoryById)
router.patch('/category/:id', categoryController.editCategory)

module.exports = router
