const asyncHandler = require('express-async-handler');

const Goal = require('../models/goal')

// @desc Ge Goals

// @route Get /api/goals

//@access Private


const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({});

    res.status(200).json(goals)
})




// @desc set goal

// @route post /api/goals

// @access private

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })





    res.status(201).json(goal)
})




// @desc update goal

// @route put /api/goals/:id

// @access private

const updateGoal = asyncHandler(async (req, res, next) => {

    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found')
    }


    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedGoal)
})





// @desc update goal

// @route put /api/goals/:id

// @access private

const deleteGoal = asyncHandler(async (req, res, next) => {

    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found')
    }


    await goal.remove()


    res.status(200).json({ id: req.params.id })
})









module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}


