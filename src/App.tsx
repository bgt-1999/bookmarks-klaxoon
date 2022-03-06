import React, { useState } from 'react';
import './App.css';

import Form from './components/form/Form';
import PreDisplay from './components/display/Display';

import { callGetBooks } from './utils/callApi';
import { Book } from './utils/types';
import AddBook from './components/addBook/AddBook';
import BooksList from './components/booksList/BooksList';

function App() {
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useState<Book | null>(null);
  const [bookmarks, setBookmarks] = useState<Book[]>([]);

  const sendSearch = async () => {
    setCurrentSearch(callGetBooks(search));
    setSearch('');
  };

  const addBook = (): void => {
    currentSearch && setBookmarks([...bookmarks, currentSearch]);
    setCurrentSearch(null);
  };

  const removeBook = (index: number): void => {
    bookmarks.splice(index, 1);
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
