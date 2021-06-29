const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workOutSchema = new Schema({

});

const WorkOut = mongoose.model('WorkOut', workOutSchema);

module.exports = WorkOut;