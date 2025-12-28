import React, { useEffect, useState } from 'react';
import { FaTerminal, FaCode, FaSatellite, FaSkullCrossbones } from 'react-icons/fa';
import "../assets/css/Hero.css";
import ProfileImg from "../assets/img/Sujan.jpeg"; 
import Typing_Animation from '../utils/Typing_Animation';
import { Scroll_To_Section } from '../utils/Scroll_To_Section';

const Hero = () => {
    const [logs, setLogs] = useState([]);

    // Top Code Processing in Terminal animation
    useEffect(() => {
        const messages = [
            "CONNECTING TO PORT 8080...",
            "BYPASSING FIREWALL...",
            "LOADING UI_KERNEL.BIN",
            "ESTABLISHING SECURE PROTOCOL...",
            "SUCCESS: SUJAN_OS LOADED"
        ];
        let i = 0;
        const interval = setInterval(() => {
            if (i < messages.length) {
                setLogs(prev => [...prev, messages[i]]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 800);
        return () => clearInterval(interval);
    }, []);


    // handle logic to navigate to Codevora UI url
    const handleCodeVora = () => {
        try{
            window.open(`https://codevora140.vercel.app`)
        } catch {
            console.log(e)
        }
    }


    return (
        <section className="h-hero-fullscreen">
            <div className="h-binary-overlay"></div>

            <div className="h-top-bar">
                <div className="h-status-item"> <FaSatellite className='fs-4'/> L-SAT: ACTIVE</div>
                <div className="h-status-item"> <span> <FaCode className='fs-4'/> LANG: REACT_JS, DRF </span></div>
                <div className="h-status-item h-time">{new Date().toLocaleTimeString()}</div>
            </div>

            <div className="h-side-logs">
                {logs.map((log, index) => (
                    <div key={index} className="h-log-line">
                        <span className="h-timestamp">[{index}.002]</span> {log}
                    </div>
                ))}
            </div>

            <div className="h-main-console">
                <div className="h-profile-module">
                    {/* This stays on right in Desktop, top in Mobile */}
                    <div className="h-image-wrapper">
                        <img src={ProfileImg} alt="Sujan" className="h-profile-img" />
                        <div className="h-scan-ring"></div>
                    </div>

                    
                    <div className="h-identity">
                        <br />
                        <br />
                        
                        {/* ***** NAME/ TYPING ANIMATION ****** */}
                        <div className="h-glitch-wrapper">
                            <h1 className="h-title" data-text="Er. Sujan Rai">Er.Sujan Rai</h1>
                            <h3>
                                <small>
                                    <Typing_Animation 
                                        words={[
                                            "Full-Stack Developer...",
                                            "Imaginator, Dreamer...",
                                            "Gamer and Learner...",
                                            "Web Developer...",
                                        ]}
                                        speed={90}
                                        eraseSpeed={40}
                                    />
                                </small>
                            </h3>
                        </div>

                        {/* ***** DESCRIPTION BOX ****** */}
                        <div className="h-bio-box">
                            <p className="h-bio-text">
                                <span className="h-bio-label">DESCRIPTION:</span> Another curious person who is always ready to learn new things and Passionate about building efficient and scalable Web App.
                            </p>
                            <p className="h-bio-text">
                                <span className="h-bio-label">LOCATION:</span> 27.7172° N, 85.3240° E [KATHMANDU]
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* ***** BUTTONS ****** */}
                <div className="h-console-actions">
                    <button className="h-console-btn" onClick={(e) => Scroll_To_Section(e, 'PROJECTS')}>
                        <FaTerminal /> INITIATE_PROJECTS
                    </button>
                    <button className="h-console-btn h-danger" onClick={handleCodeVora}>
                        <FaSkullCrossbones /> CODEVORA_UI
                    </button>
                </div>
            </div>

            <div className="h-bottom-scanner">
                <div className="h-scanner-line"></div>
                <div className="h-scanner-text">DATA_PACKETS_ENCRYPTED: 102.5kb/s</div>
            </div>
        </section>
    );
};

export default Hero;