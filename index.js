"use strict";

let myLibrary = [];

function Book(title, author, pages, language, read) {
  this.title = title.toUpperCase().trim();
  this.author = author.trim();
  this.pages = pages;
  this.language = language;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

//Get the form input data to the library array
function addBookToLibrary() {
  // Get user input from the form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const language = document.getElementById("language").value;
  const read = document.getElementById("read").checked;

  //validate data from
<<<<<<< HEAD
  if (title.trim() === "" || author.trim() === "") {
=======
  if (title.trim() === '' || author.trim() === '') {
>>>>>>> c1bee6f5250f107dc0f57c4580fa8651665cd1a8
    return;
  }

  // Create a new Book object with the user input
  const newBook = new Book(title, author, pages, language, read);

  console.log(newBook);
  // Add the new Book object to the myLibrary array
  myLibrary.push(newBook);
}

//Render the book cards on the Library
<<<<<<< HEAD
function displayBooks() {
  regenerateUPdateValue(myLibrary);
  updateCounters();

  //filter search
  const searchBtn = document.querySelector(".search-book-btn");
  searchBtn.addEventListener("click", filterSearch);

  //show-read-btn
  const selectShowReadBooks = document.querySelector(".show-read-btn");
  selectShowReadBooks.addEventListener("click", showReadBtn);

  //show-unread-btn
  const showUnreadBooks = document.querySelector(".show-unread-btn");
  showUnreadBooks.addEventListener("click", showUnreadBtn);

  //show-all-btn
  const showAllBooks = document.querySelector(".show-all-btn");
  showAllBooks.addEventListener("click", showAllBtn);
}

function bt() {}

//filter search func
function filterSearch(event) {
  event.preventDefault();
  const title = document.getElementById("search").value;

  if (title.trim() === "") {
    return;
  }

  const filteredByTitle = myLibrary.filter(
    (book) => book.title.toUpperCase() === title.toUpperCase()
  );
  console.log(filteredByTitle);

  regenerateUPdateValue(filteredByTitle);
  document.getElementById("search").value = "";
}

//show-read-btn
function showReadBtn() {
  regenerateUPdateValue(myLibrary.filter((book) => book.read));
}

//show-unread-btn
function showUnreadBtn() {
  regenerateUPdateValue(myLibrary.filter((book) => !book.read));
}

//show-all-btn
function showAllBtn() {
  regenerateUPdateValue(myLibrary);
}

function regenerateUPdateValue(myLibrary) {
  const libraryContainer = document.getElementById("book-cards");

  libraryContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const title = document.createElement("h2");
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement("h3");
    author.textContent = `By: ${book.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `${book.pages} pages`;
    bookCard.appendChild(pages);

    const language = document.createElement("p");
    language.textContent = `Language: ${book.language}`;
    bookCard.appendChild(language);

    const read = document.createElement("p");
    read.textContent = book.read ? "Read" : "Unread";
    bookCard.appendChild(read);

    const readButton = document.createElement("button");
    readButton.classList.add("book-read-btn");
    readButton.textContent = book.read ? "Mark as unread" : "Mark as read";
    readButton.addEventListener("click", () => {
      book.toggleReadStatus();
      read.textContent = book.read ? "Read" : "Unread";
      readButton.textContent = book.read ? "Mark as unread" : "Mark as read";
=======
function displayBooks(searchInput = '') {
  const libraryContainer = document.getElementById('book-cards');

  if (myLibrary.length === 0) {
    // there are no books
    libraryContainer.classList.remove('visible');
    return;
  } else {
    libraryContainer.classList.add('visible');
  }

  libraryContainer.innerHTML = '';

  // let searchBooks = searchInput 
  //     ? myLibrary.filter((book) => book.title.includes(searchInput)) 
  //     : myLibrary;

  let searchBooks;

  if(!searchInput){ //<-----------------working
    searchBooks = myLibrary;
  } else if(searchInput){ //<-----------------working
    searchBooks = myLibrary.filter((book) => book.title.includes(searchInput));
  }else if(searchInput === true || false){  //<------------ not working
    searchBooks = myLibrary.filter((book) => (book.read === searchInput));
  }

  //output the books
  searchBooks.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement('h2');
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement('h3');
    author.textContent = `By: ${book.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    bookCard.appendChild(pages);

    const language = document.createElement('p');
    language.textContent = `Language: ${book.language}`;
    bookCard.appendChild(language);

    const read = document.createElement('p');
    read.textContent = book.read ? 'Read' : 'Unread';
    bookCard.appendChild(read);

    const readButton = document.createElement('button');
    readButton.classList.add('book-read-btn');
    readButton.textContent = book.read ? 'Mark as unread' : 'Mark as read';
    readButton.addEventListener('click', () => {
      book.toggleReadStatus();
      read.textContent = book.read ? 'Read' : 'Unread';
      readButton.textContent = book.read ? 'Mark as unread' : 'Mark as read';
>>>>>>> c1bee6f5250f107dc0f57c4580fa8651665cd1a8

      updateCounters();
    });
    bookCard.appendChild(readButton);

<<<<<<< HEAD
    const removeButton = document.createElement("button");
    removeButton.classList.add("book-remove-btn");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("data-index", index);
    removeButton.addEventListener("click", removeBookFromLibrary);
=======
    const removeButton = document.createElement('button');
    removeButton.classList.add('book-remove-btn');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('data-index', index);
    removeButton.addEventListener('click', removeBookFromLibrary);
>>>>>>> c1bee6f5250f107dc0f57c4580fa8651665cd1a8
    bookCard.appendChild(removeButton);

    libraryContainer.appendChild(bookCard);
  });
<<<<<<< HEAD
}

// Call the displayBooks function initially to display the book cards on the page
=======

  updateCounters();
}

// // Call the displayBooks function initially to display the book cards on the page
>>>>>>> c1bee6f5250f107dc0f57c4580fa8651665cd1a8
displayBooks();

function removeBookFromLibrary(index) {
  // Remove the book at the specified index from the myLibrary array
  myLibrary.splice(index, 1);

  // Re-render the book cards in the library section
  displayBooks();

  // Update the counts in the counters section
  updateCounters();
}

//manage the counters for total books, read and unread books
function updateCounters() {
  const totalBooks = myLibrary.length;
  const totalReadBooks = myLibrary.filter((book) => book.read).length;
  const totalUnreadBooks = myLibrary.filter((book) => !book.read).length;

<<<<<<< HEAD
  const totalBooksCounter = document.querySelector("#total-books");
  totalBooksCounter.textContent = totalBooks;

  const totalReadBooksCounter = document.querySelector("#total-read-books");
  totalReadBooksCounter.textContent = totalReadBooks;

  const totalUnreadBooksCounter = document.querySelector("#total-unread-books");
=======
  const totalBooksCounter = document.querySelector('#total-books');
  totalBooksCounter.textContent = totalBooks;

  const totalReadBooksCounter = document.querySelector('#total-read-books');
  totalReadBooksCounter.textContent = totalReadBooks;

  const totalUnreadBooksCounter = document.querySelector('#total-unread-books');
>>>>>>> c1bee6f5250f107dc0f57c4580fa8651665cd1a8
  totalUnreadBooksCounter.textContent = totalUnreadBooks;
}

updateCounters();

<<<<<<< HEAD
function handleFormSubmit(event) {
=======
function formSubmitHandler(event) {
>>>>>>> c1bee6f5250f107dc0f57c4580fa8651665cd1a8
  event.preventDefault();

  addBookToLibrary();
  displayBooks();

  // Clear the form inputs
<<<<<<< HEAD
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("language").selectedIndex = 0;
  document.getElementById("read").checked = false;
=======
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('language').selectedIndex = 0;
  document.getElementById('read').checked = false;
>>>>>>> c1bee6f5250f107dc0f57c4580fa8651665cd1a8

  updateCounters();
}

// Add an event listener to the "ADD NEW BOOK" button to handle form submit
<<<<<<< HEAD
const addButtonElement = document.querySelector(".add-book-btn");
addButtonElement.addEventListener("click", handleFormSubmit);
=======
const addButtonElement = document.querySelector('.add-book-btn');
addButtonElement.addEventListener('click', formSubmitHandler);


function searchBooksHandler(event) {
  event.preventDefault();

  const searchInput = document
    .getElementById('search')
    .value.trim()
    .toUpperCase();

  displayBooks(searchInput);

  //Clear the form input
  document.getElementById('search').value = '';
}

// Add an event listener to the "Search" button to handle the search by name 
const searchBtn = document.querySelector('.search-book-btn');
searchBtn.addEventListener('click', searchBooksHandler);


function showBooksHandler(status) {
  displayBooks(status);
}

// Add an event listener to the "SHOW" buttons to handle to show all books or read or unread books
const showAllBtn = document.querySelector('.show-all-btn');
const showReadBtn = document.querySelector('.show-read-btn');
const showUnreadBtn = document.querySelector('.show-unread-btn');

showAllBtn.addEventListener('click', () => showBooksHandler(''));
showReadBtn.addEventListener('click', () => showBooksHandler(true));
showUnreadBtn.addEventListener('click', () => showBooksHandler(false));
>>>>>>> c1bee6f5250f107dc0f57c4580fa8651665cd1a8
