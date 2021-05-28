const { getBooksBorrowedCount } = require("./home");

function findAuthorById(authors, id) {
  //use the findElementById helper function I wrote
  return findElementById(authors, id);
}

function findBookById(books, id) {
  //use the findElementById helper function I wrote
  return findElementById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  //const values to help make the program more readible and easily modifiable
  const returned = true;
  const loaned = !returned;
  //creating easy to understand arrays with my helper function
  const returnedBooks = filterBorrowed(books, returned);
  const loanedBooks = filterBorrowed(books, loaned);
  //using the spread operator with the two arrays crteated above.
  return [[...loanedBooks], [...returnedBooks]];
}

function getBorrowersForBook(book, accounts) {
  //This one was a headache, I won't lie. pseudo code posted at the bottom
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
