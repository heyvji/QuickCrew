import React from 'react';
import AboutSection from '../components/About us'; // Note the lowercase 'us' in filename

const About = () => {
    return (
        <div className="page-container" style={{ paddingTop: '80px' }}>
            <AboutSection />
            <section className="about-details" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3>Founder</h3>
                <p>Founder of QuickCrew</p>
                {/* Add more specific about page content here */}
            </section>
        </div>
    );
};

export default About;
