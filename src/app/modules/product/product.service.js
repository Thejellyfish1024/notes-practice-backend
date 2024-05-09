const Product = require("./product.model");


exports.createProductsService = async (data) => {
    const result = await Product?.create(data);
    return result;
}