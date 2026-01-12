import stallHandlingImg from '../assets/images/stall handling.png';
import eventVolunteeringImg from '../assets/images/event-volunteering.png';
import clientAssistantImg from '../assets/images/client-assistent.png';

const Services = () => {
    const services = [
        {
            title: 'Stall Handling',
            description: 'Professional management for your event stalls and pop-up shops.',
            // icon: '🎪',
            image: stallHandlingImg
        },
        {
            title: 'Event Volunteering',
            description: 'Dedicated support staff for corporate and social events.',
            // icon: '🤝',
            image: eventVolunteeringImg
        },
        {
            title: 'Client Assistance',
            description: 'On-demand help for administrative and logistical tasks.',
            // icon: '📋',
            image: clientAssistantImg
        },
        // {
        //     title: 'Shadow Work',
        //     description: 'Assisting professionals by observing and performing routine tasks.',
        //     // icon: '👥',
        //     image: clientAssistantImg // Using placeholder
        // }
    ];

    return (
        <section id="services" className="section-padding" style={{ backgroundColor: 'white' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Services</h2>
                <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-secondary)', margin: '0 auto' }}></div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem'
            }}>
                {services.map((service, index) => (
                    <div key={index} style={{
                        padding: '2.5rem',
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        borderRadius: '8px',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        borderBottom: '4px solid transparent'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
                            e.currentTarget.style.borderColor = 'var(--color-secondary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = 'transparent';
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'white' }}>{service.title}</h3>
                        <p style={{ color: '#ddd' }}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
