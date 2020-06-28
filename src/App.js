import React from 'react';
import {BrowserRouter , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import FullPage from './Components/FullPage';


function App() {
  return (
   <BrowserRouter >


    <Route path="/" component={FullPage} />
    
   </BrowserRouter>   
  );
}

export default App;
