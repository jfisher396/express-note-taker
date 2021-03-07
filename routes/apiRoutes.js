const express = require("express");
const router = express.Router();

const uuid = require('uuid');

const DB = require("../db/DB");



    // route to get notes
  router.get("/api/notes", async function (req, res) {
    const notes = await DB.readNotes();
    return res.json(notes);
  });

    // route to add a new note and add it to the json file
  // router.post("/api/notes", function (req, res) {

  //   let newNote = {
  //       id: uuid(),
  //       title: req.body.title,
  //       text: req.body.text
  //   };

  //   noteData.push(newNote);

  //   fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(noteData, null, "\t"), function (err, data) {
  //       if (err) {
  //         return console.log(err);
  //       }
  //       console.log("new note added");
  //     }
  //   );

  //    return res.send(noteData);
  // });


  // // route to delete notes
  // router.delete("/api/notes/:id", function(req,res) {
  //   // separates out the note to delete based on id
  //   const noteToDelete = req.params.id;
  //   // sort through notes file and create a new array minus the note in question
  //   const newNoteData = noteData.filter(note => note.id !== noteToDelete);

  //   writeASync(__dirname + "/../db/db.json", JSON.stringify(newNoteData, null, "\t")).then(function() {
  //       console.log("note removed");
  //   }).catch(function(err) {
  //       throw err
  //   }).then(function() {
  //     window.location.href = "/notes";
  //   });
  
  //   return res.send(noteData)
  // });

module.exports = router;
