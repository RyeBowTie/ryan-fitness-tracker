const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({

});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;