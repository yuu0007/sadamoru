const Sadamoru = require('./Structures/Sadamoru');
const config = require('../config.json');

const client = new Sadamoru(config);
client.start();
