import React, { useState } from 'react';
import './App.css';

import Form from './components/form/Form';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Form setSearch={setSearch} search={search} />
    </>
  );
}

export default App;
