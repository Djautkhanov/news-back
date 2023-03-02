const News = require("../Model/news.model");

module.exports.commentController = {
  addComment: async (req, res) => {
    try {
      const comment = await News.findByIdAndUpdate(req.params.id, {
        $push: {
          newsComment: {
            text: req.body.text,
            userId: req.body.userId,
          },
        },
      });
      res.json(comment);
    } catch (error) {
      res.json(error.messenge);
    } // добавление комминтария
  },
  deleteComment: async (req, res) => {
    try {
      await News.findByIdAndUpdate(req.params.id, {
        $pull: {
          newsComment: {
            _id: req.body.id,
          },
        },
      });
      res.json("deleted");
    } catch (error) {
      res.json(error.messenge);
    }
  },
};
