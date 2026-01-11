import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: '#001233', color: 'white' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Contact Us</h2>
                <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-secondary)', margin: '0 auto' }}></div>
            </div>

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '3rem',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <form style={{ display: 'grid', gap: '1.5rem' }}>
                    <div className="contact-grid">
                        <input type="text" placeholder="Name" style={{ padding: '1rem', borderRadius: '4px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', width: '100%' }} />
                        <input type="email" placeholder="Email" style={{ padding: '1rem', borderRadius: '4px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', width: '100%' }} />
                    </div>
                    <input type="text" placeholder="Subject" style={{ padding: '1rem', borderRadius: '4px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', width: '100%' }} />
                    <textarea rows="5" placeholder="Message" style={{ padding: '1rem', borderRadius: '4px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', width: '100%' }}></textarea>
                    <button type="submit" className="btn-primary" style={{ justifySelf: 'start', minWidth: '200px' }}>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
