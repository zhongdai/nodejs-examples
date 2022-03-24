const http  = require('http')

http.createServer( (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hello World\n');
    console.log(`Getting requests from ${JSON.stringify(req.headers)}`)
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
