import React from 'react'
import apiSlice from '../store/apiSlice'


function Lables() {
   const{data}=apiSlice.useGetLablesQuery()
   console.log(data)
   
   console.log(data)
  return (
   <div>
    {data && data.map((v,i)=><LableComp key={i} data ={v}></LableComp>)}

    
   </div>
  )
}

function LableComp({data}){
   return(
      <div>
         <h1>{data.type}</h1> 
         <h2>{data.category}</h2>
         <h3>{data.amount}</h3>
         <h4>{data.icon}</h4>
         <h5>{data.color}</h5>
         
      </div>
   )
}

export default Lables