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
  //This will be an array of genre objects
  const genres = books.reduce((genres, book) => {
    //genre = first object in genres who's name matches the genre of the current book
    const genre = genres.find((genre) => genre.name === book.genre);
    //If there is no genre with that name, then we create one with count 1, otherwise we increase that genre's count by one
    !genre || genre === undefined
      ? genres.push({ name: book.genre, count: 1 })
      : genre.count++;
    return genres;
  }, []);
  //sort the genre objects by their count, highest counts first
  genres.sort((genre1, genre2) => genre2.count - genre1.count);
  //return an array with just the first 5 elements of the sorted genres.
  return genres.slice(0, 5);
}

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
