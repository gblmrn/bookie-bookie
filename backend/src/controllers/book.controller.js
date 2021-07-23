const Book = require("../models/book.model");

exports.findAll = function (req, res) {
    Book.findAll(function (err, books) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(books);
    });
};

exports.create = function (req, res)  {
    const new_book = Book(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res
            .status(400)
            .send({ error: true, message: "Please provide all required fields"});
    } else {
        Book.create(new_book, function (err, book) {
            if (err) {
                res.send(err);
            } 
            res.json({
                error: false,
                message: "Book added successfully!",
                data: book,
            });
        });
    }
};
exports.findById = function (req, res) {
  Book.findById(req.params.id, function(err, book){
   	if(err) res.send(err);
     	res.json(book);
    });
};
exports.update = function (req,res) {
	if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
		res.status(400).send({ error: true, message: "Please provide all required fields" });
	} else {
		Book.update(req.params.id, new Book(req.body), function(err, book) {
			if(err) res.send(err);
			res.json({error: false, message: "User successfully updated" });
		});
	}
};
exports.delete = function(req, res) {
	Book.delete(req.params.id, function (err, book) {
		if (err) res.send(err);
		res.json({ error: false, message: "Book successfully deleted" });
	});
};