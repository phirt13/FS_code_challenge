'use strict';

var Library = function(name, location) {
  this.name = name;
  this.location = location;
  this.shelves = [];
};

Library.prototype.addShelf = function(genre) {
  this.shelves.push(new Shelf(genre));
}

Library.prototype.removeShelf = function(index) {
  this.shelves.splice(index);
}

