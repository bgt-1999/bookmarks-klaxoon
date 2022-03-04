import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/form/Form';

import { callGetBooks } from './utils/callApi';

function App() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    callGetBooks();
  }, []);

  return (
    <>
      <Form setSearch={setSearch} search={search} />
    </>
  );
}

export default App;
