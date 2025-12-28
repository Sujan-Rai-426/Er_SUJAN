import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCircle } from 'react-icons/fa';
import "../assets/css/Footer.css";
import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="f-footer">
            <div className="f-footer-divider"></div>
            
            <div className="f-footer-container">
                {/* System Status Section */}
                <div className="f-footer-section">
                    <h4 className="f-footer-title">SYSTEM_STATUS</h4>
                    <div className="f-status-grid">
                        <div className="f-status-item">
                            <FaCircle className="f-status-icon f-online" />
                            <span>SERVER: ONLINE</span>
                        </div>
                        <div className="f-status-item">
                            <FaCircle className="f-status-icon f-online" />
                            <span>DATABASE: CONNECTED</span>
                        </div>
                        <div className="f-status-item">
                            <FaCircle className="f-status-icon f-online" />
                            <span>WORK: CODEVORA</span>
                        </div>
                        <div className="f-status-item">
                            <span className="f-blink-text">{">"} SYSTEM READY_</span>
                        </div>
                    </div>
                </div>

                {/* Navigation / Directory Section */}
                <div className="f-footer-section">
                    <h4 className="f-footer-title">DIRECTORY</h4>
                    <ul className="f-footer-links">
                        <li><a href="#root">/root</a></li>
                        <li><Link to="#projects">/home/projects</Link></li>
                        <li><Link to="#about">/user/about_me</Link></li>
                        <li><Link to="#contact">/bin/contact</Link></li>
                    </ul>
                </div>

                {/* Social / Encrypted Links Section */}
                <div className="f-footer-section">
                    <h4 className="f-footer-title">SOCIAL_ENCRYPTION</h4>
                    <div className="f-social-icons">
                        <a href="https://github.com/Sujan-Rai-426?tab=repositories" target="_blank" rel="noreferrer" className="f-social-link">
                            <FaGithub /> <span className="f-tooltip">GITHUB</span>
                        </a>
                        <a href="https://www.linkedin.com/in/sujan-rai-18a07b2a6/" target="_blank" rel="noreferrer" className="f-social-link">
                            <FaLinkedin /> <span className="f-tooltip">LINKEDIN</span>
                        </a>
                        <a href="https://www.youtube.com/@CodeVora140" target="_blank" rel="noreferrer" className="f-social-link">
                            <FaYoutube /> <span className="f-tooltip">YouTube</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright / Terminal Footer */}
            <div className="f-footer-bottom">
                <p>
                    COPYRIGHT (C) {currentYear} SUJAN_PORTFOLIO. 
                    ALL_RIGHTS_RESERVED. [V1.0.4-STABLE]
                </p>
            </div>
        </footer>
    );
};

export default Footer;