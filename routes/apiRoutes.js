// import json data from db
const noteData = require("../db/db.json")

console.log(noteData)

module.exports = function(app) {

    app.get("/api/notes", function(req,res) {
        res.json(noteData)
    })



}