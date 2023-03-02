const User = require("../Model/user.model");
module.exports.userController = {
  adduser: async (res, req) => {
    try {
      const user = await User.create({
        name: req.body.name,
        password: req.body.password,
      });
      res.json(user);
    } catch (error) {
      res.json(error.messenge);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("deleted");
    } catch (error) {
      res.json(error.messenge);
    }
  },
};
