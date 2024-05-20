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



  // // Get filtered products with both category and gender
    // if (category && gender && !isNaN(minPrice) && !isNaN(maxPrice)) {
    //   await mongoose.connect(process.env.DATABASE_URL);

    //   // total products count
    //   const totalProducts = await Product.countDocuments({
    //     category: new RegExp(`\\b${category}\\b`, 'i'),
    //     gender: new RegExp(`\\b${gender}\\b`, 'i'),
    //     price: { $gte: minPrice, $lte: maxPrice }
    //   });

    //   // result 
    //   const result = await Product?.find(
    //     {
    //       category: new RegExp(`\\b${category}\\b`, 'i'),
    //       gender: new RegExp(`\\b${gender}\\b`, 'i'),
    //       price: { $gte: minPrice, $lte: maxPrice }
    //     }
    //   )?.sort(sortOption)?.skip(skip)?.limit(limit);

    //   if (result?.length > 0) {
    //     return new NextResponse(
    //       JSON.stringify({
    //         status: "Success",
    //         message: "Categorize products retrieved successfully",
    //         totalProducts,
    //         data: result,
    //       }),
    //       { status: 200 }
    //     );
    //   }
    //   else {
    //     return new NextResponse(
    //       JSON.stringify({
    //         message: "No products available of this category or gender",
    //       }),
    //       { status: 404 }
    //     );
    //   }
    // }

    // // Get only categorize products
    // if (category && !isNaN(minPrice) && !isNaN(maxPrice)) {
    //   await mongoose.connect(process.env.DATABASE_URL);

    //   // total products count
    //   const totalProducts = await Product.countDocuments(
    //     {
    //       category: new RegExp(`\\b${category}\\b`, 'i'),
    //       price: { $gte: minPrice, $lte: maxPrice }
    //     }
    //   );
    //   // result
    //   const result = await Product?.find({
    //     category: new RegExp(`\\b${category}\\b`, 'i'),
    //     price: { $gte: minPrice, $lte: maxPrice }
    //   })?.skip(skip)?.limit(limit);;

    //   if (result?.length > 0) {
    //     return new NextResponse(
    //       JSON.stringify({
    //         status: "Success",
    //         message: "Categorize products retrieved successfully",
    //         totalProducts,
    //         data: result,
    //       }),
    //       { status: 200 }
    //     );
    //   }
    //   else {
    //     return new NextResponse(
    //       JSON.stringify({
    //         message: "No products available of this category or gender",
    //       }),
    //       { status: 404 }
    //     );
    //   }
    // }

    // // Get only gender based products
    // if (gender && !isNaN(minPrice) && !isNaN(maxPrice)) {
    //   await mongoose.connect(process.env.DATABASE_URL);

    //   // total products count
    //   const totalProducts = await Product.countDocuments(
    //     {
    //       gender: new RegExp(`\\b${gender}\\b`, 'i'),
    //       price: { $gte: minPrice, $lte: maxPrice }
    //     }
    //   );
    //   // result
    //   const result = await Product?.find({
    //     gender: new RegExp(`\\b${gender}\\b`, 'i'),
    //     price: { $gte: minPrice, $lte: maxPrice }
    //   })?.skip(skip)?.limit(limit);;
    //   if (result?.length > 0) {
    //     return new NextResponse(
    //       JSON.stringify({
    //         status: "Success",
    //         message: "Categorize products retrieved successfully",
    //         totalProducts,
    //         data: result,
    //       }),
    //       { status: 200 }
    //     );
    //   }
    //   else {
    //     return new NextResponse(
    //       JSON.stringify({
    //         message: "No products available of this category or gender",
    //       }),
    //       { status: 404 }
    //     );
    //   }
    // }