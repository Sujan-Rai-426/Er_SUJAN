import React from 'react';
import { FaCode, FaServer, FaMobileScreenButton, FaGlobe, FaShieldHalved, FaDatabase } from 'react-icons/fa6';
import "../assets/css/Service.css";
import { use_Parent_API } from '../context/Parent_API_Context';

const Service = () => {


    const services = [
        {
            id: "01",
            title: "FRONTEND_ARCHITECT",
            icon: <FaGlobe />,
            desc: "Crafting high-performance, responsive interfaces using React and Next.js. Optimized for speed and SEO.",
            tags: ["React", "Tailwind", "Framer Motion"]
        },
        {
            id: "02",
            title: "BACKEND_ENGINEERING",
            icon: <FaServer />,
            desc: "Building robust server-side logic and scalable APIs. Expert in Node.js and Express environments.",
            tags: ["Node.js", "Express", "REST APIs"]
        },
        {
            id: "03",
            title: "DATABASE_MANAGEMENT",
            icon: <FaDatabase />,
            desc: "Architecting efficient data models and secure storage solutions using SQL and NoSQL databases.",
            tags: ["MongoDB", "PostgreSQL", "Firebase"]
        },
    ];

    return (
        <section className="s-section" id="SERVICES">
            <div className="s-container">
                <div className="s-header">
                    <h2 className="s-title"><FaCode /> SYSTEM_CAPABILITIES</h2>
                    <p className="s-subtitle">Available modules for project deployment.</p>
                </div>

                <div className="s-grid">
                    {services.map((service, index) => (
                        <div key={index} className="s-card">
                            <div className="s-card-glow"></div>
                            <div className="s-card-content">
                                <div className="s-id">{service.id}</div>
                                <div className="s-icon-box">
                                    {service.icon}
                                </div>
                                <h3 className="s-card-title">{service.title}</h3>
                                <p className="s-card-desc">{service.desc}</p>
                                <div className="s-tag-group">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className="s-tag">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;