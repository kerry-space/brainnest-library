
import { bookCards } from "./index.js";

function display() {
  
  const librarySection = document.querySelector("library-section");

  bookCards.forEach((bookCard) => {
      
    if(librarySection){
       librarySection.appendChild(bookCard)
    }
         
     })
        //counter and search eventListener
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


       //filter search func
  function filterSearch(event) {
    event.preventDefault();
    const title = document.getElementById("search").value.trim();

    if (title.trim() === "") {
      return;
    }
  }

  //show-read-btn func
  function showReadBtn() {
    regenerateUPdateValue(bookCards.filter((book) => book.read));
  }

  //show-unread-btn func
  function showUnreadBtn() {
    regenerateUPdateValue(bookCards.filter((book) => !book.read));
  }

  //show-all-btn func
  function showAllBtn() {
    regenerateUPdateValue(bookCards);
  }


export {display, updateCounters};
