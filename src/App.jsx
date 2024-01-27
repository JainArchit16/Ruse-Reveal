import React, { Component } from 'react'

import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Button from './components/Button.jsx';
import Review from './components/Api.jsx';
import Cart from './components/Cart.jsx';
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return(
      <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/Home" element={<Home />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Cart" element={<Cart />}></Route>
            <Route exact path="/Button" element={<Button />}></Route>
            <Route exact path="/Review" element={<Review />}></Route>
          </Routes>
          
      
      </BrowserRouter>
    </>
    )
  }
}



