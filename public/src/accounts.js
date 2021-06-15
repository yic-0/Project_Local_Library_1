function findAccountById(accounts, id) {
  //return the account object with the matching ID
}

function sortAccountsByLastName(acounts) {
  //sort the objects alphabetically by last name key
  //return the sorted array
}

function getTotalNumberOfBorrows(account, books) {
  //returns a NUMBER that is a total count of all the times the provided account ID appreas in any books of the borrowed array
  //Reduce methodology
  //iterate through every book in books and acc will be total matches of account.id
}

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
  console.log(bookAuthors);
  return bookAuthors;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
