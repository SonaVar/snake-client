//const net = require('net');

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const connect = require('./client');
console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

setupInput();

