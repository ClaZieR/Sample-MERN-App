import express  from "express";
import cors from "cors";
import routes from "./routes/route.js";
import dotenv from "dotenv";
import conn from "./database/connection.js";

const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());



//routes
app.use(routes)


//mongo connection
const PORT = process.env.PORT
conn.then(db=>{
    if(!db) return process.exit()


    app.listen(PORT,()=>{
        console.log(`Server is Running on Port : ${PORT}`)
    })
})



