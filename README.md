# Express Note Taker

An application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file. 

[A deployed version can be viewed here.](https://sheltered-lake-74318.herokuapp.com/)

## Contents

1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance criteria](#acceptance%20criteria)
    3. [Visuals](#visuals)
    4. [Build](#build)
2. [Setup](#setup)
3. [Credits](#credits)
4. [License](#license)
5. [Contributing](#contributing)

### About

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

### User Story

    AS A user, I want to be able to write and save notes
    I WANT to be able to delete notes I've written before
    SO THAT I can organize my thoughts and keep track of tasks I need to complete

### Acceptance Criteria

    Application should allow users to create and save notes.
    Application should allow users to view previously saved notes.
    Application should allow users to delete previously saved notes.

    * The application frontend has already been created, it's your job to build the backend and connect the two.

    * The following HTML routes should be created:

    * GET `/notes` - Should return the `notes.html` file.

    * GET `*` - Should return the `index.html` file

    * The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

    * The following API routes should be created:

    * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

    * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the    client.

    * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


### Visuals:


![Screenshot of load page](/media/note-taker-1.png)
![Screenshot of load page](/media/note-taker-2.png)
![Screenshot of load page](/media/note-taker-3.png)


### Build

* In HTML, semantic tags have been used to aid with accessibility.


## Setup

To clone the repo:
```
git clone git@github.com:jfisher396/express-note-taker.git
``` 

## Credits

[James Fisher](https://github.com/jfisher396)

## License

Built by [James Fisher](https://james-fisher-web-developer.herokuapp.com/).
This application is released under [MIT](assets/LICENSE.txt) license.

## Contributing

To contribute to this application, create a pull request.
Here are the steps needed for doing that:
- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request

Following a code review, your feature will be merged.

=======
