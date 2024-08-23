import express from "express";
import userRoutes  from "./users/users.js";
import bodyParser from "body-parser"
const app = express();


app.use(bodyParser.json())
app.use("/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("hello From HomePage");
})

app.listen(3000,()=>{console.log("server running on 3000")})
