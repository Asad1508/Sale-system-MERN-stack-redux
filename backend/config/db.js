const mongose=require("mongoose");

const Connectdbs=async()=>{
    mongose.set("strictQuery", false);
try {
    await mongose.connect("mongodb://127.0.0.1:27017/POS");
console.log("connected successfuly");
} catch (error) {
    console.log("Could not connect DB")
}
}

module.exports=Connectdbs;