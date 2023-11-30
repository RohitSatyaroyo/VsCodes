const fs=require('fs')

fs.readFile('largefile.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
    
})