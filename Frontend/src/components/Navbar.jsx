import React, { useState } from 'react';
import { FaTerminal, FaBars, FaTimes } from 'react-icons/fa';
import { Scroll_To_Section } from '../utils/Scroll_To_Section';
import "../assets/css/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // This handles both the scrolling and closing the sidebar on mobile
    const handleNavClick = (e, sectionId) => {
        Scroll_To_Section(e, sectionId);
        setIsOpen(false); // Closes the sidebar
    };

    return (
        <nav className="n-navbar">
            <div className="n-container">
                <div className="n-logo" onClick={(e) => handleNavClick(e, 'HERO')}>
                    <FaTerminal className="n-logo-icon" />
                    <span>@Er. SUJAN RAI:<span className="n-cursor">_</span></span>
                </div>

                {/* Mobile Sidebar Overlay */}
                <ul className={`n-nav-links ${isOpen ? "n-active" : ""}`}>
                    <li className="n-nav-item">
                        <a href="#HERO" onClick={(e) => handleNavClick(e, 'HERO')}>
                            <span className="n-prefix">{"> "}</span>HOME
                        </a>
                    </li>
                    <li className="n-nav-item">
                        <a href="#GIT_CONTRIBUTION" onClick={(e) => handleNavClick(e, 'GIT_CONTRIBUTION')}>
                            <span className="n-prefix">{"> "}</span>GIT
                        </a>
                    </li>
                    <li className="n-nav-item">
                        <a href="#ABOUT" onClick={(e) => handleNavClick(e, 'ABOUT')}>
                            <span className="n-prefix">{"> "}</span>ABOUT
                        </a>
                    </li>
                    <li className="n-nav-item">
                        <a href="#SKILLS" onClick={(e) => handleNavClick(e, 'SKILLS')}>
                            <span className="n-prefix">{"> "}</span>SKILLS
                        </a>
                    </li>
                    <li className="n-nav-item">
                        <a href="#PROJECTS" onClick={(e) => handleNavClick(e, 'PROJECTS')}>
                            <span className="n-prefix">{"> "}</span>PROJECTS
                        </a>
                    </li>
                    <li className="n-nav-item">
                        <a href="#CONTACT" onClick={(e) => handleNavClick(e, 'CONTACT')}>
                            <span className="n-prefix">{"> "}</span>CONTACT
                        </a>
                    </li>
                </ul>

                <div className="n-mobile-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {/* Background overlay for mobile when sidebar is open */}
            {isOpen && <div className="n-overlay-active" onClick={toggleMenu}></div>}
            <div className="n-nav-border-bottom"></div>
        </nav>
    );
};

export default Navbar;