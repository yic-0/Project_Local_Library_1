function findAccountById(accounts, id) {
  //return the account object with the matching ID
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //sort the objects alphabetically by last name key
  //return the sorted array
  const sorted = [...accounts];
  sorted.sort((acnt1, acnt2) =>
    acnt1.name.last.toLowerCase() > acnt2.name.last.toLowerCase() ? 1 : -1
  );
  /* //If we wish to destructure
  sorted.sort(({ name: { last: name1 } }, { name: { last: name2 } }) =>
    name1.toLowerCase() > name2.toLowerCase() ? 1 : -1
  );
  /**/
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  //returns a NUMBER that is a total count
  //count is all times provided account ID appears in any books of the borrowed array
  //Reduce methodology
  //iterate through every book in books and acc will be total matches of account.id
  //  /* Reduce methodology
  const accountId = account.id;
  return books.reduce((totalBorrowed, book) => {
    const borrowed = book.borrows;
    if (borrowed.some((item) => item.id === accountId)) totalBorrowed++;
    return totalBorrowed;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  //filter through each book in books
  return (
    books
      //checking to see if the most recent transaction
      .filter(
        (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
      )
      .map((book) => {
        book["author"] = authors.find((author) => author.id === book.authorId);
        return book;
      })
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
