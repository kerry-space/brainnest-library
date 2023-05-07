
import { expect } from 'chai';
import * as TextEncoding from 'text-encoding';
import { JSDOM } from 'jsdom';
import { getUserInput } from '../src/index.js';

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;



describe('getUserInput', () => {
  test('returns user input from form', () => {
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <form>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" value="The empty">
            
            <label for="author">Author:</label>
            <input type="text" id="author" name="author" value="kerry one">
            
            <label for="pages">Pages:</label>
            <input type="number" id="pages" name="pages" value="310">
            
            <label for="language">Language:</label>
            <input type="text" id="language" name="language" value="English">
            
            <label for="read">Read:</label>
            <input type="checkbox" id="read" name="read" checked>
            
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);

    //assigns dom.window.document from jsdom to global 
    global.document = dom.window.document;
     
    const userInput = getUserInput();

    expect(userInput.title).toBe('The empty');
    expect(userInput.author).toBe('kerry one');
    expect(userInput.pages).toBe('310');
    expect(userInput.language).toBe('English');
    expect(userInput.read).toBe(true);
  });
});




describe('addBookToLibrary', () => {
  test('adds a new card to the library', () => {
    //mocked the getUserInput  return fixed set of values
    const getUserInput = jest.fn(() => ({
      title: 'The empty',
      author: 'kerry one',
      pages: 300,
      language: 'English',
      read: false,
    }));

    //set to a Jest mock function using fn()
    const event = {
      preventDefault: jest.fn(),
    };

    const bookCards = [];
    const Card = jest.fn();
    const newCard = {};

    //set up a mock implementation card funciton isung jest
    //extracts the relevant properties from them, and assigns them to the newCard object.
    Card.mockImplementationOnce((title, author, pages, language, read, id) => {
      newCard.title = title;
      newCard.author = author;
      newCard.pages = pages;
      newCard.language = language;
      newCard.read = read;
      newCard.id = id;
    });

    // This function will call the getUserInput get which we expect been called 
    addBookToLibrary(event);

    //checks that Card was called with the expected arguments,hardcoded
    //bookCards array contains the newCard object that was created in the mock implementation
    expect(getUserInput).toHaveBeenCalled();
    expect(Card).toHaveBeenCalledWith('The empty', 'kerry one', 300, 'English', false, 0);
    expect(bookCards).toContainEqual(newCard);
  });
});