import React from 'react';
import { FaDownload, FaBriefcase, FaGithub, FaLinkedin, FaYoutube, FaUser } from 'react-icons/fa';
import {Scroll_To_Section} from "../utils/Scroll_To_Section"
import '../assets/css/About.css';
import { use_Parent_API } from '../context/Parent_API_Context';

const About = () => {
    const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dusqlukhy/";
    const { cv, locations, loading, error } = use_Parent_API();


    if(error)
        return(
            <h1>Error: {error}</h1>
        )


    return (
        <section className="a-about-container" id="ABOUT">
            {/* Header / Dossier Title */}
            <div className="a-dossier-header">
                <div className="p-title">
                    <FaUser className="a-icon-neon" />
                    <h2 className='m-0'><strong>ABOUT:</strong> Er. Sujan</h2>
                </div>
                <div className="a-clearance">CLEARANCE: LEVEL_4</div>
            </div>

            <div className="a-content-grid">
                {/* Left: Metadata - Becomes top bar on Mobile */}
                <div className="a-metadata">
                    <div className="a-meta-item">
                        <span className="a-meta-label">STATUS</span>
                        <span className="a-meta-value a-blink">ACTIVE_DEV</span>
                    </div>
                    <div className="a-meta-item">
                        <span className="a-meta-label">SPECIALTY</span>
                        <span className="a-meta-value">FULLSTACK_DEV</span>
                    </div>
                    {locations.map((location, index) => (
                        <div key={index}>
                            <div  className="a-meta-item">
                                <span className="a-meta-label">CURRENT_LOCATION</span>
                                <span className="a-meta-value"><small>{location.current_location}</small></span>
                            </div>
                                <br />
                            <div  className="a-meta-item">
                                <span className="a-meta-label">PERMANENT_LOCATION</span>
                                <span className="a-meta-value">{location.primary_location}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Middle: Main Text */}
                <div className="a-bio-description">
                    <p className="a-typing-text">
                        <span className="a-prompt">{">"}</span> I love creating new things using imagination and bringing them to life.
                        Recently I've completed my Bachelor degree in <strong>Computer Engineering</strong> from <strong>Madan Bhandari College of Engineering, Urlabari-3, NEPAL</strong>.
                    </p>
                    <p className="a-typing-text">
                        <span className="a-prompt">{">"}</span> Currently working in my own project and learning new things.
                    </p>
                    
                    {/* ***** SOCIAL LINKS ******* */}
                    <div className="a-social-cluster">
                        <a href="https://github.com/Sujan-Rai-426?tab=repositories" target="_blank" aria-label="Github" className='f-social-link'>
                            <FaGithub /> <span className="f-tooltip">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/sujan-rai-18a07b2a6/" target="_blank" aria-label="LinkedIn" className='f-social-link'>
                            <FaLinkedin /><span className="f-tooltip">LinkedIn</span>
                        </a>
                        <a href="https://www.youtube.com/@CodeVora140" target="_blank" aria-label="YouTube" className='f-social-link'>
                            <FaYoutube /><span className="f-tooltip">YouTube</span>
                        </a>
                    </div>
                </div>

                {/* Right: CTA Buttons */}
                <div className="a-action-block">
                    {loading? 
                        (
                            // ---------> Skeleton Loader
                            <a className="a-btn a-btn-main">
                                <FaDownload /> Loading CV ...
                            </a>
                        ) : (
                                // ---------> CV main data after FETCHING
                                cv.map((cvFile, index) => (
                                    <a 
                                        key={index}
                                        className="a-btn a-btn-main"
                                        href={`${CLOUDINARY_BASE_URL}${cvFile.file}`}
                                        download={cvFile.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaDownload /> DOWNLOAD_CV
                                    </a>
                                ))
                        )
                    }
                    <button className="a-btn a-btn-outline" onClick={(e) => Scroll_To_Section(e, 'CONTACT')}>
                        <FaBriefcase /> HIRE_ME
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;