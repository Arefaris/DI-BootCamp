const { products } = require("../models/productsModel.js");

/** get all products */
// const getAllProducts = (req, res) => {
//     res.json(products)
// }

module.exports = {
  getAllProducts: (req, res) => {
    res.json(products);
  },
};
