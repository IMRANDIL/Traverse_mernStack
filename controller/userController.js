
const User = require('../models/user')

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

const asyncHandler = require('express-async-handler')

// @desc register new user

// @route post /api/users

// @access public




exports.registerUser = asyncHandler(async (req, res, next) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields!')
    }



    //Check if user exists.....

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already Exists!')
    }


    //hash the password now......

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);


    //create User now...

    const user = await User.create({ name, email, password: hashedPassword });


    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid User Data!')
    }



})







// @desc authenticate user

// @route post /api/users/login

// @access public




exports.loginUser = asyncHandler(async (req, res, next) => {

    const { email, password } = req.body;

    //Check for user email...

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid Credentials!')
    }






})







// @desc Get user data

// @route Get /api/users/me

// @access private




exports.getMe = asyncHandler(async (req, res, next) => {
    res.json({ msg: 'my data' })
});



//Generate JWT token.....

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}