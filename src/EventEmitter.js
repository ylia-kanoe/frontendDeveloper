class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  emit(eventName, args) {
    const event = this.events[eventName];
    console.log(this.events)
    if (!event) {
      console.log(`${eventName} not defined`)
    }
    if (event) {
      event.forEach(callback => callback.call(null, args))
    }
  }

  off(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback)
    if (!this.events[eventName].length) {
      delete this.events[eventName]
    }
  }
}

/*
const emitter = new EventEmitter();

function logData(data) {
  console.log(data);
}

function dataTest(data) {
  console.log(2 + ': ' + JSON.stringify(data));
}

emitter.on('data', logData);
emitter.on('data', dataTest);

emitter.emit('data', { message: 'Hello, world!' });

emitter.off('data', logData);
emitter.off('data', dataTest);

emitter.emit('data', { message: 'Hello, world!' }); */

