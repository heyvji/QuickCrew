import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-background)' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Us</h2>
                <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-secondary)', margin: '0 auto' }}></div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                        Building <span className="text-gold">Trust</span> Through Service
                    </h3>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#555' }}>
                        QuickCrew was founded on the belief that meaningful work drives progress. We are more than just a platform; we are a community dedicated to connecting capability with opportunity.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#555' }}>
                        Our mission is to empower businesses with reliable, on-demand support while providing individuals with flexible work opportunities that fit their lifestyle. With a focus on integrity and excellence, QuickCrew stands as a pillar of reliability in the gig economy.
                    </p>
                </div>

                {/* Placeholder for an image or visual element */}
                <div style={{
                    flex: '1 1 400px',
                    maxWidth: '500px',
                    height: '350px',
                    backgroundColor: '#001f3f', // Navy placeholder
                    background: 'linear-gradient(45deg, #001f3f, #003366)',
                    borderRadius: '8px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ textAlign: 'center', fontSize: '1.2rem', letterSpacing: '1.2px' }}>
                        <span style={{ fontSize: '0.1rem', display: 'block', color: 'var(--color-secondary)' }}><img src="./src/assets/images/company-logo.png" alt="Company Logo" width="250" height="250" /></span>
                        <span style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1.2rem' }}>Since 2026</span>
                    </div>
                    {/* Decorative border */}
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        right: '20px',
                        bottom: '20px',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}></div>
                </div>
            </div>
        </section>
    );
};

export default About;
