import { Book } from "./book";
import {updateCounters,bookCards} from "./index"

class Card extends Book {
    
    constructor(title, author, pages, language, read, index){
     super( title, author, pages, language, read)
        
        this.index = index;
        //Render the book cards on the Library
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
             
             // Remove the book card from the DOM
            bookCard.remove();

            const cardIndex = parseInt(bookCard.getAttribute("data-index"));

            // Remove the book at the specified card index from the myLibrary array
            bookCards.splice(cardIndex,1);
     
            // Re-index the remaining book cards
            //finds all child elements of "book-cards" with the class "book-card" using querySelectorAll()
            const librarySection = document.querySelector("#book-cards");
            librarySection.querySelectorAll(".book-card").forEach((card, index) => {
                 //sets its "data-index" attribute to its new index in the bookCards array.
                 card.setAttribute("data-index", index);
            });
          
           // Update the counters
            updateCounters();
          
        });
        return removeButton;
    }


}

export {Card}