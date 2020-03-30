import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../src/global.css'

import Routes from '../src/routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer
        draggable={false}
        autoClose={2000}
      />
    </>
  );
}

export default App;
