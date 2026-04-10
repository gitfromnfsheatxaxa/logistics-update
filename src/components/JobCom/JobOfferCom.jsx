import React from 'react';
import { Link } from 'react-router-dom';
import shipperIcon from '../../../public/Icon (3).webp';
import driverIcon from '../../../public/Icon (4).webp';

const offers = [
    {
        to: '/contact',
        role: 'Shipper',
        tag: 'Ship With Us',
        icon: shipperIcon,
        alt: 'Shipper Icon',
        color: 'shipper',
        perks: ['Manage inventory & schedules', 'End-to-end logistics support', 'Real-time shipment tracking'],
        desc: 'Coordinate and oversee the logistics of transporting goods. Handle shipment schedules and ensure freight reaches its destination safely and on time.',
        cta: 'Get a Quote →',
    },
    {
        to: '/apply',
        role: 'Driver',
        tag: 'Apply Now',
        icon: driverIcon,
        alt: 'Driver Icon',
        color: 'driver',
        perks: ['Competitive pay & bonuses', 'Consistent long-haul miles', '24/7 dispatch support'],
        desc: 'Safely transport freight across various locations. Keep cargo secure, follow all regulations, and deliver excellent service on every run.',
        cta: 'Apply Now →',
    },
];

const JobOfferCom = () => {
    return (
        <div className="job-offers">

            {/* Section header */}
            <div className="job-offers__header">
                <span className="job-offers__label">
                    <span className="job-offers__label-line" />
                    Opportunities
                </span>
                <h2 className="job-offers__title">
                    Two Ways to <span className="job-offers__accent">Work With Us</span>
                </h2>
                <div className="job-offers__bar" />
                <p className="job-offers__sub">
                    Whether you move freight or drive it — we have a place for you.
                </p>
            </div>

            {/* Cards */}
            <div className="job-offers__grid">
                {offers.map((offer) => (
                    <div key={offer.role} className={`job-offer-card job-offer-card--${offer.color}`}>
                        {/* Top gold tag */}
                        <div className="job-offer-card__tag">{offer.tag}</div>

                        {/* Icon */}
                        <div className="job-offer-card__icon-wrap">
                            <div className="job-offer-card-circle">
                            </div>
                        </div>

                        {/* Role title */}
                        <h3 className="job-offer-card__role">{offer.role}</h3>
                        <div className="job-offer-card__bar" />

                        {/* Description */}
                        <p className="job-offer-card__desc">{offer.desc}</p>

                        {/* Perks */}
                        <ul className="job-offer-card__perks">
                            {offer.perks.map((p, i) => (
                                <li key={i} className="job-offer-card__perk">
                                    <span className="job-offer-card__check">✓</span>
                                    {p}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <Link to={offer.to} className="job-offer-card__cta">
                            {offer.cta}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobOfferCom;