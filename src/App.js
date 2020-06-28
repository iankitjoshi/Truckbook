import React from 'react';
import {BrowserRouter , Route } from 'react-router-dom'
import FullHome from './Components/Home/FullHome';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <BrowserRouter >


    <Route path="/" component={FullHome} />
   </BrowserRouter>   
  );
}

export default App;
