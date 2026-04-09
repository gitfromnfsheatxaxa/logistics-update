// ServiceCom.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ServiceCom.css';

const services = [
    {
        label: 'Open Deck 01',
        title: 'Flatbed & Stepdeck',
        description:
            'Our core open-deck transport solutions for construction materials, steel, and industrial equipment. Versatile, reliable hauling for loads that require top, side, or rear loading.',
    },
    {
        label: 'Heavy Haul 02',
        title: 'RGN (Lowboy)',
        description:
            'Heavy-haul specialized transport for oversized machinery, construction equipment, and high-clearance loads. Removable goosenecks make loading tall, wide, and heavy cargo seamless.',
    },
    {
        label: 'Enclosed 03',
        title: 'Dry Van & Reefer',
        description:
            'Reliable, secure transport for general freight and temperature-sensitive goods. Refrigerated trailers maintain precise temperatures for perishables, pharmaceuticals, and produce.',
    },
    {
        label: 'Specialized 04',
        title: 'Power Only (P/O)',
        description:
            'Flexible towing services where we provide the tractor for your pre-loaded trailers. Ideal for shippers needing extra capacity without committing to a full equipment lease.',
    },
    {
        label: 'Specialized 05',
        title: 'Amazon Logistics',
        description:
            'Dedicated lanes and specialized delivery fulfillment within the Amazon network. Compliant, on-time performance built for high-volume e-commerce freight.',
    },
];

const ServiceCom = () => {
    const sectionRefs = useRef([]);

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

        sectionRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="svc-page">
            <section className="svc-hero">
                <div className="svc-hero__overlay" />
                <div className="svc-hero__inner">
                    <div className="svc-hero__label">
                        <span className="svc-hero__line" />
                        <span>What We Do</span>
                    </div>
                    <h1 className="svc-hero__title">
                        Our <em>Services</em> Built To Move
                    </h1>
                    <p className="svc-hero__subtitle">
                        From full truckloads to last-mile dispatch — every shipment handled with precision, transparency, and care.
                    </p>
                </div>
                <div className="svc-hero__cut" />
            </section>

            <section className="svc-list">
                {services.map((service, index) => (
                    <article
                        key={service.title}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className={`svc-row ${index % 2 === 1 ? 'svc-row--reverse' : ''}`}
                    >
                        <div className="svc-row__media">
                            <div className="svc-row__image" />
                            <span className="svc-row__corner svc-row__corner--h" />
                            <span className="svc-row__corner svc-row__corner--v" />
                        </div>
                        <div className="svc-row__body">
                            <div className="svc-row__label">
                                <span className="svc-row__line" />
                                <span>{service.label}</span>
                            </div>
                            <h2 className="svc-row__title">{service.title}</h2>
                            <span className="svc-row__bar" />
                            <p className="svc-row__desc">{service.description}</p>
                            <Link to="/contact" className="svc-btn svc-btn--outline">
                                Request a Quote
                                <span className="svc-btn__arrow">→</span>
                            </Link>
                        </div>
                    </article>
                ))}
            </section>

            <section className="svc-cta">
                <h2 className="svc-cta__title">
                    Ready to Move Your <em>Freight</em>?
                </h2>
                <p className="svc-cta__text">
                    Talk to our dispatch team and get a tailored solution for your lane.
                </p>
                <Link to="/contact" className="svc-btn svc-btn--primary">
                    Contact Us
                    <span className="svc-btn__arrow">→</span>
                </Link>
            </section>
        </div>
    );
};

export default ServiceCom;
