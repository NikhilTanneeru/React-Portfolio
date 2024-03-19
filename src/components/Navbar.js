import React from 'react';
// import { a } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar(props) {
  return (
    <div>
      <ul className='ul'>
        <li><b><h4 style={{ float: 'left', paddingLeft: '5vw',paddingTop:'8px', color: 'black' }}>🕸 Nikhil</h4></b></li>
        <li>            
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'dark'}`} id='toggleswitch' style={{float:'right'}}> 
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </li>
        <li><a style={{ float: 'right', marginRight: '5vw' }} href='/'>Contact</a></li>
        <li><a style={{ float: 'right' }} href='/'>Certifications</a></li>
        <li><a style={{ float: 'right' }} href='#about'>Projects</a></li>
        <li><a style={{ float: 'right' }} href='/'>About</a></li>
        <li><a style={{ float: 'right' }} href='/'>Home</a></li>
      </ul>
    </div>
  );
}
