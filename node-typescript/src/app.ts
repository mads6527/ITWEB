import http from 'http';
import httpStatus from 'http-status-codes';
import fs from 'fs';

const port = 3000;
const app = http.createServer( ( request, response ) => {
    switch(request.url){
        case '/':
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write("Welcome to http node.js");
            response.end();
            break;
        case '/index.html':
            fs.readFile('src/views/index.html', (error,data) => {
                if(error){
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else{
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.write(data);
                    response.end();
                }
            })
            break;
        case '/customer':
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write("Welcome to Customer page");
            response.end();
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write("Page not found");
            response.end();
            break;
    }
 console.log( 'Received an incoming request!' );
 response.writeHead( httpStatus.OK, {
 'Content-Type': 'text/html'
 } );
 } );
app.listen( port );
console.log( `The server has started and is listening on port number: ${port}` );