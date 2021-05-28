function findAuthorById(authors, id) {
  return findElementById(authors, id);
}

function findBookById(books, id) {
  return findElementById(books, id);
}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

function findElementById(elements, id) {
  return elements.find((element) => element.id === id);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
