import React, { useState, useMemo, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import "../assets/css/Project.css";
import { use_Parent_API } from '../context/Parent_API_Context';

const Project = () => {
    const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dusqlukhy/";
    const { projects = [], loading, error } = use_Parent_API();

    const [activeCard, setActiveCard] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Update screen size state on resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projectData = useMemo(() => {
        return Array.isArray(projects) ? [...projects].reverse() : [];
    }, [projects]);

    // Set default view: 3 for mobile, 6 for desktop
    const defaultLimit = isMobile ? 3 : 6;
    const visibleProjects = showAll ? projectData : projectData.slice(0, defaultLimit);

    const handleToggleOverlay = (id) => {
        setActiveCard(prev => (prev === id ? null : id));
    };

    if (error) {
        return (
            <p style={{ color: "red", textAlign: 'center', padding: '20px' }}>
                Projects: {error}
            </p>
        );
    }

    return (
        <section className="p-project-section" id="PROJECTS">
            <div className="p-container">
                <div className="a-dossier-header">
                    <div className="p-title">
                        <FaFolderOpen className="a-icon-neon" />
                        <h2 className='m-0'>
                            <strong>PROJECTS:</strong> <small>Er.Sujan</small>
                            {/* Project Counter Tag */}
                            {!loading && (
                                <span className="p-count-badge">[{projectData.length}]</span>
                            )}
                        </h2>
                    </div>
                </div>

                <div className="p-grid">
                    {loading ? (
                        [1, 2, 3].map((item) => (
                            <div key={item} className="p-terminal-card skeleton">
                                <div className="p-terminal-header">
                                    <div className="p-dots">
                                        <span className="p-dot" style={{ background: '#333' }}></span>
                                        <span className="p-dot" style={{ background: '#333' }}></span>
                                        <span className="p-dot" style={{ background: '#333' }}></span>
                                    </div>
                                    <div className="s-skeleton" style={{ width: '50px', height: '10px' }}></div>
                                </div>
                                <div className="p-card-body">
                                    <div className="p-image-wrapper">
                                        <div className="s-skeleton" style={{ width: '100%', height: '100%' }}></div>
                                    </div>
                                    <div className="p-info">
                                        <div className="s-skeleton" style={{ width: '70%', height: '1.5rem', marginBottom: '15px' }}></div>
                                        <div className="s-skeleton" style={{ width: '100%', height: '0.8rem', marginBottom: '8px' }}></div>
                                        <div className="p-tech-stack">
                                            {[1, 2, 3].map((t) => (
                                                <div key={t} className="s-skeleton" style={{ width: '60px', height: '25px' }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        visibleProjects.map((project, index) => (
                            <div 
                                key={project.id} 
                                className={`p-terminal-card ${activeCard === project.id ? 'is-active' : ''}`}
                                onClick={() => handleToggleOverlay(project.id)}
                            >
                                <div className="p-terminal-header">
                                    <div className="p-dots">
                                        <span className="p-dot red"></span>
                                        <span className="p-dot yellow"></span>
                                        <span className="p-dot green"></span>
                                    </div>
                                    <div className="p-id">NODE_0{index + 1}</div>
                                </div>

                                <div className="p-card-body">
                                    <div className="p-image-wrapper">
                                        <img 
                                            src={`${CLOUDINARY_BASE_URL}${project.image}`} 
                                            alt={project.title} 
                                            loading="lazy" 
                                        />
                                        <div className="p-overlay">
                                            <div className="p-links" onClick={(e) => e.stopPropagation()}>
                                                <a href={project.github_url} target="_blank" rel="noreferrer" className="p-icon-btn">
                                                    <FaGithub />
                                                </a>
                                                <a href={project.live_url} target="_blank" rel="noreferrer" className="p-icon-btn">
                                                    <FaExternalLinkAlt />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

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
                    )}
                </div>

                {/* Toggle Button Container - Only shows if there are more projects than the limit */}
                {!loading && projectData.length > defaultLimit && (
                    <div className="p-view-more-container">
                        <button 
                            className="p-view-more-btn" 
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? (
                                <>CLOSE CATALOG <FaChevronUp /></>
                            ) : (
                                <>VIEW ALL PROJECTS ({projectData.length}) <FaChevronDown /></>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Project;