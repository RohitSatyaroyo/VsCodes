const http=require('http')
var count=0
const server=http.createServer((req,res)=>{
    res.end('hello')
    if(req.url=='/close'){
        server.close()
    }
})
server.on('connection',()=>{
    console.log('server connected...')
})
server.on('request',()=>{
    count++
    console.log(`request is recieved ${count} times .....`)

})
server.listen(8080)