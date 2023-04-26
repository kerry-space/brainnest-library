'use strict';

let myLibrary = [];

function Book(title, author, pages, language, read) {
  this.title = title.toUpperCase().trim();
  this.author = author.trim();
  this.pages = pages;
  this.language = language;
  this.read = read;
}



//Get the form input data to the library array
function addBookToLibrary() {
  // Get user input from the form
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const language = document.getElementById('language').value;
  const read = document.getElementById('read').checked;

  //validate data from 
  if (title.trim() === '' || author.trim() === '') {
    return;
  }

  // Create a new Book object with the user input
  const newBook = new Book(title, author, pages, language, read);

  // Add the new Book object to the myLibrary array
  myLibrary.push(newBook);
}