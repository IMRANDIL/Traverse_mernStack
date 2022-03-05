const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controller/goalController');

const router = require('express').Router();

const { protectRoute } = require('../middleware/authMiddleware')



router.route('/').get(protectRoute, getGoals).post(protectRoute, setGoal);

router.route('/:id').put(protectRoute, updateGoal).delete(protectRoute, deleteGoal)








module.exports = router;