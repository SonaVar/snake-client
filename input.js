const {IP, PORT, name, mssgs} = require('./constants');

// Stores the active TCP connection object.
let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const stdin = process.stdin;

const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else {
      for (let item in mssgs) {
        if (key === item) {
          connection.write(mssgs[key]);
        }
      }
    };
  });
};
const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
};

module.exports = {setupInput};