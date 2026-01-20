import React, { useState, useEffect } from 'react';

const Hero = () => {
    const clients = [
        { id: 1, name: 'Hilton', logo: 'H' },
        { id: 2, name: 'Marriott', logo: 'M' },
        { id: 3, name: 'ITC Hotels', logo: 'ITC' },
        { id: 4, name: 'Four Seasons', logo: 'FS' },
        { id: 5, name: 'Hyatt', logo: 'H' }
    ];

    const [currentClient, setCurrentClient] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentClient((prev) => (prev + 1) % clients.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [clients.length]);

    return (
        <section id="home" className="hero-section">
            <div className="section-padding hero-grid">
                {/* Left Side: Text Content */}
                <div className="hero-text-content">
                    <h1 className="hero-title">
                        <span style={{ fontSize: '4rem' }}>Empowering</span> <span className="text-gold" style={{ fontSize: '4.5rem' }}>Workforce, </span>
                        <span style={{ fontSize: '4rem' }}>Simplifying</span> <span className="text-gold" style={{ fontSize: '4.5rem' }}>Workflows</span>
                    </h1>
                    <p className="hero-subtitle">
                        QuickCrew bridges the gap between skilled professionals and clients needing reliable assistance. Experience the power of connection.
                    </p>
                    <div className="hero-buttons">
                        <a href="./services" className="btn-primary">Explore Services</a>
                        <a href="./Contact" className="btn-primary" style={{ backgroundColor: 'transparent', color: 'white' }}>Contact Us</a>
                    </div>
                </div>

                {/* Right Side: Major Clients */}
                <div>
                    <h3 className="mb-5 text-center" style={{ color: 'var(--color-secondary)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem', fontWeight: 'bold' }}>Trusted by Industry Leaders</h3>
                    <div style={{
                        position: 'relative',
                        height: '280px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <div key={currentClient} style={{
                            animation: 'fadeIn 0.5s ease-in-out',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '5rem',
                                fontStyle: 'bold',
                                marginBottom: '10px',
                                color: 'var(--color-secondary)'
                            }}>
                                {clients[currentClient].logo}
                            </div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                                {clients[currentClient].name}
                            </div>
                        </div>

                        {/* Slide Indicators */}
                        <div style={{
                            position: 'absolute',
                            bottom: '15px',
                            display: 'flex',
                            gap: '8px'
                        }}>
                            {clients.map((_, index) => (
                                <div key={index} style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: index === currentClient ? 'var(--color-secondary)' : 'rgba(255,255,255,0.2)',
                                    transition: 'background-color 0.3s'
                                }}></div>
                            ))}
                        </div>
                    </div>
                    {/* Add keyframes for fadeIn */}
                    <style>{`
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(10px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

export default Hero;
