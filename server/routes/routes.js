const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const PointsController = require('../controllers/PointsController');
const upload = require('../middlewares/multer');



router.get('/users', userController.getUsers);
router.post('/postuser', upload.single('profilepicture'), userController.createUser);
router.post('/postpoint', PointsController.postPoint)
router.post('/getuser', userController.getUser);

module.exports = router;

