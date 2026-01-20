import React from 'react';
import workerAppLogo from '../assets/images/worker-app-logo.png';

const WhyWorkers = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
            <div className="flex-responsive flex-reverse">
                <div className="flex-item-text">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Take control of what you earn for what you do with <span className="text-gold">QuickCrew</span></h2>
                    <ul style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>✓</span>
                            Flexible commitment - work when you want.
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>✓</span>
                            Guaranteed payments for daily work.
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>✓</span>
                            Variety of opportunities for all skill levels.
                        </li>
                    </ul>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" className="btn-primary">
                            Become a Crew Member
                        </a>
                    </div>
                </div>
                <div className="flex-item-image">
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
                        <span style={{ color: '#aaa' }}><img src={workerAppLogo} alt="Worker App" width="350" height="350" /></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkers;
