const fs=require('fs')

const stream=fs.createReadStream('largefile.txt')

stream.on('data',(chunk)=>{
    console.log(`Recieved ${chunk.length} of data`)
})

stream.on('end',()=>{
    console.log('end of file is reached')
})

stream.on('error',(err)=>{
    console.log(err)
})