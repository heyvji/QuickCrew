import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div className="section-padding grid-responsive">

                {/* Brand Column */}
                <div style={{ gridColumn: '1 / -1' }}>
                    <div className="flex items-center">
                        <span style={{ fontSize: '1rem', fontWeight: 'bold', padding: '5px 15px', marginRight: '10px' }}><img src="./src/assets/images/company-logo.png" alt="Company Logo" width="80" height="80" /></span>
                        <span className="font-heading text-lg">QuickCrew</span>
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
                    <ul className="flex flex-col gap-1">
                        <li><a href="#home" className="footer-link">Home</a></li>
                        <li><a href="#about" className="footer-link">About Us</a></li>
                        <li><a href="#vision" className="footer-link">Our Vision</a></li>
                        <li><a href="#contact" className="footer-link">Contact</a></li>
                        {/* Placeholder for future blog/careers */}
                        <li><a href="#" className="footer-link">Careers</a></li>
                    </ul>
                </div>

                {/* Services Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
                    <ul className="flex flex-col gap-1">
                        <li><a href="#services" className="footer-link">Corporate Events</a></li>
                        <li><a href="#services" className="footer-link">Tech Events</a></li>
                        <li><a href="#services" className="footer-link">Weddings</a></li>
                        <li><a href="#services" className="footer-link">Sports Events</a></li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-white">Terms and Policies</h3>
                    <ul className="flex flex-col gap-1">
                        <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                        <li><a href="#" className="footer-link">Community Guidelines</a></li>
                        <li><a href="#" className="footer-link">Privacy Policy</a></li>
                        <li><a href="#" className="footer-link">Cookie Policy</a></li>
                        <li><a href="#" className="footer-link">Security</a></li>
                    </ul>
                </div>

                {/* {Social Links} */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-white">Social Links</h3>
                    <ul className="flex flex-col gap-1">
                        <li><a href="https://www.facebook.com/real.quickcrew/" className="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://x.com/realquickcrew" className="footer-link" target="_blank" rel="noopener noreferrer">X</a></li>
                        <li><a href="https://www.instagram.com/real.quickcrew/" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/realquickcrew/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>

                {/* App Downloads */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-white">Get the App</h3>
                    <div className="flex flex-col gap-2">
                        <a href="https://apps.apple.com/in/app/quickcrew/id6445201916" className="store-badge" target="_blank" rel="noopener noreferrer">
                            <span style={{ fontSize: '1.5rem', marginRight: '10px' }}><img src="./src/assets/images/app-store-logo.png" width="30px" height="30px" /></span>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: '#aaa' }}>Download on the</div>
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>App Store</div>
                            </div>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.quickcrew" className="store-badge" target="_blank" rel="noopener noreferrer">
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
