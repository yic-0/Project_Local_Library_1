# Project_Pomodoro_Timer
 An app that displays and analyzes data relevant to a library, such as users, books, authors, and a check-out log. My contribution to this project includes all of the actual functionality described below.
 
## Links
- [Live Demo](https://project-local-library-1-six.vercel.app/)

# Screenshots
## **Homepage / Overall Stats** 
[*(./public/src/home.js)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/home.js)

Displays 4 different stat cards:

![Homepage / Overall Stats](https://raw.githubusercontent.com/TrevorGlascock/Project_Local_Library_1/main/Screenshots/Overall-Stats.png)
- **General Stats** -- Displays 3 different general stats:
  - Total number of books in the library
    - [*getTotalBooksCount(arrayOfBooks)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/home.js#L1)
  - Total number of books currently being borrowed
    - [*getBooksBorrowedCount(arrayOfBooks)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/home.js#L11)
  - Total number of accounts/users
    - [*getTotalAccountsCount(arrayOfAccounts)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/home.js#L6)
- **Most Common Genres** -- Displays the top 5 most commonly occuring genres found amongst all the books
  - [*getMostCommonGenres(arrayOfBooks)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/home.js#L21)
- **Most Popular Books** -- Displays the top 5 books with the most amount of total borrows
  - [*getMostPopularBooks(arrayOfBooks)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/home.js#L38)
- **Most Popular Authors** --Displays the top 5 authors with the most amount of total borrows
  - [*getMostPopularAuthors(arrayOfBooks, arrayOfAuthors)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/home.js#L49)

## **Stats By Book** 
[*(./public/src/books.js)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/books.js)

Displays 3 different sections of data:

![Stats By Books](https://raw.githubusercontent.com/TrevorGlascock/Project_Local_Library_1/main/Screenshots/Stats-By-Books.png)
- **Book List (left side element)** -- Displays a list of all books, as well as a label indicating whether or not it is currently loaned out, and is partitioned by said label so that all returned books are seen first
  - [*partitionBooksByBorrowedStatus(arrayOfBooks)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/books.js#L13)
- **Book Detail (top right element)** -- Only displays after a user has selected a book:
  - Finds the book based on the book's id
    - [*findBookById(arrayOfBooks, bookIdNumber)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/books.js#L8)
  - Finds the author of that book based on the authorId found in the book
    - [*findAuthorById(arrayOfAuthors, authorIdNumber)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/books.js#L3)
- **Borrowed List (bottom right element)** -- Only displays after a user has selected a book:
  - Finds the list of users who have ever borrowed this book
    - [*getBorrowersForBook(arrayOfBooks, arrayOfAccounts)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/books.js#L26)

## **Stats By Account** 
[*(./public/src/accounts.js)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/accounts.js)

Displays 3 different sections of data:

![Stats By Accounts](https://raw.githubusercontent.com/TrevorGlascock/Project_Local_Library_1/main/Screenshots/Stats-By-Accounts.png)
- **Account List (left side element)** -- Displays a list of all accounts, sorted by last name in alphabetical order
  - [*sortAccountsByLastName(arrayOfAccounts)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/accounts.js#L6)
- **Account Detail (top right element)** -- Only displays after a user has selected an account:
  - Finds the account based on the account's id and displays their age, company, email, and the date they joined
    - [*findAccountById(arrayOfAccounts, accountIdNumber)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/accounts.js#L1)
  - Finds the total number of times this account has checked-out a book 
    - [*getTotalNumberOfBorrows(accountObject, arrayOfBooks)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/accounts.js#L23)
  - **Books In Possession (bottom right element)** -- Displays a list of all the books this account currently has checked-out
    - [*getBooksPossessedByAccount(accountObject, arrayOfBooks, arrayOfAuthors)*](https://github.com/TrevorGlascock/Project_Local_Library_1/blob/main/public/src/accounts.js#L33)

## Technology
- Built with Node
- Written with Functional Programming Best Practices in mind
- Tested with Mocha & Chai 

## Deployment
- Front-End Deployed with Vercel.


### TODO:
- Restyle to match brand colors
- Create an API to integrate with the app instead of using the local "data" folder placeholder
- Additional features TBD
