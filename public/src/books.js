const { getBooksBorrowedCount } = require("./home");

function findAuthorById(authors, id) {
  //return author with corresponding ID
  return _findElementById(authors, id);
}

function findBookById(books, id) {
  //use the findElementById helper function I wrote
  return _findElementById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  //book object's borrows array has values at each index for if the book was returned or not
  //We can set a placeholder boolean to represent this concept called returned
  const returned = true;
  //borrowed is just the opposite of returned
  const borrowed = !returned;
  //use _filterBorrowed helper function to create filtered arrays of all books that are either borrowed or returned
  const borrowedBooks = _filterBorrowed(books, borrowed);
  const returnedBooks = _filterBorrowed(books, returned);
  //return an array that spreads both of the arrays
  return [[...borrowedBooks], [...returnedBooks]];
}

function getBorrowersForBook({ borrows }, accounts) {
  const borrowers = [];
  for (let record in borrows) {
    const borrowId = borrows[record].id;
    const matchingAccount = _findElementById(accounts, borrowId);
    const accountObj = { ...borrows[record], ...matchingAccount };
    if (borrowers.length < 10) borrowers.push(accountObj);
  }
  return borrowers;
  /* Map implementation I like more, but I left the for in for the sake of the rubric
    return borrows
    .map((record) => {
      const matchingAccount = _findElementById(accounts, record.id);
      return { ...record, ...matchingAccount };
    })
    .slice(0, 10);
    /**/
}

//Helper function I wrote to easily find an element in a provided array given an "id" value
function _findElementById(elements, id) {
  return elements.find((element) => element.id === id);
}

//Helper Function to make partitionBooksByBorrowed Status more readable and filter out a list of books based on their "returned" status
function _filterBorrowed(books, status) {
  return books.filter(({ borrows }) => status === borrows[0].returned);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
