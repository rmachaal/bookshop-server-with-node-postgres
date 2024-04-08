const { get } = require("http");
const readBooksByGenre = require("../models/books.model");

function getBooksByGenre() {
  readBooksByGenre()
}

module.exports = getBooksByGenre;
