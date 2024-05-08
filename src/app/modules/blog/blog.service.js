const blog = require("./blog.model")

exports.getAllBlogsService = async () => {
    const result = await blog?.find({}).select({
        status: 0
    });
    return result;
}

exports.createBlogsService = async (data) => {
    const result = await blog?.create(data);
    return result;
}