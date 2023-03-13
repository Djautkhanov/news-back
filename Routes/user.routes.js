const {Router} = require("express")
const { userController } = require("../Controllers/users.controller")
const router = Router()

router.post('/user', userController.adduser)
router.delete('/user', userController.deleteUser)
router.post('/login', userController.login)
router.get('/user', userController.getUser)

module.exports = router