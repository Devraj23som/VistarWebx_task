const express = require("express");
const router = express.Router();
const Product = require("../models/product");


// Create Product
router.post("/:id", async (req, res) => {
  try {
    var categoryId=req.params.id;
    const {name,price,stock} =req.body;
    const product = await Product.create({
      name,price,stock,categoryId
    });
    await product.save();
    res.redirect(`/categories/${categoryId}`)
    // res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    res.render("products",{products});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Product by ID (with Category)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("categoryId");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.render("product",{product});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Product
router.get("/update/:id",async(req,res)=>{
  try {
    const product = await Product.findById(req.params.id).populate("categoryId");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.render("productUpdate",{product});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
router.post("/update/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    ;
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.redirect(`/categories/${product.categoryId}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Product
router.get("/delete/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    // res.json({ message: "Product deleted" });
    res.redirect("/")
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
