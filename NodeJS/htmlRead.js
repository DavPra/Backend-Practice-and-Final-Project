const http = require ('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('Helloworld.html', (err, data) => {
    
    res.end(data);
    });
    });

    server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/')
    })