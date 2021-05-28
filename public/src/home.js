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
  return mostCommonItem(books, "genre");
}

function getMostPopularBooks(books) {
  return mostCommonItem(books, "borrows");
}

function getMostPopularAuthors(books, authors) {}

function arrayItemCount(item) {
  return item.length;
}

//helper function to find most common items, keep track of their counts, sort them at the end, and only return the top 5
function mostCommonItem(books, itemName) {
  const items = books.reduce((items, book) => {
    //item = first object in items who's name matches the item of the current book
    const item = items.find((item) => item.name === book[itemName]);
    //If there is no item with that name, then we create one with count 1, otherwise we increase that item's count by one
    !item || item === undefined
      ? items.push({ name: book[itemName], count: 1 })
      : item.count++;
    return items;
  }, []);
  //sort the item objects by their count, highest counts first
  items.sort((item1, item2) => item2.count - item1.count);
  //return an array with just the first 5 elements of the sorted items.
  return items.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
