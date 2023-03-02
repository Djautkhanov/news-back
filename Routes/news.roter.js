const {Router} = require("express")
const NewsController = require("../Controllers/News.controller")
const router = Router()

router.post('/news', NewsController.addNews)
router.get('/news', NewsController.getNews)
router.delete('/news/:id', NewsController.deleteNews)
router.patch('/news/:id', NewsController.editNews)


module.exports = router
