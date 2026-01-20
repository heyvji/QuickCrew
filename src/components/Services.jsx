import stallHandlingImg from '../assets/images/stall handling.png';
import eventVolunteeringImg from '../assets/images/event-volunteering.png';
import clientAssistantImg from '../assets/images/client-assistent.png';

const Services = () => {
    const services = [
        {
            title: 'Corporate',
            description: 'Professional management for your event stalls and pop-up shops.',
            icon: '🎪',
            // image: stallHandlingImg
        },
        {
            title: 'Tech',
            description: 'Dedicated support staff for corporate and social events.',
            icon: '🤝',
            // image: eventVolunteeringImg
        },
        {
            title: 'Promotional',
            description: 'On-demand help for administrative and logistical tasks.',
            icon: '📋',
            // image: clientAssistantImg
        },
        {
            title: 'Weddings',
            description: 'Assisting professionals by observing and performing routine tasks.',
            icon: '👥',
            // image: clientAssistantImg
        },
        {
            title: "Movie casting",
            description: "Junior artists for background or side roles in movie/ads",
            icon: '🎬',
            // image: 
        },
        {
            title: "Parties",
            description: "Helping organize parties and events",
            icon: '🎉',
            // image: 
        }
    ];

    return (
        <section id="services" className="section-padding" style={{ backgroundColor: 'white' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Services</h2>
                <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-secondary)', margin: '0 auto' }}></div>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="card-hover" style={{
                        padding: '2.5rem',
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        borderBottom: '4px solid transparent'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-secondary)';
                        }}
                        onMouseLeave={(e) => {
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
