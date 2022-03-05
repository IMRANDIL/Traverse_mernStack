


// @desc register new user

// @route post /api/users

// @access public




exports.registerUser = async (req, res, next) => {
    res.json({ msg: 'register user' })
}







// @desc authenticate user

// @route post /api/users/login

// @access public




exports.loginUser = async (req, res, next) => {
    res.json({ msg: 'login user' })
}







// @desc Get user data

// @route Get /api/users/me

// @access private




exports.getMe = async (req, res, next) => {
    res.json({ msg: 'my data' })
}