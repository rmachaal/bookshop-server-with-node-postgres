const express = require("./node_modules/express");
const getBooksByGenre = require("./controllers/books.controller");

const app = express();

app.get("/api/books", getBooksByGenre);

module.exports = app