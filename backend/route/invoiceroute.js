const express=require("express")
const Invoice = require("../controller/invoiceController")
const route=express.Router()
route.post("/createinvoice",Invoice.newInvoice)
route.get("/getinvoices",Invoice.getAllinvoices)


module.exports=route