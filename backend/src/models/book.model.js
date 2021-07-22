'use strict';
var dbConn = require('./../../config/db.config');
// Book object create
var Book = function(book) {
    this.title = book.title;
    this.author = book.author;
    this.releaseDate = book.releaseDate;
};
Book.create =  function(newBook, result) {
    dbConn.query("INSERT INTO books set ?", newBook, function(err, res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Book.findAll = function (result) {
    dbConn.query("Select * from books", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('books: ', res);
            result(null, res);
        }
    });
};
module.exports = Book   ;