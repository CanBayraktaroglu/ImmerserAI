import React, { useState } from 'react';
import '../styles/Navbar.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleclick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        setDropdown(window.innerWidth >= 800)
    }

    const onMouseLeave = () => {
        setDropdown(false);
    }

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    ImmerserAI
                </Link>
                <div className='menu-icon' onClick={handleclick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/features' className='nav-links' onClick={closeMobileMenu}>
                            Features <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>

                </ul>
            </nav>
        </>
    )
    /* const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Immerser</div>
            <ul className="navbar-nav">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/about">About</a></li>
                <li className="nav-item dropdown">
                    <button onClick={toggleDropdown} className="dropbtn">Features</button>
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <a href="/status">Status</a>
                        </div>
                    )}
                </li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    ); */
};

export default Navbar;
