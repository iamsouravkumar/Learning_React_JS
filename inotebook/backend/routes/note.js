const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchUser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');

//Route : 1 - Get all the notes using GET "api/auth/fetchallnotes". Login Required
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes)
})

//Route : 2 - To add the notes using POST "api/auth/addnote". Login Required
router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid Title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    try {

        const { title, description, tag } = req.body;

        //if there are errors return bad request and errors

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title,
            description,
            tag,
            user: req.user.id
        })

        const savedNotes = await note.save()
        res.json(savedNotes)

    } catch (error) {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router