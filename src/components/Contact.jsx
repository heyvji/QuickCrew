import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
                setIsSubmitted(true);
            } else {
                alert("Failed to send message: " + (data.error || "Unknown error"));
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section id="contact" className="section-padding bg-dark-blue text-white">
            <div className="text-center mb-5">
                <h2 className="Section_title mb-4 text-white">Contact Us</h2>
                <div className="separator-gold"></div>
            </div>

            <div className="glass-card">
                {isSubmitted ? (
                    <div className="text-center p-4">
                        <h3 className="text-2xl mb-6 text-white">We will get back to you soon!</h3>
                        <button
                            className="btn-primary"
                            onClick={() => setIsSubmitted(false)}
                            style={{ minWidth: '200px' }}
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form className="grid gap-6" onSubmit={handleSubmit}>
                        <div className="contact-grid">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="form-input"
                            />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="form-input"
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="form-input"
                        />
                        <textarea
                            rows="5"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="form-input"
                        ></textarea>
                        <button type="submit" className="btn-primary" style={{ justifySelf: 'start', minWidth: '200px' }}>Send Message</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
