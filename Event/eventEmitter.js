class EventEmitter {
  constructor() {
    this.events = {}; // To hold named events
  }

  // Subscribe to event
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []; // Initialize an array to hold callbacks
    }
    this.events[eventName].push(callback);

    // Provide method for unsubscribing
    return () => this.unsubscribe(eventName, callback);
  }

  // Unsubscribe from event
  unsubscribe(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb !== callback
      );
    }
  }

  // Emit event (call all callbacks subscribed to this event)
  emit(eventName, ...args) {
    const callbacks = this.events[eventName] || [];
    callbacks.forEach((callback) => callback(...args));
  }

  // Subscribe to an event for only once
  once(eventName, callback) {
    const onceCallback = (...args) => {
      callback(...args); // Invoke the original callback
      this.unsubscribe(eventName, onceCallback); // Remove the listener after it has been invoked
    };
    this.subscribe(eventName, onceCallback);
  }
}


const emitter = new EventEmitter();

// Example of subscribing
const unsubscribeHello = emitter.subscribe('hello', (data) =>
  console.log('Hello event received:', data)
);

// Example of emitting
emitter.emit('hello', 123, { message: 'Hello there!' },123);

// Example of unsubscribing
unsubscribeHello();

// Example of subscribing to an event for only once
emitter.once('onceEvent', (data) => console.log('Once event received:', data));
emitter.emit('onceEvent', { message: 'This will only be logged once' });

// Following emit won't cause any effect as the listener has been removed after the first emit
emitter.emit('onceEvent', { message: 'This will not be logged' });