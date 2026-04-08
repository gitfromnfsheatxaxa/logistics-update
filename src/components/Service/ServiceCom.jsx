// ServiceCom.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ServiceCom.css';

const services = [
    {
        label: 'Service 01',
        title: 'Full Truckload (FTL) Shipping',
        description:
            'Dedicated trailer space for high-volume freight. Direct point-to-point delivery, faster transit times, and reduced handling for the safety of your cargo.',
    },
    {
        label: 'Service 02',
        title: 'Less-than-Truckload (LTL) Shipping',
        description:
            'Cost-effective shipping for smaller loads. We consolidate freight efficiently so you only pay for the space you need without sacrificing reliability.',
    },
    {
        label: 'Service 03',
        title: 'Refrigerated Transport',
        description:
            'Temperature-controlled trailers for perishables, pharmaceuticals, and sensitive goods. Continuous monitoring keeps your cargo within spec from pickup to delivery.',
    },
    {
        label: 'Service 04',
        title: 'Expedited Freight',
        description:
            'Time-critical shipments handled with urgency. Team drivers, priority routing, and 24/7 dispatch ensure your freight arrives when it absolutely has to.',
    },
    {
        label: 'Service 05',
        title: 'Logistics & Supply Chain Management',
        description:
            'End-to-end coordination across carriers, warehouses, and lanes. We optimize routes, reduce dwell time, and give you visibility at every stage of the chain.',
    },
    {
        label: 'Service 06',
        title: 'Dispatch Services',
        description:
            'Professional dispatching for owner-operators and small fleets. Load matching, route planning, and constant driver support to keep wheels turning and revenue growing.',
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
