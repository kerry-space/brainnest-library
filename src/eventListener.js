
import { bookCards } from "./index.js";

function eventListener() {

      // event listener handling search form submit 
       const searchForm = document.getElementById("submit-search");
       searchForm.addEventListener("submit", filterSearch);

       //show-read-btna
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
    
    //when submit the form it prevent reload the page.
    event.preventDefault();

    const title = document.getElementById("search").value;

    if (title.trim() === "") {
      return;
    }

    const filteredByTitle = bookCards.filter(
      (book) => book.title.toUpperCase() === title.toUpperCase()
    );

   
    //render instance of the Card based on filterByTitle instance
    renderCard(filteredByTitle)

    //set to empty the input search field
    document.getElementById("search").value = ""
  }




  //show-read-btn func
  function showReadBtn() {
    const filterByReadBook = bookCards.filter((book) => book.read)
    renderCard(filterByReadBook)
  }

  //show-unread-btn func
  function showUnreadBtn() {
    const filterByUnReadBook = bookCards.filter((book) => !book.read)
    renderCard(filterByUnReadBook)
    
  }

  //show-all-btn func
  function showAllBtn() {
    //show all instance of the Card
    renderCard(bookCards)
  }

  function renderCard(cards){
     //target book-card and set to empty  card div
     const libraryContainer = document.getElementById("book-cards")
     libraryContainer.innerHTML = "";

    cards.forEach((bookcard) => {
      bookcard.createCard();
    })
  }

export {eventListener};
