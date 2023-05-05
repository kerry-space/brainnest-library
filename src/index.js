import { Book } from "./book.js";
import { Card } from "./card.js";
import { eventListener} from "./eventListener.js";
import "./styles.css"

let bookCards = [];


function getUserInput(){
  // Get user input from the form
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = document.getElementById("pages").value.trim();
  const language = document.getElementById("language").value.trim();
  const read = document.getElementById("read").checked;
  return {title, author, pages, language, read}
}

function addBookToLibrary(event){
  event.preventDefault();
  const {title, author, pages, language, read} = getUserInput();

  // Create a new instance of card object with the user input
  const newCard  = new Card(title, author, pages, language, read, bookCards.length)

  bookCards.push(newCard)

}


function updateCounters(){
  const totalBooks = bookCards.length;
  const totalReadBooks = bookCards.filter((book) => book.read).length;
  const totalUnreadBooks = bookCards.filter((book) => !book.read).length;

  const totalBooksCounter = document.querySelector("#total-books");
  totalBooksCounter.textContent = totalBooks;

  const totalReadBooksCounter = document.querySelector("#total-read-books");
  totalReadBooksCounter.textContent = totalReadBooks;

  const totalUnreadBooksCounter = document.querySelector("#total-unread-books");
  totalUnreadBooksCounter.textContent = totalUnreadBooks;
}


function handleFormSubmit(event) {
 
  addBookToLibrary(event)
  // Call the displayBooks function initially to display the book cards on the page
  eventListener()
  
  //manage the counters for total books, read and unread books
  updateCounters();
  // Clear the form inputs
  event.target.reset();
}

// Add an event listener to the "ADD NEW BOOK" form to handle form submit
const addNewBook = document.getElementById("submit-book-form");
addNewBook.addEventListener("submit", handleFormSubmit);

export { bookCards,updateCounters };
