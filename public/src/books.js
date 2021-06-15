const { getBooksBorrowedCount } = require("./home");

function findAuthorById(authors, id) {}

function findBookById(books, id) {
  //use the findElementById helper function I wrote
  return findElementById(books, id);
}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {
  /*pseudo code
  final array = []
  for each record in book.borrows
  {
    accounts.find((account) => account.id == borrows[i].id)
    obj_x={
      ...books.borrows[i],
      ...(account with same id as borrows[i].id)
    } 
    finalArray.push(obj_x)
  }
  */
}

//Helper function I wrote to easily find an element in a provided array given an "id" value
function findElementById(elements, id) {
  return elements.find((element) => element.id === id);
}

//Helper Function to make partitionBooksByBorrowed Status more readable and filter out a list of books based on their "returned" status
function filterBorrowed(books, status) {
  return books.filter(({ borrows }) => status === borrows[0].returned);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
