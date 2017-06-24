/**
 * Created by Jaime on 17/06/2017.
 */
let events = require('events');
let util = require('util');

let EventEmitter = events.EventEmitter;

let emitter = new EventEmitter();

emitter.on('start',()=>{
    console.log("starting emitter")
})

emitter.emit('start');
emitter.emit('count', 1);
emitter.emit('count', 2);

function Counter() {
    let self = this;
    EventEmitter.call(this);
    let count = 0;

    this.start = () => {
        this.emit('start');

        setInterval(() => {
            self.emit('count', count);
            ++count;

        }, 1000)
    }
}

util.inherits(Counter, EventEmitter);

let counter = new Counter();

counter.once('start', () => {
    console.log('start event');
});

counter.on('count', count => {
    console.log('count: ' + count);
});

counter.start();