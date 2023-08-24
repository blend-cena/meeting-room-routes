const Room = require('../models/room.models');


module.exports.CreateRoom = async (req, res) => {
    try {
        const { name, capacity } = req.body;
        const room = new Room({
            name,
            capacity
        });
        await room.save();
        res.status(201).json(room);
    } catch (error) {
        console.error('Error creating room', error);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports.GetAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        console.error('Error fetching rooms', error);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports.GetRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.roomId);
        if (!room) {
            console.log('Room not found');
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (error) {
        console.error('Error fetching room by ID', error);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports.UpdateRoomById = async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.roomId, req.body, { new: true });
        if (!room) {
            console.log('Room not found');
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (error) {
        console.error('Error updating room', error);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports.DeleteRoomById = async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.roomId);
        if (!room) {
            console.log('Room not found');
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
        console.error('Error deleting room', error);
        res.status(500).json({ error: 'Server error' });
    }
};
