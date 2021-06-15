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
  const accountId = account.id;
  let totalBorrowed = 0;
  for (let book of books) {
    const borrowed = book.borrows;
    if (borrowed.some((item) => item.id === accountId)) totalBorrowed++;
  }
  return totalBorrowed;
}

//poo poo stinky

function getBooksPossessedByAccount(account, books, authors) {
  //iterate through each book in books
  //replace current book.author with the corresponding author obj in authors
  //return the new array of combined book obj w/ embedded author obj
  const bookAuthors = [...books];
  for (let book of bookAuthors) {
    const id = book.authorId;
    const author = authors[id];
    book["author"] = author;
  }
  //console.log(bookAuthors);
  return bookAuthors;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
