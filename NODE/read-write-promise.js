const {readFile}=require('fs').promises

// readFile('largefile.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

const fetchdata=async ()=>{
    try{
        const data= await readFile('largefile.txt','utf-8')
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
fetchdata()