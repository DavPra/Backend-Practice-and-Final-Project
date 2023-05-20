const http = require('http')
const custom = require('./myown')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + custom.myDateTime());
    res.end()
})

server.listen(3000, () => {
   console.log('Server running at http://localhost:3000/')
})