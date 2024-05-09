const { ObjectId } = require("mongodb");
const Product = require("../modules/product/product.model");


exports.checkIsSameSeller = async (req, res, next) => {
  try {
    const { sellerEmail } = req?.query;
    const id = req?.params?.id;
    console.log("sellerEmail", sellerEmail);
    const isSameSeller = await Product.findOne({ _id: new ObjectId(id), sellerEmail: sellerEmail })
    console.log("is same seller", isSameSeller);

    if (!isSameSeller) {
      return res.status(401).json({
        status: 'failed',
        error: 'User is not the product seller!!'
      })
    }

    next();

  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Something went wrong!!",
      error: error,
    });
  }
};
