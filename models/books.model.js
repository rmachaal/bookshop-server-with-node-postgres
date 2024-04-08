const db = require("../db/connection");

function readBooksByGenre() {
  return db.query(`SELECT * FROM books;`).then((data) => {
    console.log(data.rows);
    db.end();
  });
}

module.exports = readBooksByGenre;
