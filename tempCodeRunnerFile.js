http.createServer((request,response) => {
    response.writeHead(200, { 'content-Type': 'text/html' });
    response.write("<h1>Hello From Node Js</h1>")
    response.end();
}).listen(1000)