import React, { useState, useEffect } from 'react';

const Hero = () => {
    const clients = [
        { id: 1, name: 'Google', logo: '🌐' },
        { id: 2, name: 'Microsoft', logo: '💻' },
        { id: 3, name: 'Amazon', logo: '📦' },
        { id: 4, name: 'Tesla', logo: '🚗' },
        { id: 5, name: 'Netflix', logo: '🎬' }
    ];

    const [currentClient, setCurrentClient] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentClient((prev) => (prev + 1) % clients.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [clients.length]);

    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#001233',
            backgroundImage: `
                repeating-linear-gradient(45deg, rgba(255, 215, 0, 0.03) 0px, rgba(255, 215, 0, 0.03) 1px, transparent 1px, transparent 30px),
                repeating-linear-gradient(-45deg, rgba(255, 215, 0, 0.03) 0px, rgba(255, 215, 0, 0.03) 1px, transparent 1px, transparent 30px),
                linear-gradient(135deg, var(--color-primary) 0%, #001233 100%)
            `,
            color: 'white',
            textAlign: 'center',
            padding: '0 2rem',
            marginTop: '60px' // Offset for fixed navbar
        }}>
            <div className="section-padding" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                width: '100%',
                maxWidth: '1200px',
                alignItems: 'center'
            }}>
                {/* Left Side: Text Content */}
                <div style={{ textAlign: 'left', maxWidth: '600px' }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        marginBottom: '1.5rem',
                        color: 'white',
                        lineHeight: '1.2'
                    }}>
                        Empowering Work, <span className="text-gold">Simplifying Life</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '2.5rem',
                        color: 'var(--color-text-light)',
                        maxWidth: '500px'
                    }}>
                        QuickCrew bridges the gap between skilled professionals and clients needing reliable assistance. Experience the power of connection.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#services" className="btn-primary">Explore Services</a>
                        <a href="#contact" style={{
                            padding: '0.8rem 2rem',
                            border: '2px solid white',
                            borderRadius: '4px',
                            color: 'white',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>Contact Us</a>
                    </div>
                </div>

                {/* Right Side: Major Clients */}
                <div>
                    <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Trusted by Industry Leaders</h3>
                    <div style={{
                        position: 'relative',
                        height: '180px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
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
                                fontSize: '2rem',
                                marginBottom: '10px',
                                color: 'rgba(255,255,255,0.8)'
                            }}>
                                {clients[currentClient].logo}
                            </div>
                            <div style={{
                                fontSize: '1.2rem',
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
