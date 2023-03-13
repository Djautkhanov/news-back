const News = require("../Model/news.model");

module.exports.commentController = {
  addComment: async (req, res) => {
    try {
      await News.findByIdAndUpdate(req.params.id, {
        $push: {
          newsComment: {
            date: new Date().toDateString(),
            text: req.body.text,
            commentUserId: req.user.id,
          },
        },
      });
      const item = await News.findById(req.params.id).populate("newsComment");
      res.json(item);
    } catch (error) {
      res.json(error.message);
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
      res.json(error.message);
    }
  },
};
