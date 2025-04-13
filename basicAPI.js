const http = require('http');
const empData = require('./empData'); // Import the data

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(empData)); // Send the data as JSON
    res.end();
}).listen(1000);

console.log("Server running on http://localhost:1000");