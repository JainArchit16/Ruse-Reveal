import React from 'react'
import logo from '../assets/logo.jpg'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <ul style={{backgroundColor:'#56ab98',display:'flex',alignItems:'center'}}>
    <li><Link to="/Home">Home</Link></li>
    <li><Link to="/Cart">Cart</Link></li>
    <li><Link to="/Button">Button</Link></li>
    <li><Link to="/Review">Review</Link></li>
    <li><Link to="/Price">Price</Link></li>
    </ul>
   
  );
};

export default Navbar;

