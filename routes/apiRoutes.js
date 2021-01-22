// import json data from db
const fs = require("fs");
const uuid = require('uuid')

const noteData = require("../db/db.json");

// console.log(noteData)

module.exports = function (app) {

    // route to get notes
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });

    // route to add a new note and add it to the json file
  app.post("/api/notes", function (req, res) {

    let newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
    };
    console.log(newNote);

    noteData.push(newNote);

    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(noteData, null, "\t"), function (err, data) {
        if (err) {
          return console.log(err);
        }
        // console.log(noteData);
      }
    );

    res.send(noteData);
  });

  app.delete("/api/notes/:id", function(req,res) {

    // console.log(req.body.title);
    const noteToDelete = req.body.title;

    const newNoteData = {};

    for (let i = 0; i < noteData.length; i++) {
        if (noteToDelete !== noteData[i].title) {
            newNoteData.push()
        }

    }

    res.send("note deleted")
  });

};
