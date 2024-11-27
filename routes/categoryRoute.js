const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Product = require("../models/product");

// Create Category
router.post("/newCategory", async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.redirect('/');
    // res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Category by ID (with Products)
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const products = await Product.find({ categoryId: category._id }).populate('categoryId');
    res.render("category",{category,products})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Category
router.get("/update/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });

  
    res.render("categoryUpdate",{category})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/update/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.redirect('/');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Category (Mark Products as Uncategorized)
router.get("/delete/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    await Product.updateMany({ categoryId: category._id }, { categoryId: null });
    res.redirect('/')

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
