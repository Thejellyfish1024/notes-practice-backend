const { createProductsService, updateProductsService } = require("./product.service");

// post new product
exports.createProduct = async (req, res) => {
    try {
        const data = req?.body;
        const result = await createProductsService(data);
        return res?.status(200)?.send({
            status: "Success",
            message: "Blog created successful",
            data: result,
        });
    } catch (error) {
        console.log("Server side error");
        res.status(400).send({
            status: "Failed",
            message: "Something went wrong!!",
            error: error,
        });
    }
}

// update existing product
exports.updateProduct = async (req, res) => {
    try {
        const data = req?.body;
        const id = req?.params?.id;
        const result = await updateProductsService(id,data);
        return res?.status(200)?.send({
            status: "Success",
            message: "Product updated successful",
            data: result,
        });
    } catch (error) {
        console.log("Server side error");
        res.status(400).send({
            status: "Failed",
            message: "Something went wrong!!",
            error: error,
        });
    }
}

