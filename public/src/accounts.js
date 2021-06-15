function findAccountById(accounts, id) {
  //Find the first account in accounts who's id matches the provided id
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //sort is destructive, so I'll make a new _accounts array that is just a copy of it before sorting
  const _accounts = [...accounts];
  //Using the ternary operater in the callback function, this sorts the _accounts array by last name in alphabetical order
  return _accounts.sort((acnt1, acnt2) =>
    acnt1.name.last > acnt2.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  //use reduce to iterate through each book item in books, then reduce again to iterate through each record in that book's borrows to add up all the id matches
  return books.reduce((totalBorrows, { borrows }) => {
    totalBorrows += borrows.reduce((matches, record) => {
      if (account.id === record.id) matches++;
      return matches;
    }, 0);
    return totalBorrows;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  //use reduce to go through every book, push the whole book in to a new array, and use authors.find to alter the "author" key of the new array to contain the corresponding full author object
  return (
    books
      .reduce((authorBooks, book) => {
        authorBooks.push(book);
        book.author = authors.find((author) => author.id === book.authorId);
        return authorBooks;
      }, [])
      //After creating a new array with the proper obj formatting, now we filter out all the ones that don't match the account id and filter out the books that have been returned
      .filter(({ borrows }) =>
        borrows.find((record) => record.id === account.id && !record.returned)
      )
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
