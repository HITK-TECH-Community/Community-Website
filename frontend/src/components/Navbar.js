import React, { Fragment, useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const closeMobileMenu = () => setIsNavOpen(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <Fragment>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          HITK
        </Link>
        <div className='menu-icon' onClick={toggleNav}>
          <i className={isNavOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isNavOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ABOUT US
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/resources'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              RESOURCES
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/broadcasts'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              BROADCASTS <i className='fas fa-caret-down'></i>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </li>
          <li className='nav-item faq'>
            <Link to='/faqs' className='nav-links' onClick={closeMobileMenu}>
              FAQs
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/admin'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Admin<span>?</span>
            </Link>
          </li>
        </ul>
        <Button text='Admin' path='/admin' />
      </nav>
    </Fragment>
  );
};

export default Navbar;
