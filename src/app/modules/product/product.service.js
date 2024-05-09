const { ObjectId } = require("mongodb");
const Product = require("./product.model");


exports.createProductsService = async (data) => {
    const result = await Product?.create(data);
    return result;
}

exports.updateProductsService = async (id ,data) => {
    const result = await Product?.findByIdAndUpdate({_id: new ObjectId(id)}, {
        $set : data
    });
    
    return result;
}