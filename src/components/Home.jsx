import React from 'react';
import crop from '../assets/cropruse.png';
import css from '../index.css';

export default function Home() {
  return (
    <div className="image-container" >
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <img src={crop} className="logo" alt="ruse reveal" style={{height:'150px',width:'150px',borderRadius:'50%',textAlign:'center'}}/>
      </div>
      <div className="content">
        <center><h1>RUSE REVEAL</h1></center>
      </div>
    </div>
  );
}
