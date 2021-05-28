const { getBooksBorrowedCount } = require("./home");

function findAuthorById(authors, id) {
  return findElementById(authors, id);
}

function findBookById(books, id) {
  return findElementById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  const returned = true;
  const loaned = !returned;
  const returnedBooks = filterBorrowed(books, returned);
  const loanedBooks = filterBorrowed(books, loaned);
  return [[...loanedBooks], [...returnedBooks]];
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  let borrowers = [];
  for (let record in borrows) {
    const matchingAccount = accounts.find(
      (account) => account.id === borrows[record].id
    );
    const accountObj = { ...borrows[record], ...matchingAccount };
    if (borrowers.length < 10) borrowers.push(accountObj);
  }
  return borrowers;
}

function findElementById(elements, id) {
  return elements.find((element) => element.id === id);
}

function filterBorrowed(books, status) {
  return books.filter(({ borrows }) => status === borrows[0].returned);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
