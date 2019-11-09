const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/api.js")(app);
require("./routes/view.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});