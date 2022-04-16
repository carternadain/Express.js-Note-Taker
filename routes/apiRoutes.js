const router = require('express').Router();
const { text } = require('express');
const saveData = require('../db/saveData.js');

// get request
router.get('/notes', function (req, res) {
    saveData
    .retrieveNotes()
    .then(notes => {
     return res.json(notes)
    })

    // .catch(err => res.status(500).json(err));
  });



// post request
router.post('/notes', (req, res) => {
  console.log (`${req.body} request recieved` );
  const {title, text } = req.body;
  saveData
    .saveNotes(title, text)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
  });


module.exports = router;