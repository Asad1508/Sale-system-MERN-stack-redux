const express=require("express")
const Product = require("../controller/productController")
const route=express.Router()
route.post("/create",Product.createproduct)
route.get("/getproduct",Product.getAllproduct)
route.put("/updateproduct/:id",Product.updateProduct)
route.delete("/deleteproduct/:id",Product.deleteProduct)
route.get("/getsingleproduct/:id",Product.getproductDetails)
route.post("/addcategory",Product.addCategory)
route.put("/editcategory/:id",Product.editCategory)
route.delete("/deletecategory/:id",Product.deletecategory)

module.exports=route