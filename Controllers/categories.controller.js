const Category = require("../Model/category.model");

module.exports.categoryController = {
  addCategory: async (req, res) => {
    try {
      const category = await Category.create({
        name: req.body.name,
      });
      res.json(category);
    } catch (error) {
      res.json(error.message);
    } // добавление категории
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json("deleted");
    } catch (error) {
      res.json(error.message);
    } //удоление категории
  },
  getCategory: async (req, res) => {
    try {
      const category = await Category.find();
      res.json(category);
    } catch (error) {
      res.json(error.message);
    } // вывод всех категории
  },
  editCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json(category);
    } catch (error) {
      res.json(error.mesenge);
    } // изминение категории
  },
  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.json(category);
    } catch (error) {
      res.json(error.mesenge);
    } // вывод оприделенной категории
  },
};
