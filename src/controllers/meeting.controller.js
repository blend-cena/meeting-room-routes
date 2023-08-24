const Meeting = require('../models/meeting.models');


module.exports.CreateMeeting = async (req, res) => {
    try {
        const { title, date, start_time, end_time, room } = req.body;
        const meeting = new Meeting({
            title,
            date,
            start_time,
            end_time,
            room: room,
        });
        await meeting.save();
        res.status(201).json(meeting);
    } catch (error) {
        console.error('Error creating meeting', error);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports.GetAllMeetings = async (req, res) => {
    try {
        const meetings = await Meeting.find().populate('room');
        res.status(200).json(meetings);
    } catch (error) {
        console.error('Error fetching meetings', error);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports.GetMeetingById = async (req, res) => {
    try {
        const meeting = await Meeting.findById(req.params.meetingId);
        if (!meeting) {
            console.log('Meeting not found');
            return res.status(404).json({ error: 'Meeting not found' });
        }
        res.status(200).json(meeting);
    } catch (error) {
        console.error('Error fetching meeting by ID', error);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports.UpdateMeetingById = async (req, res) => {
    try {
        const { title, date, start_time, end_time, room } = req.body;
        const updatedMeeting = await Meeting.findByIdAndUpdate(
            req.params.meetingId,
            {
                title,
                date,
                start_time,
                end_time,
                room: room,
            },
            { new: true }
        );
        if (!updatedMeeting) {
            console.log('Meeting not found');
            return res.status(404).json({ error: 'Meeting not found' });
        }
        res.status(200).json(updatedMeeting);
    } catch (error) {
        console.error('Error updating meeting', error);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports.DeleteMeetingById = async (req, res) => {
    try {
        const meeting = await Meeting.findByIdAndDelete(req.params.meetingId);
        if (!meeting) {
            console.log('Meeting not found');
            return res.status(404).json({ error: 'Meeting not found' });
        }
        res.status(200).json({ message: 'Meeting deleted successfully' });
    } catch (error) {
        console.error('Error deleting meeting', error);
        res.status(500).json({ error: 'Server error' });
    }
};
