'use strict';

var Shelf = function(genre) {
  this.genre = genre;
  this.books = [];
};

Shelf.prototype.addBook = function(title, author, genre) {
  this.books.push(new Book(title, author, genre));
}

Shelf.prototype.removeBook = function(index) {
  this.books.splice(index);
}

