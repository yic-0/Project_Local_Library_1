function getTotalBooksCount(books) {
  //use helperfunction to easily count books
  return arrayItemCount(books);
}

function getTotalAccountsCount(accounts) {
  //use helperfunction to easily count accounts
  return arrayItemCount(accounts);
}

function getBooksBorrowedCount(books) {
  //use reduce to iterate through each book in books, and if the first item in the borrows array of that book was not returned, then increase the total borrow counter, and return the full accumulation.
  return books.reduce((borrowCount, { borrows }) => {
    //const variable to make the code more readable
    const lastBorrowed = borrows[0];
    if (!lastBorrowed.returned) borrowCount++;
    return borrowCount;
  }, 0);
}

function getMostCommonGenres(books) {
  //reduce methodology
  return (
    books
      //iterate through each book in books
      .reduce((genres, book) => {
        const genre = genres.find((genre) => genre.name === book.genre);
        !genre ? genres.push({ name: book.genre, count: 1 }) : genre.count++;
        return genres;
      }, [])
      .sort((gen1, gen2) => gen2.count - gen1.count)
      .slice(0, 5)
  );

  //populate an array with objs
  //obj = {name: "MyGenre",  count: x}
  //if obj[name] already exists, count++
  //otherwise push the obj into our new array with count 1
  //truncate the new array into just the 5 highest counts
  //return the new array
}

function getMostPopularBooks(books) {
  return books
    .map(({ title, borrows }) => ({
      name: title,
      count: arrayItemCount(borrows),
    }))
    .sort(({ count: count1 }, { count: count2 }) => count2 - count1)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  //also identical we can use helper function
  //this time we still iterate through books
  //but we need information from authors based on corresponding authotId
}

//helper function to more cleanly determine each author's total number of borrows across all books
function authorBorrows(books, id) {}

//helper function to easily count up any type of item array based on the length of said array
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
