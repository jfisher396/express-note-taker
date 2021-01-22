// import json data from db
const fs = require("fs");

const noteData = require("../db/db.json");

// console.log(noteData)

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    console.log(newNote);

    noteData.push(newNote);

    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(noteData, null, "\t"), function (err, data) {
        if (err) {
          return console.log(err);
        }
        console.log(noteData);
      }
    );

    res.send(noteData);
  });
};
