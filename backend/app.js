const express=require("express")
const app=express()
const cookieparser=require("cookie-parser")
// const errormiddleware=require("./middleware/error")
const dotenv=require("dotenv")
dotenv.config({path:"config/config.env"})
const product=require("./route/productroute")
const invoice=require("./route/invoiceroute")
// cookie ko acces krne k liye use kia q k authenticatedUser.js me ham cookie ko get kr rhe authentication k liye
// k user authenticated ha b ya ni tu yaha app.use(cookieparser()) ka use kia
app.use(cookieparser())
app.use(express.json());
app.use("/api/v1",product)
app.use("/api/v1",invoice)

// app.use(errormiddleware)

module.exports=app