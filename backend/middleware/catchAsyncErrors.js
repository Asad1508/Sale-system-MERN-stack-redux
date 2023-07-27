//isme thefunc me code arha jo yaha akr try catch se guzar rha
//hamne code isme iss liye dala jab name ni likhty thay tu postman loading kri ja rha thay
//tu hamne ussay try catch me likha tu pata chal gya k name missing ha
module.exports=thefunc=>(req,res,next)=>{
    Promise.resolve(thefunc(req,res,next)).catch(next);
}