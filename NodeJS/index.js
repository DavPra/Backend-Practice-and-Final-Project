const http = require('http');
const hostname = '127.0.0.1';
const port = 3000
const fs = req('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/admin') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html><body><h1>Hello Admin</h1></body></html>')
        res.end()

    } else if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html> <body> <h1>This is a home Page</h1> <br> <a href="/httmlFile"> httmlFile Link </a> <br> <a href="/student"> Student Link </a> <br> <a href="/admin"> Admin Link </a> </body> </html>')
        res.end()

    } else if (req.url ==='/student') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html><body><h1>Das ist Davids Page.</h1></body></html>')
        res.end()
    } 
    
    
    else if (req.url ==='/httmlFile') {
        fs.readfile('HelloWorld.html', (err, data) => {
          res.end(data);
        })
    }


    else if (req.url ==='/api') {
        const myObject = {message: "Ich bin eine JSON Message"}

        res.writeHead(200, {'Content-Type': 'text/JSON'})
        res.write(JSON.stringify(myObject))
        res.write()
        res.end()
    }
     else {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<html><body><h1>Invalid request</h1></body></html>')
    res.end()
    }
});

server.listen(port, hostname, () => {
    console.log('Server started');
});