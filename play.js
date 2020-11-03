const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let object = connect();

setupInput(object);