# Express Note Taker

<p>
  <img src="https://img.shields.io/badge/-JavaScript-yellow" />
  <img src="https://img.shields.io/badge/-OOP-red" />
  <img src="https://img.shields.io/badge/-JSON-blue" />
  <img src="https://img.shields.io/badge/-Express-blueviolet" />
  <img src="https://img.shields.io/badge/UUID-orange"  />
  <img src="https://img.shields.io/badge/-Node-green" />
  <img src="https://img.shields.io/badge/-Heroku-grey" />
</p>

---

## Table of Contents
  * [Description](#description)
  * [Visuals](#visuals)
  * [License](#license)
  * [Contributing](#contribution)
  * [Questions](#contact-information)

---

## Description

An application that can be used to write, save, and delete notes using Node and Express, utilizing JSON for data storage. With an already completed front-end, my role was to build the back-end and connect it to the front-end, as stated below:

    * The application frontend has already been created, it's your job to build the backend and connect the two.

    * The following HTML routes should be created:

      * GET `/notes` - Should return the `notes.html` file.

      * GET `*` - Should return the `index.html` file

    * The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

    * The following API routes should be created:

      * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

      * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

      * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

---

## User Story

    AS A user, I want to be able to write and save notes

    I WANT to be able to delete notes I've written before

    SO THAT I can organize my thoughts and keep track of tasks I need to complete

---

## Visuals

![screenshot 1](media/note-taker-screenshot1.png)
---
![screenshot 1](media/not-taker-screenshot2.png)

---

## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

## Contributing

Not accepting contributions at this time

---

## Contact Information
  * GitHub Username: [jfisher396](https://github.com/jfisher396)
  * GitHub Email: james@james-fisher-web-developer.com
  * <p>
    <a href="https://www.linkedin.com/in/jamesfisher-webdev/"><img alt="Linkedin: James Fisher" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" /></a>
    </p>