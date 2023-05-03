import {myLibrary} from "./index.js"
import {updateCounters ,displayBooks} from "./displayBooks.js"


class Book {
    constructor(title, author, pages, language, read) {
        this.title = title.toUpperCase().trim();
        this.author = author.trim();
        this.pages = pages;
        this.language = language;
        this.read = read;
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
            myLibrary.splice(bookCard.getAttribute("key"), 1);

            // Re-render the book cards in the library section
            displayBooks();

            // Update the counts in the counters section
            updateCounters();
        });
        return removeButton;
    }
    
    addBookToLibrary(newBook) {
        // Add the new Book object to the myLibrary array
        myLibrary.push(newBook);
    }
}






export {Book};