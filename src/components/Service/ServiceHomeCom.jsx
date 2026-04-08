import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCom.css';

const previewServices = [
    {
        number: '01',
        title: 'Full Truckload',
        description: 'Dedicated trailers for high-volume freight with direct, point-to-point delivery.',
    },
    {
        number: '02',
        title: 'Refrigerated Transport',
        description: 'Temperature-controlled shipping for perishables, pharma, and sensitive cargo.',
    },
    {
        number: '03',
        title: 'Expedited Freight',
        description: 'Priority routing and team drivers for time-critical, must-arrive shipments.',
    },
    {
        number: '04',
        title: 'Dispatch Services',
        description: 'Load matching and route planning for owner-operators and small fleets.',
    },
];

const ServiceHomeCom = () => {
    return (
        <section className="svch">
            <div className="svch__bg" />
            <div className="svch__inner">
                <div className="svch__header">
                    <div className="svch__label">
                        <span className="svch__line" />
                        <span>What We Provide</span>
                    </div>
                    <h2 className="svch__title">
                        Our <em>Services</em>
                    </h2>
                    <p className="svch__subtitle">
                        Comprehensive trucking and logistics solutions, built around your business.
                    </p>
                </div>

                <div className="svch__grid">
                    {previewServices.map((service) => (
                        <article key={service.number} className="svch__card">
                            <span className="svch__num">{service.number}</span>
                            <h3 className="svch__cardTitle">{service.title}</h3>
                            <p className="svch__cardDesc">{service.description}</p>
                        </article>
                    ))}
                </div>

                <div className="svch__cta">
                    <Link to="/services" className="svc-btn svc-btn--primary">
                        View All Services
                        <span className="svc-btn__arrow">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceHomeCom;
