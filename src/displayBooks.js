import {myLibrary} from "./index.js"

//Render the book cards on the Library
function displayBooks() {
    regenerateUPdateValue(myLibrary);
    updateCounters();
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
  
  //show-read-btn func
  function showReadBtn() {
    regenerateUPdateValue(myLibrary.filter((book) => book.read));
  }
  
  //show-unread-btn func
  function showUnreadBtn() {
    regenerateUPdateValue(myLibrary.filter((book) => !book.read));
  }
  
  //show-all-btn func
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
  

  export{displayBooks, updateCounters}