
import { response } from "express";
import categ from "../models/models.js"
import { trans } from "../models/models.js";
async function creatCat(req,res){   // 2nd2nd creat a callback function using a model using models that need to post 
    const creat = new categ({
        type:"Expense",
        color:"#1F3B5C",
        categegory:"Travel"
    })

    await creat.save(function(err){  //3rd posting the new categ values as creat to the data base using .save
        if(!err) return res.json(creat);
        return res.status(400).json({message:'Error'})
    });
}

async function getCat(req,res){
    let data = await categ.find({})
    return res.json(data);
}


async function creatTrans(req,res){
    const creat2 = new trans({
        name:"salary",
        type:"income",
        categegory:"Travel",
        amount:3000,
    })

    await creat2.save() 
    .then (()=>{res.status(201).json({message:"good"})})
    .catch ((err)=>{return console.log(err)})

}


async function getTrans(req,res){   //4th write a callback function to get data from the mongo db using .find 
    let data2 = await trans.find({})
    return res.json(data2);
}


async function getJoin(req,res){   //5th joining the category database data with transaction database using aggregate 
    trans.aggregate([
        {
            $lookup:               // using this lookup to bind categories table and transaction with the caregories common field
            {
                from:'categories',
                localField:'categegory',
                foreignField:"categegory",
                as:'catInfo'
            }
        },
        {
            $unwind:"$catInfo"  // including category data under catInfo object under the man object
        }
    ]).then(result=>{
        let filter = result.map(v=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,category:v.categegory,color:v.catInfo['color'],icon:v.catInfo['icon']})) //6th then filter needed information from binded object to filter object
        res.json(filter);
    }).catch(err=>{
        res.status(400).json({message:err})
    })
}

export default creatCat
export {getCat,getTrans,creatTrans,getJoin}