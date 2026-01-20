import React from 'react';

const Services = () => {
    const serviceDetails = [
        {
            category: 'Corporate',
            jobs: ['Stall Management', 'Registration Desk', 'Ushering', 'Crowd Management']
        },
        {
            category: 'Tech',
            jobs: ['Technical Support', 'AV Assistance', 'Setup Crew']
        },
        {
            category: 'Promotional',
            jobs: ['Flyer Distribution', 'Product Demo', 'Brand Ambassadors']
        },
        {
            category: 'Weddings',
            jobs: ['Hospitality', 'Guest Management', 'Logistics Support']
        },
        {
            category: 'Movie Casting',
            jobs: ['Background Artists', 'Extras', 'Crowd scenes']
        },
        {
            category: 'Parties',
            jobs: ['Decor Assistance', 'Serving', 'Cleanup']
        }
    ];

    return (
        <div className="page-container" style={{ paddingTop: '150px', paddingBottom: '3rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Detailed Services</h1>
            <div className="services-list" style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '2rem' }}>
                {serviceDetails.map((service, index) => (
                    <div key={index} style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px' }}>
                        <h2 style={{ color: 'var(--color-primary)' }}>{service.category}</h2>
                        <ul>
                            {service.jobs.map((job, jIndex) => (
                                <li key={jIndex}>{job}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
