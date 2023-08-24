const mongoose = require('mongoose');
const { Schema } = mongoose;


const RoomSchema = new Schema({
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
});

module.exports = mongoose.model('room', RoomSchema);