import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { FaGithub, FaHistory } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import "../assets/css/GitContribution.css";

// Helper hook to get current window size
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

const GitContribution = () => {
    const scrollRef = useRef(null);
    const [selectedYear, setSelectedYear] = useState('last');
    const { width } = useWindowSize();

    // Dynamically calculate blockSize based on user requirement
    let calculatedBlockSize = 15; // Default Laptop/Desktop >= 1024
    
    if (width < 768) {
        calculatedBlockSize = 12; // Mobile < 768
    } else if (width < 1024) {
        calculatedBlockSize = 13; // Tablet 768 <= width < 1024
    }

    const themeSettings = {
        light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        dark: ['#161b22', '#004411', '#006d32', '#26a641', '#00ff41'], 
    };

    useLayoutEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
        }
    }, [selectedYear]);

    // Handle scrollbar auto-hide logic for mobile touch
    useEffect(() => {
        const container = scrollRef.current;
        if (!container || width >= 1024) return;

        let isScrolling;
        
        const handleScroll = () => {
            // Add class on scroll
            container.classList.add('is-scrolling');
            
            // Clear timeout throughout scroll
            window.clearTimeout(isScrolling);
            
            // Set timeout to run after scroll ends
            isScrolling = setTimeout(() => {
                // Remove class after scroll stops
                container.classList.remove('is-scrolling');
            }, 1000); // Hide after 1 second of inactivity
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [width]);

    const years = ['last', 2026, 2025, 2024];

    return (
        <section className="p-git-section">
            <div className="p-container">
                <div className="p-terminal-card">
                    <div className="p-terminal-header">
                        <div className="p-dots">
                            <span className="p-dot red"></span>
                            <span className="p-dot yellow"></span>
                            <span className="p-dot green"></span>
                        </div>
                        <div className="p-id">GITHUB_CONTRIBUTIONS_v4.2</div>
                    </div>

                    {/* scroll-container ref and unique class for JS hook */}
                    <div className="p-info scroll-container js-scroll-hide" ref={scrollRef}>
                        <div className="git-header-inline responsive-git-header">
                            <div className="git-user-block">
                                <FaGithub className="git-icon-neon" />
                                <h3 className="p-project-name">@Sujan-Rai-426</h3>
                            </div>
                            
                            <div className="git-year-selector">
                                <FaHistory className="history-icon" />
                                {years.map((y) => (
                                    <button 
                                        key={y} 
                                        onClick={() => setSelectedYear(y)}
                                        className={`year-btn ${selectedYear === y ? 'active' : ''}`}
                                    >
                                        {y === 'last' ? 'LATEST' : y}
                                    </button>
                                ))
                                }
                            </div>
                        </div>

                        <div className="calendar-wrapper">
                            <GitHubCalendar 
                                username="Sujan-Rai-426"
                                year={selectedYear === 'last' ? undefined : selectedYear}
                                theme={themeSettings}
                                fontSize={14}
                                // Apply the dynamically calculated size
                                blockSize={calculatedBlockSize}
                                blockMargin={4}
                                colorScheme="dark"
                                style={{margin: "0 auto"}}
                                renderBlock={(block, activity) => (
                                    React.cloneElement(block, {
                                        'data-tooltip-id': 'github-tooltip',
                                        'data-tooltip-content': `${activity.count} contributions on ${activity.date}`,
                                    })
                                )}
                            />
                            {/* Matrix Style Tooltip Customization */}
                            <ReactTooltip 
                                id="github-tooltip" 
                                className="matrix-tooltip"
                                delayShow={100}
                            />
                        </div>
                        
                        <p className="p-project-desc terminal-prompt">
                            &gt; SYSTEM_READY: HOVER_FOR_METADATA <span className="blink">_</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitContribution;