const mongoose = require("mongoose");

const invoiceschema = new mongoose.Schema({

    name:{
        type:String,
        // required:[true,"Please Enter Product Name"],
        trim:true
    },
  
    purchaseprice:{
        type:Number,
        // required:[true,"Please Enter Product Price"],
        maxlength:[8,"Price cannot exceed length"]
    },
    quantity:{
        type:String,
        // required:[true,"Please Enter Product quantity"]

    },
   
    createdAt:{
        type:Date,
        default:Date.now
    }

})


module.exports = mongoose.model("Order", invoiceschema);
