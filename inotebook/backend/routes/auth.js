const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator'); //for user validation
const bcrypt = require('bcryptjs'); //for encrypting password in hash and salt
const JWT_SECRET = 'User Created Successfully'
const jwt = require('jsonwebtoken');  //for authenticate user through token

//create a user using POST "/api/auth/createuser". No Login required.

router.post('/createuser', [
    body('email', 'Enter a valid Email').isEmail(),
    body('name', 'Enter a vaid Name').isLength({ min: 3 }),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    //if there are errors return bad request and errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        //check whether the user with email exists already.

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: 'sorry, a user with this email is already exists' })
        }
        //create a new user
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken })

    } catch (error) {
        console.log(err.message);
        res.status(500).send("some error occured");
    }
})

module.exports = router