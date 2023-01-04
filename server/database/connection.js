import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

mongoose.set('strictQuery', true);
const conn = mongoose.connect(process.env.MONGO_URL)
    .then(db => {
        console.log("Databse connected");
        return db;
    })
    .catch(err => {
        console.log(err)
    })
    
export default conn;