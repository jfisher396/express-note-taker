//require dependencies
const express = require('express');

//create express app
const app = express();

//create a PORT variable
const PORT = process.env.PORT || 3000;

//set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//create server listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));