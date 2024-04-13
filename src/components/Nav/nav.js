import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-scroll';
import logo from '../../assets/as-high-resolution-logo-black-modified.png'
const Nav = () => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} className='logo'/>
      <div className='menu'>
        <Link className="menuitem" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        <Link className="menuitem" activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        <Link className="menuitem" activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500}>Portfolio</Link>
        <Link className="menuitem" activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
      </div>
      <img src="https://pixsector.com/cache/db444a5d/av3408bf9a8e4c42e82ae.png" alt="Logo" className="mb" onClick={() => setshowMenu(!showMenu)}/>
      <div className='menubar' style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link className="item" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setshowMenu(!false)}>home</Link>
        <Link className="item" activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setshowMenu(!false)}>about</Link>
        <Link className="item" activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setshowMenu(!false)}>portfolio</Link>
        <Link className="item" activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setshowMenu(!false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;

