function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  const _accounts = accounts.concat();
  return _accounts.sort((acnt1, acnt2) => {
    return acnt1.name.last === acnt2.name.last
      ? 0
      : acnt1.name.last < acnt2.name.last
      ? -1
      : 1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((totalBorrows, book) => {
    totalBorrows += book.borrows.reduce((matches, record) => {
      if (account.id === record.id) matches++;
      return matches;
    }, 0);
    return totalBorrows;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const authorBooks = books.map((book) => {
    book.author = authors.find((author) => author.id === book.author.id);
  });
  return authorBooks.filter((book) =>
    book.borrows.find((record) => record.id === account.id && !record.returned)
  );
}
/*
function getElementInObject(element, obj)
{

}*/

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
