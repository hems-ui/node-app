const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('HOme page\n')
    }
    if(req.url === '/about' ) {
        res.end('This is the about page\n')
    }
    res.end( 'Page not found')
   })

server.listen(5000, ()=> {
    console.log("server is running");
});