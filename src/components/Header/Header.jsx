import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'; 
import { Link as RouterLink } from 'react-router-dom';
import "./Header.css"
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpen , setMenuOpen] = useState(false);
  const getMenuStyles= (menuOpen) => {
    if(document.documentElement.clientWidth <=800){
      return {right: !menuOpen && "-100%"}
    }
  } 

  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>

          <img className='bramha' src='./bramhavarta.jpeg' alt= 'logo' width={100} />

          <OutsideClickHandler 
          onOutsideClick={() =>{
            setMenuOpen(false)
          }}
          >
            <div className='flexCenter h-menu'
              style={getMenuStyles(menuOpen)}
            >

            <Link to='residencies' smooth={true} duration={500} spy={true} offset={-70}>
              Residencies
            </Link>
            <Link to='values' smooth={true} duration={500} spy={true} offset={-70}>
              Our Value
            </Link>
            <Link to='aboutus' smooth={true} duration={500} spy={true} offset={-70}>
              About US
            </Link>
            <Link to='get-started' smooth={true} duration={500} spy={true} offset={-70}>
              Get Started
            </Link>

            <Link to='contact' smooth={true} duration={500} spy={true} offset={-70}>
              Contact
            </Link>
            <button className='button'>
              <Link to='/signIn' >
                Login
              </Link>
            </button>

              
            </div>
          </OutsideClickHandler>
          <div className='menu-icon' onClick={() =>setMenuOpen((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </div>
        </div>

        
    </section>
  )
}

export default Header;

