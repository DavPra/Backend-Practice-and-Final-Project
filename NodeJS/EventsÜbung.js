const events = require('events')
const eventEmitter = new events.EventEmitter()

const myEvent = function() {
    console.log('I hear a scream!')
}


eventEmitter.on('scream', myEvent);

eventEmitter.emit('scream')