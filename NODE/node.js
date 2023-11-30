const http=require('http')

const server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.end('hello world rohit')

    }
   
    if(req.url=='/hi'){
        return hi(req,res)

    }
    else{
        return requestnotfound
    }
})

function hi(req,res){
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({name:'tarun'}))
}
function requestnotfound(req,res){
   req.writeHead(404,{'Content-Type':'text/plain'})
   res.end('Request resource not found')
}
server.listen(8082)//start the server