const events = require('events')
const fs = require('fs')
const eventEmitter = new events.EventEmitter()

const output = function(data) {
    console.log('Das ist der Output:\n')
    console.log(data)
    console.log('\n Ende des Files erreicht.')
}

eventEmitter.on('writeOutput', output);

fs.readFile('TestFile.txt', 'utf-8', (err, data) => {
    if(err) console.error('file read error')
    eventEmitter.emit('writeOutput', data)
})

fs.readFile('TestFile2.txt', 'utf-8', (err, data) => {
    if(err) console.error('file read error')
    eventEmitter.emit('writeOutput', data)
})