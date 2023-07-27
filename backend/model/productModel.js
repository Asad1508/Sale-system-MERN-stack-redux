const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:[true,"Please Enter Product Name"],
        trim:true
    },
    code:{
        type:String,
        // required:[true,"Please Enter Product Description"]
    },
    purchaseprice:{
        type:Number,
        // required:[true,"Please Enter Product Price"],
        maxlength:[8,"Price cannot exceed length"]
    },
    retailprice:{
        type:Number,
        // required:[true,"Please Enter Product Price"],
        maxlength:[8,"Price cannot exceed length"]
    },
    category:{
        type: String,
        // required:[true,"Please Enter Product Category"]
    },
    quantitytype:{
        type:String,
        // required:[true,"Please Enter Product quantity"]

    },
    stock:{
        type:Number,
        // required:[true,"Please Enter Product Stock"],
        maxlength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
   
    createdAt:{
        type:Date,
        default:Date.now
    }

})

// productSchema.methods.Add=async function(product,next){
//     if(!this.isModified("name","stock","quantitytype","retailprice","purchaseprice","code"))
//     {
//        next()
//     }
//     this.category= await product.save()
//     return
//     //yaha 10 limit ha password ki aur password ko hash kr rhe save hone se pehly
//     // let product = await Products.create({category})

//     }
  

module.exports=mongoose.model("product",productSchema);
