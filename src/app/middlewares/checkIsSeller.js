const User = require("../modules/user/user.model");

exports.checkIsSeller = async (req, res, next) => {
  try {
    const { sellerEmail } = req.query;
    // console.log("sellerEmail", sellerEmail);
    const isSeller = await User.findOne({ email: sellerEmail, role: "seller" })
    // console.log(isSeller);

    if (!isSeller) {
      return res.status(401).json({
        status: 'failed',
        error: 'User is not a seller!!'
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
