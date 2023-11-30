const{readFile,writeFile}=require('fs')

readFile('data1.js','utf-8',((err,data1)=>{
    if(err)
    console.log(err)
    console.log(data1)
    readFile('data2.js','utf-8',((err,data2)=>{
        if(err){
            console.log(err)
        }
        console.log(data2)
        writeFile('data-async.txt',`${data1} ${data2}`,(err)=>{console.log(err)})
    }))

}))