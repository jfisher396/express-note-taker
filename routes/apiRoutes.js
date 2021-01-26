// import json data from db
const fs = require("fs");
const uuid = require('uuid');

const noteData = require("../db/db.json");

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

    noteData.push(newNote);

    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(noteData, null, "\t"), function (err, data) {
        if (err) {
          return console.log(err);
        }
        console.log("new note added");
      }
    );

     return res.send(noteData);
  });


  // route to delete notes
  app.delete("/api/notes/:id", function(req,res) {

    const noteToDelete = req.params.id;
    
    const newNoteData = noteData.filter(note => note.id !== noteToDelete)
    
    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(newNoteData, null, "\t"), function (err, data) {
        if (err) {
          return console.log(err);
        }
        console.log("note deleted");
      }
    );
    
    return res.send(noteData)
  });

};
