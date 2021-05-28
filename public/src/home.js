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

function getMostCommonGenres(books) {
  return books
    .reduce((genres, book) => {
      //genre = first object in genres who's name matches the genre of the current book
      const genre = genres.find((genre) => genre.name === book.genre);
      //If there is no genre with that name, then we create one with count 1, otherwise we increase that genre's count by one
      !genre ? genres.push({ name: book.genre, count: 1 }) : genre.count++;
      return genres;
    }, [])
    .sort((genre1, genre2) => genre2.count - genre1.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
    .map(({ title, borrows }) => ({
      name: title,
      count: borrows.length,
    }))
    .sort((book1, book2) => book2.count - book1.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  return authors
    .map(({ name: { first, last }, id }) => ({
      name: `${first} ${last}`,
      count: authorBorrows(books, id),
    }))
    .sort((auth1, auth2) => auth2.count - auth1.count)
    .slice(0, 5);
}

function authorBorrows(books, id) {
  return books.reduce((totalBorrows, book) => {
    if (book.authorId === id) totalBorrows += book.borrows.length;
    return totalBorrows;
  }, 0);
}

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
