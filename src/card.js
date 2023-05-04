import { Book } from "./book";
import {updateCounters,display} from "./displayBooks"
import {bookCards} from "./index"

class Card extends Book {
    constructor(title, author, pages, language, read, index){
     super( title, author, pages, language, read)
           //Render the book cards on the Library
           this.index = index; ;
        this.createCard()
        
        
  
    }






 createCard() {
  const libraryContainer = document.getElementById("book-cards");

  

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const title = document.createElement("h2");
    title.textContent = this.title;
    bookCard.appendChild(title);

    const author = document.createElement("h3");
    author.textContent = `By: ${this.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `${this.pages} pages`;
    bookCard.appendChild(pages);

    const language = document.createElement("p");
    language.textContent = `Language: ${this.language}`;
    bookCard.appendChild(language);

    const read = document.createElement("p");
    read.textContent = this.read ? "Read" : "Unread";
    bookCard.appendChild(read);

    //Readstatus button card
    const readButton = this.AddReadStatusBtn(read);
    bookCard.appendChild(readButton);

    //set index to card
    bookCard.setAttribute("data-index", this.index);
 

    //remove button card
    const removeButton = this.toggleRemove(bookCard);
    bookCard.appendChild(removeButton);

      // Re-render the book cards in the library section
      display();

      // Update the counts in the counters section
      updateCounters();
    //append everythig to libraryContainer
    libraryContainer.appendChild(bookCard);
   
 
    }

   
  


    toggleReadStatus() {
        this.read = !this.read;
    }

    AddReadStatusBtn(read) {
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
    }

    toggleRemove(bookCard) {
       
        const removeButton = document.createElement("button");
        removeButton.classList.add("book-remove-btn");
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", () => {
            // Remove the book at the specified card index from the myLibrary array
  
            
        bookCards.splice(bookCard.getAttribute("data-index"),1);
           
          
        });
        return removeButton;
    }


}

export {Card}