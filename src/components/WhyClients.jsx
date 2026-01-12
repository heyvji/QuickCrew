import React from 'react';

const WhyClients = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', justifyContent: 'center' }}>
                <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Why Clients Choose <span className="text-gold">QuickCrew</span></h2>
                    <ul style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>✓</span>
                            Trusted, verified workforce.
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>✓</span>
                            Instant hiring for immediate needs.
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>✓</span>
                            Seamless management via our dedicated app.
                        </li>
                    </ul>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a
                            href="#"
                            className="btn-primary"
                            style={{
                                backgroundColor: 'var(--color-secondary)',
                                color: 'var(--color-primary)',
                                borderColor: 'var(--color-secondary)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                            }}
                        >
                            Download Client App
                        </a>
                    </div>
                </div>
                <div style={{ flex: '1 1 300px', maxWidth: '400px', textAlign: 'center' }}>
                    {/* Placeholder for Client App Screenshot */}
                    <div style={{
                        width: '100%',
                        height: '400px',
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                    }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)' }}><img src="./src/assets/images/client-app-logo.png" alt="Client App" width="350" height="350" /></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyClients;
