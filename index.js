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

Book.prototype.AddReadStatusBtn = function (read) {
  const readButton = document.createElement("button");
  readButton.classList.add("book-read-btn");
  readButton.textContent = this.read ? "Mark as unread" : "Mark as read";

  readButton.addEventListener("click", () => {
    this.toggleReadStatus();
    readButton.textContent = this.read ? "Mark as unread" : "Mark as read";
    read.textContent = this.read ? "Read" : "Unread";
    updateCounters();
  });

  return readButton;
};

Book.prototype.toggleRemove = function (bookCard) {
  const removeButton = document.createElement("button");
  removeButton.classList.add("book-remove-btn");
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", () => {
    // Remove the book at the specified card index from the myLibrary array
    myLibrary.splice(bookCard.getAttribute("key"), 1);

    // Re-render the book cards in the library section
    displayBooks();

    // Update the counts in the counters section
    updateCounters();
  });
  return removeButton;
};

//Get the form input data to the library array
function addBookToLibrary() {
  // Get user input from the form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const language = document.getElementById("language").value;
  const read = document.getElementById("read").checked;

  //validate data from form
  if (
    title.trim() === '' ||
    author.trim() === '' ||
    pages === '' ||
    language === '') {
    alert('All fields are mandatory');
    return;
  }

  // Create a new Book object with the user input
  const newBook = new Book(title, author, pages, language, read);

  // Add the new Book object to the myLibrary array
  myLibrary.push(newBook);
}

//Render the book cards on the Library
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

//filter search func
function filterSearch(event) {
  event.preventDefault();
  const title = document.getElementById("search").value.trim();

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

function regenerateUPdateValue(books) {
  const libraryContainer = document.getElementById("book-cards");

  libraryContainer.innerHTML = "";

  books.forEach((book, index) => {
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

    //Readstatus button card
    const readButton = book.AddReadStatusBtn(read);
    bookCard.appendChild(readButton);

    //set index to card
    bookCard.setAttribute("key", index);

    //remove button card
    const removeButton = book.toggleRemove(bookCard);
    bookCard.appendChild(removeButton);

    //append everythig to libraryContainer
    libraryContainer.appendChild(bookCard);
    console.log(libraryContainer);
  });
}

// Call the displayBooks function initially to display the book cards on the page
displayBooks();

//manage the counters for total books, read and unread books
function updateCounters() {
  const totalBooks = myLibrary.length;
  const totalReadBooks = myLibrary.filter((book) => book.read).length;
  const totalUnreadBooks = myLibrary.filter((book) => !book.read).length;

  const totalBooksCounter = document.querySelector("#total-books");
  totalBooksCounter.textContent = totalBooks;

  const totalReadBooksCounter = document.querySelector("#total-read-books");
  totalReadBooksCounter.textContent = totalReadBooks;

  const totalUnreadBooksCounter = document.querySelector("#total-unread-books");
  totalUnreadBooksCounter.textContent = totalUnreadBooks;
}

updateCounters();

function handleFormSubmit(event) {
  event.preventDefault();

  addBookToLibrary();
  displayBooks();
  updateCounters();

   // Clear the form inputs
  event.target.reset();
}

// Add an event listener to the "ADD NEW BOOK" form to handle form submit
const addNewBook = document.getElementById("submit-book-form");
addNewBook.addEventListener("submit", handleFormSubmit);
