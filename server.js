var http = require("http");
var onRequest = (request, response)=>{
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hello world!!!');
    response.end();
}
http.createServer(onRequest).listen(8000);