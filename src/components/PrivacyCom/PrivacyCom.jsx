import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyCom.css';

const sections = [
    {
        label: 'Section 01',
        title: 'Information We Collect',
        body: 'We collect information you provide directly — such as your name, email address, phone number, and company details — when you contact us, request a quote, or apply for a position. We also collect limited technical data (browser type, device, pages visited) to improve our services.',
    },
    {
        label: 'Section 02',
        title: 'How We Use Your Information',
        body: 'Your information is used solely to respond to inquiries, process service requests, coordinate freight and dispatch operations, and improve customer experience. We never sell your personal information.',
    },
    {
        label: 'Section 03',
        title: 'Mobile Information & SMS',
        body: 'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All categories above exclude text messaging originator opt-in data and consent — this information will not be shared with any third parties under any circumstances.',
    },
    {
        label: 'Section 04',
        title: 'Data Security',
        body: 'We implement industry-standard safeguards — encryption, access controls, and secure storage — to protect your information from unauthorized access, alteration, or disclosure.',
    },
    {
        label: 'Section 05',
        title: 'Your Rights',
        body: 'You may request access to, correction of, or deletion of your personal information at any time. Contact us using the details below and we will respond promptly.',
    },
];

const PrivacyPolicy = () => {
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="pp-page">
            <section className="pp-hero">
                <div className="pp-hero__overlay" />
                <div className="pp-hero__inner">
                    <div className="pp-hero__label">
                        <span className="pp-hero__line" />
                        <span>Legal</span>
                    </div>
                    <h1 className="pp-hero__title">
                        Privacy <em>&amp; Policy</em>
                    </h1>
                    <p className="pp-hero__subtitle">
                        How we collect, use, and protect your information — written plainly so you always know where you stand.
                    </p>
                </div>
                <div className="pp-hero__cut" />
            </section>

            <section className="pp-body">
                <div className="pp-meta">
                    <span className="pp-meta__bar" />
                    <span>Last Updated: January 2026</span>
                </div>

                <div className="pp-sections">
                    {sections.map((section, index) => (
                        <article
                            key={section.title}
                            ref={(el) => (refs.current[index] = el)}
                            className="pp-section"
                        >
                            <div className="pp-section__label">
                                <span className="pp-section__line" />
                                <span>{section.label}</span>
                            </div>
                            <h2 className="pp-section__title">{section.title}</h2>
                            <span className="pp-section__bar" />
                            <p className="pp-section__text">{section.body}</p>
                        </article>
                    ))}
                </div>

                <div className="pp-contact">
                    <h3 className="pp-contact__title">
                        Questions? <em>Get In Touch</em>
                    </h3>
                    <p className="pp-contact__text">
                        For privacy-related inquiries or to exercise your data rights, reach out to us:
                    </p>
                    <div className="pp-contact__list">
                        <a href="mailto:support@moglobetrucking.com" className="pp-contact__item">
                            <span className="pp-contact__label">Email</span>
                            <span className="pp-contact__value">support@moglobetrucking.com</span>
                        </a>
                        <a href="tel:+12679340439" className="pp-contact__item">
                            <span className="pp-contact__label">Phone</span>
                            <span className="pp-contact__value">+1 (267) 934-0439</span>
                        </a>
                    </div>
                    <Link to="/contact" className="pp-btn pp-btn--primary">
                        Contact Us
                        <span className="pp-btn__arrow">→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
