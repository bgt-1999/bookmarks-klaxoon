import React, { useEffect, useState } from 'react';

import Form from './components/form/Form';
import PreDisplay from './components/display/Display';

import { callGetBooks } from './utils/callApi';
import { Book } from './utils/types';
import AddBook from './components/addBook/AddBook';
import BooksList from './components/booksList/BooksList';
import { getBooksToString, getStringToBooks } from './utils/utilsFunctions';

function App() {
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useState<Book | null>(null);
  const [bookmarks, setBookmarks] = useState<Book[]>([]);

  useEffect(() => { 
    const books = localStorage.getItem('books');
    if(books) {
      try { 
        const stringToBooks = getStringToBooks(books);
        stringToBooks && setBookmarks(stringToBooks)
      } catch {
        localStorage.clear();
        setBookmarks([]);
      }
    }
  }, []);

  const sendSearch = (): void => {
    setCurrentSearch(callGetBooks(search));
    setSearch('');
  };

  const addBook = (): void => {
    const newBookMarks: Book[] = currentSearch ? [...bookmarks, { ...currentSearch, add_date: new Date().toUTCString() }] : bookmarks;
    setBookmarks(newBookMarks);
    newBookMarks && localStorage.setItem('books', getBooksToString(newBookMarks));
    setCurrentSearch(null);
  };

  const removeBook = (index: number): void => {
    bookmarks.splice(index, 1);
    bookmarks.length === 0 ? localStorage.removeItem('books') : localStorage.setItem('books', getBooksToString(bookmarks));
    setBookmarks([...bookmarks]);
  };

  return (
    <>
      <Form setSearch={setSearch} search={search} sendSearch={sendSearch} />
      {currentSearch && <AddBook addBook={addBook}><PreDisplay dataToDisplay={currentSearch} /></AddBook>}
      {bookmarks && <BooksList bookmarks={bookmarks} removeBook={removeBook} />}
    </>
  );
}

export default App;
