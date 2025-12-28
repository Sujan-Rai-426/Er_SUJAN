import React, { useState, useRef, useEffect } from "react";
import "../assets/css/Interactive_Background.css";

const Interactive_Background = ({ children }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Katakana + Binary for more "Hacker" feel
        const charStr = "01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
        const characters = charStr.split("");
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            // Darker trails
            ctx.fillStyle = "rgba(2, 5, 2, 0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                
                // Randomize brightness for each character
                const opacity = Math.random();
                if (opacity > 0.9) {
                    ctx.fillStyle = "#fff"; // Occasional white flash
                } else if (opacity > 0.5) {
                    ctx.fillStyle = "#00ff41"; // Standard green
                } else {
                    ctx.fillStyle = "#003b11"; // Dim green for background depth
                }

                ctx.font = fontSize + "px monospace";
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <div className="ib-hacker-grid-container" ref={containerRef} onMouseMove={handleMouseMove}>
            <canvas ref={canvasRef} className="ib-matrix-canvas" />
            <div className="ib-vignette" />
            
            <div className="ib-grid-overlay" style={{ "--mouse-x": `${mousePos.x}px`, "--mouse-y": `${mousePos.y}px` }}>
                <div className="ib-grid-glow" />
            </div>

            <div className="ib-main-content-wrapper">
                {children}
            </div>

            <div className="ib-scanline" />
        </div>
    );
};

export default Interactive_Background;