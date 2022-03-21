import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import Router from 'routes';
import configureAppStore from 'store';

// const store = configureAppStore();

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App;