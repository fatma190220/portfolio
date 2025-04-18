import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className='footer flex'>

      <ul className='flex'>
        <li><a href="#">about</a></li>
        <li><a href="#">info</a></li>
        <li><a href="#">uses</a></li>
        <li><a href="#">properties</a></li>
      </ul>
      <p> &copy; all rights reserved </p>
      
    </footer>
  )
}
