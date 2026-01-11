import React from 'react';

const Vision = () => {
    return (
        <section id="vision" className="section-padding" style={{
            backgroundColor: '#f8f9fa',
            textAlign: 'center'
        }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Our Vision</h2>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <p style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-primary)',
                    lineHeight: '1.8'
                }}>
                    "To become the world's most trusted partner in micro-workforce management, creating a global ecosystem where <span className="text-gold">opportunity</span> meets <span className="text-gold">ambition</span> securely and seamlessly."
                </p>
            </div>
            <div style={{
                marginTop: '4rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
            }}>
                <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Integrity</h3>
                    <p style={{ color: '#666' }}>Upholding the highest standards of honesty in every transaction.</p>
                </div>
                <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Reliability</h3>
                    <p style={{ color: '#666' }}>Consistent quality and dependable service, every time.</p>
                </div>
                <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Empowerment</h3>
                    <p style={{ color: '#666' }}>Giving control back to the workers and the businesses.</p>
                </div>
            </div>
        </section>
    );
};

export default Vision;
