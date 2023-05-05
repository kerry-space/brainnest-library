// Import the getUserInput function
import { getUserInput, updateCounters } from "../src/index.js";


//This test is checking the behavior of the getUserInput() function when it is called with a mock form.
describe("getUserInput", () => {
  test("returns an object with user input values", () => {
    // Create a mock form object
    document.body.innerHTML = `
      <form>
        <input type="text" id="title" value="The Great Gatsby">
        <input type="text" id="author" value="F. Scott Fitzgerald">
        <input type="number" id="pages" value="218">
        <input type="text" id="language" value="English">
        <input type="checkbox" id="read" checked>
      </form>
    `;
    // function reads the values of the input fields and returns them as an object with properties
    const userInput = getUserInput();

    //exptect output we should recive from mock 
    const expectedOutput = {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      pages: "218",
      language: "English",
      read: true,
    }

    // Assert that the function returns the expected values
    expect(userInput).toEqual(expectedOutput);
  });
});





describe("updates the book counters section on the page", () => {
  beforeEach(() => {
    // Create a mock HTML structure
    document.body.innerHTML = `
      <div>
        <span id="total-books"></span>
        <span id="total-read-books"></span>
        <span id="total-unread-books"></span>
      </div>
    `;
  });

  test("updates the book counters correctly", () => {
    const bookCards = [
      {read: true},
      {read: false},
      {read: true},
      {read: false},
      {read: false}
    ];

    // Call the updateCounters function
    updateCounters(bookCards);

    // Assert that the counters have been updated correctly
    expect(document.querySelector("#total-books").textContent).toBe("5");
    expect(document.querySelector("#total-read-books").textContent).toBe("2");
    expect(document.querySelector("#total-unread-books").textContent).toBe("3");
  });
});