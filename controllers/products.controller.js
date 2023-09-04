const productModel = require('../models/products.model');

async function createProduct(req, res, next) {
  try {
    const createdProduct = await productModel.create(req.body);
    res.status(201).json(createdProduct);
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    const allProducts = await productModel.find({});
    res.status(200).json(allProducts);
  } catch (err) {
    next(err);
  }
}

async function getProductsById(req, res, next) {
  try {
    const product = await productModel.findById(req.params.productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    let updateProduct = await productModel.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (updateProduct) {
      res.status(200).json(updateProduct);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    let deleteProduct = await productModel.findByIdAndDelete(
      req.params.productId
    );

    if (deleteProduct) {
      res.status(200).json(deleteProduct);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
};
