import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;

const CatModel = new Schema({
    type:{type:String,default:"Expenses"},
    color:{type:String,default:"#FFFFFF"},
    icon:{type:String,default:"NO"},
    categegory:{type:String,default:""},
})

const TransModel = new Schema({
    name:{type:String,default:""},
    type:{type:String,default:"#Expenses"},
    amount:{type:Number},
    date:{type:Date,default:Date.now},
    categegory:{type:String,default:""}

})


const categ = mongoose.model('categories',CatModel)
const trans =mongoose.model('transactions',TransModel)


export default categ;
export {trans};
