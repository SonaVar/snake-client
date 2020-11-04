const net = require('net');
const {IP, PORT, name} = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', (connect) => {
    console.log('Successfully connected to game server');
  });
  conn.on('connect', () => {
    conn.write(name);    
  });
  return conn;
}

module.exports = {connect};