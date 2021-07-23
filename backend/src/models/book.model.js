"use strict";
var dbConn = require("./../../config/db.config");
const { Category } = require("./enums/category");
// Book object create
var Book = function (book) {
  this.title = book.title;
  this.author = book.author;
  this.coverImage = book.coverImage;
  this.price = book.price;
  this.specialPrice = 0;
  this.tags = [];
  this.category = book.category;
  this.ratingScore = 0;
  this.totalRating = 0;
};
Book.create = function (newBook, result) {
  dbConn.query("INSERT INTO books set ?", newBook, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Book.findById = function (id, result) {
  dbConn.query("Select * from books where id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Book.update = function (id, book, result) {
  dbConn.query(
    "UPDATE books SET title = ?, author = ?, coverImage = ?, price = ?, specialPrice = ?, tags = ?, category = ?, ratingScore = ?, totalRating = ? WHERE id = ? ",
    [
      book.title,
      book.author,
      book.coverImage,
      book.price,
      book.specialPrice,
      book.tags,
      book.category,
      book.ratingScore,
      book.totalRating,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Book.findAll = function (result) {
  dbConn.query("Select * from books", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("books: ", res);
      result(null, res);
    }
  });
};
Book.delete = function (id, result) {
  dbConn.query("DELETE FROM books WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
module.exports = Book;
