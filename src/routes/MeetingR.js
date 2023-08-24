const express = require('express');
const meetingController = require('../controllers/meeting.controller');
const router = express.Router();


router.post('/', meetingController.CreateMeeting);
router.get('/', meetingController.GetAllMeetings);
router.get('/:meetingId', meetingController.GetMeetingById);
router.put('/:meetingId', meetingController.UpdateMeetingById);
router.delete('/:meetingId', meetingController.DeleteMeetingById);

module.exports.MeetingR = router;
