const fs=require('fs')
//readubg the content from file

//synchronous
const data=fs.readFileSync('moduledemo.js','utf-8')

//asynchronous

// const data2=fs.readFile('moduledemo.js','utf-8',(error,data2)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(data2)
// })
console.log(data)

for(var i=0;i<10;i++){
    console.log(i)
}