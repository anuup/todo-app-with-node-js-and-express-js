const express= require("express");
const connectDB =   require("./config/db")
connectDB();
const app = express();
const Todo=require=("./routes/todo")
app.use(express.json())
appp.use("/api/vi/todo",Todo)
app.use(express.urlencoded({extended:false}))
app.listen(5000,()=>console.log("server running on port 5000"))
