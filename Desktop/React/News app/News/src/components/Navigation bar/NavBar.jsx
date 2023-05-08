

import './NavBar.css'

import React, { Component } from 'react'


export default class NavBar extends Component {

  render() {
    return (
    <div className="navbar-container">
      
        <nav className="navbar">
              <a className='app-name' href='/'>News App</a>
              <div className='name-nav'>
                  <ul className='nav-links'>
                      <a href = '/'><li className="item it-1">Home</li></a>
                      <a href = '/about'><li className="item it-2">About</li></a>
                      <a href = '/contact'><li className="item it-3">Contact</li></a>
                  </ul>
              
                </div>
              <img className='menuIcon' onClick={()=>{                    //onclick applied to toggle the class to active
                const navLinks = document.querySelector(".nav-links");
                navLinks.classList.toggle('active');
              }} src='../icons/menuBurger.png'></img>
            
        </nav>

    
    </div>
  
    )
  }
}

