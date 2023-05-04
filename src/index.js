import { Book } from "./book.js";
import { Card } from "./card.js";
import { display,updateCounters } from "./displayBooks.js";
import "./styles.css"

let bookCards = [];

function handleFormSubmit(event) {
 
  addBookToLibrary(event)

  // Call the displayBooks function initially to display the book cards on the page
 display()
  

  //manage the counters for total books, read and unread books
  updateCounters();
  // Clear the form inputs
  event.target.reset();
}


function addBookToLibrary(event){
  event.preventDefault();
  // Get user input from the form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const language = document.getElementById("language").value;
  const read = document.getElementById("read").checked;

  //validate data from form
  if (
    title.trim() === "" ||
    author.trim() === "" ||
    pages === "" ||
    language === ""
  ) {
    alert("All fields are mandatory");
    return;
  }

  // Create a new Book object with the user input
 
  
  const newCard  = new Card(title, author, pages, language, read, bookCards.length)
  
  bookCards.push(newCard)



}

// Add an event listener to the "ADD NEW BOOK" form to handle form submit
const addNewBook = document.getElementById("submit-book-form");
addNewBook.addEventListener("submit", handleFormSubmit);

export { bookCards };
