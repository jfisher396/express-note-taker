const fs = require("fs");
const util = require("util");

const noteData = "./db/db.json";

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class DB {
    async readNotes() {
        try {
            const notesRaw = await readFileAsync(noteData, "UTF8");
            return notesRaw ? JSON.parse(notesRaw) : [];
        } catch (error) {
            console.log("Something went wrong READING the notes ", error)
        }
    }
}

module.exports = new DB();