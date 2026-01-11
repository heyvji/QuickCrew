import React from 'react';

const WhyWorkers = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', justifyContent: 'center' }}>
                <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why Workers Choose <span className="text-gold">QuickCrew</span></h2>
                    <ul style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>✓</span>
                            Flexible commitment - work when you want.
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>✓</span>
                            Instant payments for daily needs.
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>✓</span>
                            Variety of opportunities for all skill levels.
                        </li>
                    </ul>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" className="btn-primary">
                            Download Worker App
                        </a>
                    </div>
                </div>
                <div style={{ flex: '1 1 300px', maxWidth: '400px', textAlign: 'center' }}>
                    {/* Placeholder for Worker App Screenshot */}
                    <div style={{
                        width: '100%',
                        height: '400px',
                        backgroundColor: '#f0f2f5',
                        borderRadius: '20px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}>
                        <span style={{ color: '#aaa' }}><img src="./src/images/worker-app-logo.png" alt="Worker App" width="350" height="350" /></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkers;
