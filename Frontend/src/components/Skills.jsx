import React from 'react';
import { FaBrain, FaCode, FaCogs, FaDatabase, FaMicrochip, FaRobot, FaTerminal, FaTools } from 'react-icons/fa';
import "../assets/css/Skills.css";
import { use_Parent_API } from '../context/Parent_API_Context';

const Skills = () => {

    const { skillCategories, loading, error  } = use_Parent_API()

    const iconMap = {
        FaCode: <FaCode />,
        FaDatabase: <FaDatabase />,
        FaTools: <FaTools />,
        FaBrain: <FaBrain />,
    };


    // --------> SHOW error MESSAGE
    if(error)
        return(
            <h1>Error: {error}</h1>
        )




    return (
        <section className="s-skills-section" id="SKILLS">
            <div className="s-container">
                {/* SKILL HEADER */}
                <section className="a-dossier-header">
                    <div className="a-header-title">
                        <FaTerminal className="a-icon-neon" />
                        <h2><strong>SKILLS:</strong> Er. Sujan Rai</h2>
                    </div>
                </section>

                {/* SKILL MAIN BODY */}
                <section className="s-grid">

                    { loading? 
                        (
                            // -------------->  SKELETON LOADER (on Loading)
                            [1, 2, 3].map((item) => (
                                <div key={item} className="s-card">
                                    <div className="s-card-header">
                                        <div className="s-skeleton s-skeleton-icon"></div>
                                        <div className="s-skeleton s-skeleton-title"></div>
                                    </div>
                                    <div className="s-skill-list">
                                        {[1, 2, 3, 4].map((n) => (
                                            <div key={n} className="s-skill-item" style={{ marginBottom: '25px' }}>
                                                <div className="s-skill-info">
                                                    <div className="s-skeleton s-skeleton-text"></div>
                                                    <div className="s-skeleton" style={{ width: '20px', height: '0.9rem' }}></div>
                                                </div>
                                                <div className="s-skeleton s-skeleton-bar"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ): (
                            // -------------->  MAIN SKILL DATA (after fetching complete)
                            skillCategories.map((category, index) => (
                                <div key={index} className="s-card">
                                    <div className="s-card-header">
                                        {iconMap[category.icon]}
                                        <h3 className='m-0'>{category.skill_type}</h3>
                                    </div>
                                    <div className="s-skill-list">
                                        {category.skills.map((skill, i) => (
                                            <div key={i} className="s-skill-item">
                                                <div className="s-skill-info">
                                                    <span>{skill.name}</span>
                                                    <span className="s-percentage">{skill.level}%</span>
                                                </div>
                                                <div className="s-progress-bar">
                                                    <div 
                                                        className="s-progress-fill" 
                                                        style={{ width: `${skill.level}%` }}
                                                    >
                                                        <div className="s-glimmer"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        
                                    </div>
                                </div>
                            ))
                        )
                    }
                </section>
            </div>
        </section>
    );
};

export default Skills;