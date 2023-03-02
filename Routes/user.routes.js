const {Router} = require("express")
const { userController } = require("../Controllers/users.controller")
const router = Router()

router.post('/user', userController.adduser)
router.delete('/user', userController.deleteUser)

module.exports = router