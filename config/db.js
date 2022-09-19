const mongoose= require("mongoose")
const connectDB= async()=>{

try{

const connect= await mongoose.connect("mongodb+srv://anuup:srinilayam@cluster0.fa9efgg.mongodb.net/?retryWrites=true&w=majority")
console.log("DB connected")

}catch(err){
console.log("DB error",err)
process.exit(1)
}



}
module.exports = connectDB