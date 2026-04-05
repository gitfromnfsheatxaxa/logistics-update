import React, { useEffect, useRef } from 'react';
import './AboutCom.css';
import Image1 from '../../../public/photo_2024-11-11_18-31-04.webp';
import Image2 from '../../../public/IMG_4627.webp';
import Image3 from '../../../public/photo_2024-11-12_11-57-03.webp';
import Image4 from '../../../public/IMG_4610.webp';

const sections = [
    {
        label: 'Who We Are',
        title: 'Welcome to MO GLOBE TRUCKING',
        img: Image1,
        description: `At MO GLOBE TRUCKING, we understand that reliable freight transportation is essential to the success of your business. With years of experience in the trucking and logistics industry, our dedicated team works tirelessly to provide tailored, cost-effective solutions to meet your unique shipping needs.\n\nWe pride ourselves on our ability to offer seamless, comprehensive services that simplify your logistics — ensuring your freight arrives on time, every time. Trust us to be your reliable partner in optimizing your transportation operations.`,
        stats: [
            { number: '15+', label: 'Years in Business' },
            { number: '500+', label: 'Trucks in Fleet' },
            { number: '48', label: 'States Covered' },
        ],
    },
    {
        label: 'Our Edge',
        title: 'Why Choose Us?',
        img: Image2,
        description: `MO GLOBE TRUCKING stands out for its unwavering commitment to dependable service and exceptional customer care. We specialize in a range of freight transportation services including FTL, LTL, refrigerated transport, and expedited freight.`,
        features: [
            { icon: '⚡', title: 'Dependable Service', text: 'Timely deliveries are critical — we ensure your freight arrives on schedule, every time.' },
            { icon: '👷', title: 'Experienced Professionals', text: 'Skilled drivers and logistics experts trained to handle all types of cargo with care.' },
            { icon: '📡', title: 'Advanced Technology', text: 'Real-time 24/7 tracking so you\'re always informed about your shipment\'s status.' },
            { icon: '🔧', title: 'Comprehensive Solutions', text: 'From long-haul trucking to temperature-sensitive cargo and expedited freight.' },
        ],
    },
    {
        label: 'What We Offer',
        title: 'Our Services Include',
        img: Image4,
        services: [
            { title: 'Full Truckload (FTL) & LTL Shipping', text: 'Flexible solutions for shipments of all sizes — cost-effective without compromising quality.' },
            { title: 'Refrigerated Transport', text: 'Specialized for temperature-sensitive cargo, ensuring safe delivery of perishable goods.' },
            { title: 'Expedited Freight', text: 'For time-critical deliveries requiring urgent attention — quick, reliable, on deadline.' },
            { title: 'Logistics & Supply Chain', text: 'End-to-end solutions that optimize your supply chain and reduce operational costs.' },
        ],
    },
    {
        label: 'Get Started',
        title: 'Ready to Move Forward?',
        img: Image3,
        description: `At MO GLOBE TRUCKING, we are committed to being your trusted partner in freight transportation. Whether you're moving large shipments or need specialized logistics services, we offer flexible, cost-effective solutions that meet your needs.\n\nContact us today for a free quote and let us take the hassle out of shipping so you can focus on growing your business.`,
        cta: true,
    },
];

const AboutCom = () => {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('about-section--visible');
                    }
                });
            },
            { threshold: 0.12 }
        );
        sectionRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page">
            {/* Page Hero Banner */}
            <div className="about-hero">
                <div className="about-hero__overlay" />
                <div className="about-hero__content">
                    <span className="about-hero__label">
                        <span className="about-hero__label-line" />
                        Our Story
                    </span>
                    <h1 className="about-hero__title">
                        Built on <span className="about-hero__accent">Trust</span>,<br />
                        Driven by Results.
                    </h1>
                </div>
                <div className="about-hero__diagonal" />
            </div>

            {/* Content Sections */}
            <div className="about-sections">
                {sections.map((sec, i) => (
                    <div
                        key={i}
                        className={`about-section about-section--${i % 2 === 0 ? 'normal' : 'reverse'}`}
                        ref={(el) => (sectionRefs.current[i] = el)}
                    >
                        {/* Image column */}
                        <div className="about-section__img-wrap">
                            <img src={sec.img} alt={sec.title} className="about-section__img" />
                            <div className="about-section__img-overlay" />
                            {/* Gold corner accent */}
                            <div className="about-section__img-corner" />
                        </div>

                        {/* Text column */}
                        <div className="about-section__body">
                            <span className="about-section__label">
                                <span className="about-section__label-line" />
                                {sec.label}
                            </span>

                            <h2 className="about-section__title">{sec.title}</h2>
                            <div className="about-section__gold-bar" />

                            {sec.description && (
                                <p className="about-section__desc">{sec.description}</p>
                            )}

                            {/* Stats row (section 0) */}
                            {sec.stats && (
                                <div className="about-stats">
                                    {sec.stats.map((s, si) => (
                                        <div key={si} className="about-stat">
                                            <span className="about-stat__number">{s.number}</span>
                                            <span className="about-stat__label">{s.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Feature list (section 1) */}
                            {sec.features && (
                                <ul className="about-features">
                                    {sec.features.map((f, fi) => (
                                        <li key={fi} className="about-feature">
                                            <span className="about-feature__icon">{f.icon}</span>
                                            <div>
                                                <strong className="about-feature__title">{f.title}</strong>
                                                <p className="about-feature__text">{f.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Services list (section 2) */}
                            {sec.services && (
                                <ul className="about-services">
                                    {sec.services.map((sv, si) => (
                                        <li key={si} className="about-service-item">
                                            <span className="about-service-item__num">0{si + 1}</span>
                                            <div>
                                                <strong className="about-service-item__title">{sv.title}</strong>
                                                <p className="about-service-item__text">{sv.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* CTA (section 3) */}
                            {sec.cta && (
                                <div className="about-cta-row">
                                    <a href="/contact" className="about-cta-btn about-cta-btn--primary">
                                        Get a Free Quote
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2.5"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                    <a href="/services" className="about-cta-btn about-cta-btn--outline">
                                        Our Services
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutCom;