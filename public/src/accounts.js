function findAccountById(accounts, id) {
  return accounts.filter((account) => account.id === id)[0];
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

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
