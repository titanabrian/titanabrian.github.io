import { Pane } from 'evergreen-ui';
import React from 'react';
import './App.css';
import SearchBarComponent from './components/SearchComponent';

function App() {
  return (
    <Pane
    display="block"
    alignItems="center"
    justifyContent="center"
    height="100%"
    marginLeft="25%"
    marginRight="25%"
    marginTop="2%"
  >
   <SearchBarComponent/>
  </Pane>
  );
}

export default App;
