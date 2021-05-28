function getTotalBooksCount(books) {
  //use helperfunction to easily count books
  return arrayItemCount(books);
}

function getTotalAccountsCount(accounts) {
  //use helperfunction to easily count accounts
  return arrayItemCount(accounts);
}

function getBooksBorrowedCount(books) {
  //use reduce to iterate through each book in books, and if the most first item in the borrows array of that book was not returned, then increase the total borrow counter, and return the full accumulation.
  return books.reduce((borrowCount, { borrows }) => {
    //const variable to make the code more readable
    const lastBorrowed = borrows[0];
    if (!lastBorrowed.returned) borrowCount++;
    return borrowCount;
  }, 0);
}

function getMostCommonGenres(books) {
  //This one was also really tough for me.
  return (
    books
      .reduce((genres, book) => {
        //genre = first object in genres who's name matches the genre of the current book
        const genre = genres.find((genre) => genre.name === book.genre);
        //If there is no genre with that name, then we create one with count 1, otherwise we increase that genre's count by one (used ternary operator)
        !genre ? genres.push({ name: book.genre, count: 1 }) : genre.count++;
        return genres;
      }, [])
      //then we sort this new array with by having the genres with the highest counts come first
      .sort((genre1, genre2) => genre2.count - genre1.count)
      //Then we truncate the array so that we are only left with the top 5
      .slice(0, 5)
  );
}

function getMostPopularBooks(books) {
  //This one wasn't so hard after I had finished getMostCommonGenres(), as it's very similar
  return (
    books
      //map through each book to create a new array of objects containing the title as the name and the length of the borrows array as its popularity indicator
      .map(({ title, borrows }) => ({
        name: title,
        count: borrows.length,
      }))
      //sort by highest first
      .sort((book1, book2) => book2.count - book1.count)
      //Truncate so we only have top 5
      .slice(0, 5)
  );
}

function getMostPopularAuthors(books, authors) {
  //Very similar to getMostPopularBooks(). In fact, it's so similar, I'm sure I could have even made another helper function, but I've spent more than enough time on this for one night, and the implementation requires a little nuance.
  return (
    authors
      .map(({ name: { first, last }, id }) => ({
        name: `${first} ${last}`,
        count: authorBorrows(books, id),
      }))
      //sort by highest first
      .sort((auth1, auth2) => auth2.count - auth1.count)
      //Truncate so we only have top 5
      .slice(0, 5)
  );
}

//helper function to more cleanly determine each author's total number of borrows across all books
function authorBorrows(books, id) {
  //use reduce to iterate through each book, adding up the llength of the borrows arrays that match the corresponding author id
  return books.reduce((totalBorrows, { authorId, borrows }) => {
    if (authorId === id) totalBorrows += borrows.length;
    return totalBorrows;
  }, 0);
}

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
