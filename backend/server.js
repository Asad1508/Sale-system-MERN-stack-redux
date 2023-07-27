const app=require('./app')

const dotenv=require("dotenv")
const Connectdbs = require('./config/db')
dotenv.config({path:"config/config.env"})
Connectdbs()

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at PORT ${process.env.PORT}`)
})
