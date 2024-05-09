const { createProductsService } = require("./product.service");

// post new blog
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

