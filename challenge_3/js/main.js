'use strict';

var TheCityOfDreamingBooks = new Library('The City Of Dreaming Books', 'Bookholm, Zamonia');

console.log(TheCityOfDreamingBooks);

TheCityOfDreamingBooks.addShelf('Fiction');
TheCityOfDreamingBooks.addShelf('Self-Help');

console.log(TheCityOfDreamingBooks);

TheCityOfDreamingBooks.shelves[0].addBook('Rumo', 'Walter Moers', 'Fiction');
TheCityOfDreamingBooks.shelves[0].addBook('The Call Of The Wild', 'Jack London', 'Fiction');

console.log(TheCityOfDreamingBooks.shelves[0]);

TheCityOfDreamingBooks.shelves[0].removeBook(1);

console.log(TheCityOfDreamingBooks.shelves[0]);

TheCityOfDreamingBooks.removeShelf(1);

console.log(TheCityOfDreamingBooks);


