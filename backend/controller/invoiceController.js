const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Invoice = require("../model/invoiceModel");
const ErrorHandler = require("../utils/errorhandler");
class Ordercontroller{

    // Create new Order
    static newInvoice = catchAsyncErrors(async (req, res, next) => {
        //destructuring object
        const {name,quantity,price} = req.body;
        
        const order = await Invoice.create({
          name,quantity,purchaseprice:price,
          paidAt: Date.now(),
          
        });
        
        res.status(201).json({
          success: true,
          order,
        });
      });
    

    
    //   // get all Orders -- Admin
      static getAllinvoices = catchAsyncErrors(async (req, res, next) => {
        const orders = await Invoice.find();
      
        //yaha ham total ammount get kr rhe as a admin yani agr 10 bando ne order dia tu total kitne bne
        // let totalAmount = 0;
        // // takay admin ko show kr ske total amount k orders
        // orders.forEach((order) => {
        //   totalAmount += order.totalPrice;
        // });
      
        res.status(200).json({
          success: true,
          orders,
        });
      });
    }
module.exports=Ordercontroller