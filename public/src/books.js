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
  /*pseudo code
  final array = []
  for each record in book.borrows
  {
    obj_x={
      ...record,
      ...(account with same id as borrows[i].id)
    }
    finalArray.push(obj_x)
  }
  */
  let borrowers = [];
  for (let record in book.borrows) {
    const matchingAccount = accounts.find(
      (account) => account.id === record.id
    );
    const accountObj = { ...record, ...matchingAccount };
    if (borrows.length < 10) borrowers.push(accountObj);
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
