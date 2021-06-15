const { getBooksBorrowedCount } = require("./home");

function findAuthorById(authors, id) {
  //return author with corresponding ID
  return findElementById(authors, id);
}

function findBookById(books, id) {
  //use the findElementById helper function I wrote
  return findElementById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  //return two arrays spread into one array
  //first array is all of the currently loaned books
  //second is all of the currently returned books
  //how do we find this out?
  const borrowed = []; //Has all books checkedout
  const returned = []; //Has all books !checkedout
  //iterate through each book in books
  for (let book of books) {
    //conditional to see if the book is loaned
    //then push it to the corresponding array
    if (book.borrows[0].returned) returned.push(book);
    else borrowed.push(book);
  }
  //return an array that spreads both of the arrays
  return [[...borrowed], [...returned]];
}

function getBorrowersForBook(book, accounts) {
  //return an array
  //declare a new array of objs that is a copy of accounts
  //iterate through each borrow in borrows
  //spread the corresponding account obj into the borrow obj
  const { borrows } = book;
  const borrowers = [];
  for (let record in borrows) {
    const matchingAccount = accounts.find(
      (account) => account.id === borrows[record].id
    );
    const accountObj = { ...borrows[record], ...matchingAccount };
    if (borrowers.length < 10) borrowers.push(accountObj);
  }
  return borrowers;
  /*OLD pseudo code
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
