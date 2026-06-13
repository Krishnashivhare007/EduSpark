import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/connectDb.js";

dotenv.config()
const app = express()

const PORT =process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.json({message:"EduSpark Backend Running..."})
})
app.listen(PORT,()=>{
    console.log(`Server Running on port: ${PORT}`);
    connectDb();
})