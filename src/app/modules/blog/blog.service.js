const blog = require("./blog.model")

exports.createBlogsService = async (data) => {
    // console.log('coming');
    const result = await blog?.create(data);
    // console.log('result', result);
    return result;
}