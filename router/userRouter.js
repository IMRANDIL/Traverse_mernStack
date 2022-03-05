const router = require('express').Router();

const { registerUser, loginUser, getMe } = require('../controller/userController');
const { protectRoute } = require('../middleware/authMiddleware');





router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protectRoute, getMe);












module.exports = router;