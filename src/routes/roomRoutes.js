const express = require('express');
const roomController = require('../controllers/room.controller');
const router = express.Router();


router.post('/', roomController.CreateRoom);
router.get('/', roomController.GetAllRooms);
router.get('/:roomId', roomController.GetRoomById);
router.put('/:roomId', roomController.UpdateRoomById);
router.delete('/:roomId', roomController.DeleteRoomById);

module.exports.roomRoutes = router;
