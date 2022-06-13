const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('response',(name, id) => {
    console.log(`data recieved: ${name} : ${id}`);
});
emitter.on('response',() => {
    console.log('Other Task');
});


emitter.emit('response','heat', 44);

