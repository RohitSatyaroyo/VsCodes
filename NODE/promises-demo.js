//Producer -reutn promise object

const { rejects } = require("assert")

const calculate=(value)=>{
    return new Promise((resolve,reject)=>{
        if(value){
            resolve(value+2)//resolve is returning some data
        }
        else{
            reject("data is undefined")
        }
    })
}
//Method I
// calculate(2).then((data)=>console.log(data)).catch((error)=>console.log(error))
//if resolve it executes then
//if reject it executes catch
//Method II
const asyncfunc=async()=>{//Call producer function asynchronously
    try{
        const data=await calculate(2)//await for data
        console.log(data)
    }catch(error){
        console.log(error)
    }

}
asyncfunc()


