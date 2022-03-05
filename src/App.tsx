import React, { useState } from 'react';
import './App.css';

import Form from './components/form/Form';
import PreDisplay from './components/display/Display';

import { callGetBooks } from './utils/callApi';
import { VimeoData } from './utils/types';

function App() {
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useState<VimeoData | null>(null);

  const sendSearch = async () => {
    setCurrentSearch(callGetBooks(search));
  };

  return (
    <>
      <Form setSearch={setSearch} search={search} sendSearch={sendSearch} />
      {currentSearch && <PreDisplay dataToDisplay={currentSearch} />}
    </>
  );
}

export default App;
