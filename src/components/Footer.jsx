import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000', color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div className="section-padding" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>

                {/* Brand Column */}
                <div style={{ gridColumn: '1 / -1' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '1rem', fontWeight: 'bold', border: '1px solid silver', padding: '5px 15px', marginRight: '5px' }}><img src="./src/images/company-logo.png" alt="Company Logo" width="80" height="80" /></span>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>QuickCrew</span>
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Company</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><a href="#home" style={{ color: '#aaa' }}>Home</a></li>
                        <li><a href="#about" style={{ color: '#aaa' }}>About Us</a></li>
                        <li><a href="#vision" style={{ color: '#aaa' }}>Our Vision</a></li>
                        <li><a href="#contact" style={{ color: '#aaa' }}>Contact</a></li>
                        {/* Placeholder for future blog/careers */}
                        <li><a href="#" style={{ color: '#aaa' }}>Careers</a></li>
                    </ul>
                </div>

                {/* Services Links */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Services</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><a href="#services" style={{ color: '#aaa' }}>Corporate Events</a></li>
                        <li><a href="#services" style={{ color: '#aaa' }}>Tech Events</a></li>
                        <li><a href="#services" style={{ color: '#aaa' }}>Weddings</a></li>
                        <li><a href="#services" style={{ color: '#aaa' }}>Sports Events</a></li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Legal</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><a href="#" style={{ color: '#aaa' }}>Terms & Conditions</a></li>
                        <li><a href="#" style={{ color: '#aaa' }}>Privacy Policy</a></li>
                        <li><a href="#" style={{ color: '#aaa' }}>Cookie Policy</a></li>
                        <li><a href="#" style={{ color: '#aaa' }}>Security</a></li>
                    </ul>
                </div>

                {/* App Downloads */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Get the App</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <a href="#" style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.5rem 1rem',
                            backgroundColor: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '10px' }}><img src="./src/assets/images/app-store-logo.png" width="30px" height="30px" /></span>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: '#aaa' }}>Download on the</div>
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>App Store</div>
                            </div>
                        </a>
                        <a href="#" style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.5rem 1rem',
                            backgroundColor: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '10px' }}><img src="./src/assets/images/play-store-logo.png" width="30px" height="30px" /></span>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: '#aaa' }}>GET IT ON</div>
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

            <div style={{
                maxWidth: '1200px',
                margin: '3rem auto 0',
                padding: '2rem 2rem 0',
                borderTop: '1px solid #222',
                textAlign: 'center',
                color: '#666',
                fontSize: '0.9rem'
            }}>
                &copy; {new Date().getFullYear()} QuickCrew. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
