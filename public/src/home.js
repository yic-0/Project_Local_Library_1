function getTotalBooksCount(books) {
  return arrayItemCount(books);
}

function getTotalAccountsCount(accounts) {
  return arrayItemCount(accounts);
}

function getBooksBorrowedCount(books) {
  return books.reduce((borrowCount, { borrows }) => {
    const lastBorrowed = borrows[0];
    if (!lastBorrowed.returned) borrowCount++;
    return borrowCount;
  }, 0);
}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

function arrayItemCount(item) {
  return item.length;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
