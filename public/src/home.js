function getTotalBooksCount(books) {
  //use helperfunction to easily count books
  return arrayItemCount(books);
}

function getTotalAccountsCount(accounts) {
  //use helperfunction to easily count accounts
  return arrayItemCount(accounts);
}

function getBooksBorrowedCount(books) {
  //iterate through book in books
  //check book.borrows[0] === false
  //if so, acc ++
  //Reduce methodology
}

function getMostCommonGenres(books) {
  //reduce methodology
  //iterate through each book in books
  //populate an array with objs
  //obj = {name: "MyGenre",  count: x}
  //if obj[name] already exists, count++
  //otherwise push the obj into our new array with count 1
  //truncate the new array into just the 5 highest counts
  //return the new array
}

function getMostPopularBooks(books) {
  //same exact thing as above -- Perhaps we can make a helper function for both
  //populate based on number of times this book has been checkedout
  //we can use book.borrowed.length to determine this
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
