const mongoose = require('mongoose');
const { Schema } = mongoose;


const MeetingSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date.UTC(0, 0, undefined, undefined, undefined, undefined, undefined)},
    start_time: { type: Date.UTC(0, 0, undefined, undefined, undefined, undefined, undefined)},
    end_time: { type: Date.UTC(0, 0, undefined, undefined, undefined, undefined, undefined) },
    room: { type: Schema.Types.ObjectId, ref: 'Room',  required: true },
});

module.exports = mongoose.model('Meeting', MeetingSchema);