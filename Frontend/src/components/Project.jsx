import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaCode } from 'react-icons/fa';
import "../assets/css/Project.css";

import { use_Parent_API } from '../context/Parent_API_Context';
import api from '../config/api';
const Project = () => {
    const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dusqlukhy/";

    const { projects = [], loading, error } = use_Parent_API();
    const projectData =  
            React.useMemo(() => {
                    return Array.isArray(projects) ? [...projects].reverse() : [];
                }, [projects]);


    // ----------->  error MESSAGE
    if (error) 
        return (
            <p>Error: {error}</p>
        );
    


    return (
        <section className="p-project-section" id="PROJECTS">
            <div className="p-container">

                {/* projects HEADER */}
                <div className="a-dossier-header">
                    <div className="p-title">
                        <FaFolderOpen className="a-icon-neon" />
                        <h2 className='m-0'><strong>PROJECTS:</strong> <small>Er.Sujan</small></h2>
                    </div>
                </div>

                <div className="p-grid">
                    {loading? 
                        (
                            // -------------->  SKELETON LOADER (on Loading)
                            [1, 2, 3].map((item) => (
                                <div key={item} className="p-terminal-card">
                                    {/* Skeleton Header */}
                                    <div className="p-terminal-header">
                                        <div className="p-dots">
                                            <span className="p-dot" style={{ background: '#333' }}></span>
                                            <span className="p-dot" style={{ background: '#333' }}></span>
                                            <span className="p-dot" style={{ background: '#333' }}></span>
                                        </div>
                                        <div className="s-skeleton" style={{ width: '50px', height: '10px' }}></div>
                                    </div>

                                    <div className="p-card-body">
                                        {/* Skeleton Image */}
                                        <div className="p-image-wrapper">
                                            <div className="s-skeleton" style={{ width: '100%', height: '100%' }}></div>
                                        </div>

                                        {/* Skeleton Info */}
                                        <div className="p-info">
                                            {/* Title placeholder */}
                                            <div className="s-skeleton" style={{ width: '70%', height: '1.5rem', marginBottom: '15px' }}></div>
                                            
                                            {/* Description lines */}
                                            <div className="s-skeleton" style={{ width: '100%', height: '0.8rem', marginBottom: '8px' }}></div>
                                            <div className="s-skeleton" style={{ width: '90%', height: '0.8rem', marginBottom: '20px' }}></div>

                                            {/* Tech stack tags */}
                                            <div className="p-tech-stack">
                                                {[1, 2, 3].map((t) => (
                                                    <div key={t} className="s-skeleton" style={{ width: '60px', height: '25px' }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            
                        ): (
                            // -------------->  MAIN PROJECT DATA (after fetching complete)
                            projectData.map((project, index) => (
                                <div key={project.id} className="p-terminal-card">
                                    {/* Terminal Window Top Bar */}
                                    <div className="p-terminal-header">
                                        <div className="p-dots">
                                            <span className="p-dot red"></span>
                                            <span className="p-dot yellow"></span>
                                            <span className="p-dot green"></span>
                                        </div>
                                        {/* Dynamic number starting from 1 based on UI position */}
                                        <div className="p-id">NODE_0{index + 1}</div>
                                    </div>

                                    <div className="p-card-body">
                                            {/* image section */}
                                        <div className="p-image-wrapper">
                                            <img 
                                                src={`${CLOUDINARY_BASE_URL}${project.image}`} 
                                                alt={project.title} 
                                                loading="lazy" 
                                            />
                                            <div className="p-overlay">
                                                <div className="p-links">
                                                    <a href={project.github_url} target="_blank" rel="noreferrer" className="p-icon-btn">
                                                        <FaGithub />
                                                    </a>
                                                    <a href={project.live_url} target="_blank" rel="noreferrer" className="p-icon-btn">
                                                        <FaExternalLinkAlt />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                            {/* description section */}
                                        <div className="p-info">
                                            <h3 className="p-project-name">{project.title}</h3>
                                            <p className="p-project-desc">{project.description}</p>
                                            <div className="p-tech-stack">
                                                {Array.isArray(project.tech) && project.tech.map((t, i) => (
                                                    <span key={i} className="p-tag">
                                                        <FaCode className="p-tag-icon"/> {t.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Project;