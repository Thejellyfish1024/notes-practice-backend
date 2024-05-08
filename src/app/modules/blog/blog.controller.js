const { createBlogsService, getAllBlogsService } = require("./blog.service")

// get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        // console.log('hitting');
        const result = await getAllBlogsService();
        return res?.status(200)?.send({
            status: "Success",
            message: "successful",
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
// post new blog
exports.createBlog = async (req, res) => {
    try {
        // console.log('hitting');
        const data = req?.body;
        const result = await createBlogsService(data);
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

