const http = require("http");

http.createServer((request,response) =>{

    response.writeHead(200,{'Content-Type':'text/plain'});

    response.end("Hello Bharat");
    
}).listen(8082);


console.log("Server is running");