import React, { useState } from 'react';
import { FaLocationDot, FaPhone, FaEnvelope, FaPaperPlane, FaTerminal } from 'react-icons/fa6';
import "../assets/css/Contact.css";
import Typing_Animation from '../utils/Typing_Animation';
import { FaShieldAlt } from 'react-icons/fa';
import { use_Parent_API } from '../context/Parent_API_Context';

function Contact() {

    const { locations, loading, error } = use_Parent_API();

    const [result, setResult] = useState("AWAITING_INPUT");
    const [statusClass, setStatusClass] = useState("status-idle");
    const [isSending, setIsSending] = useState(false);

    // Sending Or SUbmiting message
    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        setResult("INITIALIZING_TRANSMISSION...");
        setStatusClass("status-processing");

        const formData = new FormData(event.target);
        // Ensure VITE_EMAIL_ACCESS_KEY is set in your .env file
        formData.append("access_key", import.meta.env.VITE_EMAIL_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("DATA_PACKET_DELIVERED");
                setStatusClass("status-success");
                alert("Uplink Established: Message Sent Successfully!");
                event.target.reset();
            } else {
                setResult("TRANSMISSION_FAILED: " + data.message.toUpperCase());
                setStatusClass("status-error");
            }
        } catch (err) {
            setResult("NETWORK_ERROR: UPLINK_UNSTABLE");
            setStatusClass("status-error");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id='CONTACT' className="c-main-section">
            {/* Ambient Scanline Effect */}
            <div className="c-scanline"></div>
            
            <div className="c-container">
                <div className="c-terminal-header">
                    <h2 className="c-title">
                        <FaShieldAlt className="c-icon-gap" /> 
                        ESTABLISH_SECURE_CONNECTION                          
                        <Typing_Animation 
                            words={["...."]}
                            speed={150}        // Slower speed (300ms) matches real terminal "ping" logs
                            eraseSpeed={1}      // Almost instant reset
                            typingDelay={50}   // Wait before starting to type
                            backDelay={50}    // Wait 1 second while dots are full before resetting
                        />
                    </h2>
                    <div className="c-status-line">
                        <span className="c-label">SYSTEM_LOG:</span>
                        <span className={`c-result ${statusClass}`}>{result}</span>
                    </div>
                </div>

                <div className="c-grid">
                    {/* Left Side: Metadata/Info */}
            {/* ************* LEFT METADATA INFORMATION *************** */}
                    <div className="c-contact-left">
                        <div className="c-detail-card">
                            <div className="c-icon-frame"><FaLocationDot /></div>
                            <div className="c-detail-text">
                                <h3>LOCATION_ID</h3>
                                {locations.map((location, index) => (
                                    <div key={index}>
                                        <p>Primary Address: <br />
                                            <i>{location.primary_location}</i>
                                        </p>
                                        <p>Current Address: <br />
                                            <i>{location.current_location}</i>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="c-detail-card">
                            <div className="c-icon-frame"><FaPhone /></div>
                            <div className="c-detail-text">
                                <h3>VOICE_CHANNEL</h3>
                                <p>+977 9805376861</p>
                            </div>
                        </div>

                        <div className="c-detail-card">
                            <div className="c-icon-frame"><FaEnvelope /></div>
                            <div className="c-detail-text">
                                <h3>PRIMARY_ADDR</h3>
                                <p>codevora140@gmail.com</p>
                                <p className="c-subtext">sujanrai20070140@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Terminal Form */}
                {/* ************* RIGHT CONTACT FORM *************** */}
                    <div className="c-contact-right">
                        <div className="c-form-window">
                            <div className="c-window-bar">
                                <div className="c-dots">
                                    <span className="c-dot red"></span>
                                    <span className="c-dot yellow"></span>
                                    <span className="c-dot green"></span>
                                </div>
                                <span className="c-filename">uplink_portal.v1.0.4</span>
                            </div>
                            
                            {/* * CONTACT FORM * */}
                            <form className="c-actual-form" onSubmit={onSubmit}>
                                <div className="c-input-box">
                                    <label><FaTerminal /> SOURCE_IDENTIFIER</label>
                                    <input type="text" placeholder="Full Name" name="name" required />
                                </div>

                                <div className="c-input-box">
                                    <label><FaTerminal /> SMTP_RETURN_PROTOCOL</label>
                                    <input type="email" placeholder="your_email@gmail.com" name="email" required />
                                </div>

                                <div className="c-input-box">
                                    <label><FaTerminal /> PACKET_SUBJECT</label>
                                    <input type="text" placeholder="Subject" name="subject" required />
                                </div>

                                <div className="c-input-box">
                                    <label><FaTerminal /> DATA_CONTENT</label>
                                    <textarea placeholder="Enter message payload..." name="message" required rows="4"></textarea>
                                </div>

                                <button type="submit" className='c-submit-btn' disabled={isSending} >
                                    {isSending ? <div className="c-loader"></div> : <FaPaperPlane />}
                                    <span>{isSending ? "ENCRYPTING..." : "INITIATE_TRANSFER"}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;