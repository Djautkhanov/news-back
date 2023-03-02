const News = require("../Model/news.model");

module.exports = newsController = {
  addNews: async (req, res) => {
    try {
      const news = await News.create({
        image: req.body.image,
        text: req.body.text,
        title: req.body.title,
        category: req.body.category
      });
      res.json(news);
    } catch (error) {
      res.json(error.messange);
    } // добавление новости
  },
  getNews: async (req, res) => {
    try {
      const news = await News.find();
      res.json(news);
    } catch (error) {
      res.json(error.messange);
    }// вывод всех новостей
  },
  deleteNews: async (req, res) => {
    try {
      await News.findByIdAndDelete(req.params.id);
      res.json("deleted");
    } catch (error) {
      res.json(error.messange);
    }// удолить новость 
  },
  editNews : async (req,res) => {
try {
    const news = await News.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        title: req.body.title,
        category: req.body.category
    });
    res.json(news)
} catch (error) {
    res.json(error.messange)
}// изминение новости 
  }

};
