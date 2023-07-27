const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Products = require("../model/productModel");
const ErrorHandler = require("../utils/errorhandler");

class Product{
    static createproduct=catchAsyncErrors(async(req,res)=>{
        // creating product
        // const product = await Products.create(req.body);
        const {code, name, category,stock,retailprice,purchase,quantity}=req.body
        const product = await Products.create({
         code:code,
         name:name,
         category:category,
         stock:stock,
         retailprice:retailprice,
         purchaseprice:purchase,
         quantitytype:quantity
        })
        // console.log("test23"+product)
        res.status(201).json({
            success: true,
            product
        })
    })
    static getAllproduct = catchAsyncErrors(async (req, res) => {
        //isme countDocument built in ha doucment ko count krne k liye
        
        const productsCount = await Products.countDocuments();
        const products = await Products.find()
        res.status(201).json({
            success: true,
            products,
            productsCount,
        })
    })

      // update product
      static updateProduct = catchAsyncErrors(async (req, res) => {
        // ye issliye kia product ha b ya ni 
        let product = await Products.findById(req.params.id);
        console.log("product ha "+product)
        if (!product) {
            return next(new ErrorHandler("product not found", 404))
        }
        product = await Products.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        // yaha updated product agya ha
        res.status(200).json({
            success: true,
            product
        })

    })

    static deleteProduct = catchAsyncErrors(async (req, res, next) => {
        let product = await Products.findById(req.params.id);
        //product na update hone pr ye chle ga 
        if (!product) {
            return next(new ErrorHandler("product not found", 404))
        }

        else {
       await product.deleteOne();
            res.status(200).json({
                success: true,
                message: "product Deleted successfully"
            })
        }
    }
    )
    static deletecategory = catchAsyncErrors(async (req, res, next) => {
        let product = await Products.findById(req.params.id);
        //product na update hone pr ye chle ga 
        if (!product) {
            return next(new ErrorHandler("product not found", 404))
        }

        else {
       await product.deleteOne();
            res.status(200).json({
                success: true,
                message: "product Deleted successfully"
            })
        }
    }
    )
    static getproductDetails = catchAsyncErrors(async (req, res, next) => {
        let product = await Products.findById(req.params.id)
        if (!product) {
            return next(new ErrorHandler("product not found", 404))
        }
        res.status(200).json({
            success: true,
            product
        })

    })
    static addCategory = catchAsyncErrors(async (req, res, next) => {
        const {category}=req.body

        const product=await Products.create({category})
        res.status(200).json({
            success: true,
            product
        })

    })
    static editCategory = catchAsyncErrors(async (req, res, next) => {
        let product = await Products.findById(req.params.id);
        console.log("ye ha wo"+product)
        if (!product) {
            return next(new ErrorHandler("product not found", 404))
        }
        product = await Products.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            product
        })

    })
}
module.exports=Product