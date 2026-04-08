import React from 'react';
import { Link } from 'react-router-dom';
import HomeCom from '../../components/HomeCom/HomeCom.jsx';
import AboutCom from '../../components/AboutCom/AbourtCom.jsx';
import ServiceHomeCom from '../../components/Service/ServiceHomeCom.jsx';
import JobOfferCom from '../../components/JobCom/JobOfferCom.jsx';
import ContactCom from '../../components/ContactCom/ContactCom.jsx';
import '../Pages.css';

const Home = () => {
    return (
        <div className="home-page">
            <HomeCom />

            <section className="home-intro">
                <div className="home-intro__inner">
                    <div className="home-intro__label">
                        <span className="home-intro__line" />
                        <span>Who We Are</span>
                    </div>
                    <h2 className="home-intro__title">
                        Your Trusted <em>Freight</em> Partner
                    </h2>
                    <p className="home-intro__text">
                        At MO GLOBE TRUCKING, we specialize in providing reliable, efficient, and cost-effective
                        freight solutions that keep your business moving forward. From local deliveries to long-haul
                        transport, our experienced team ensures timely and secure delivery of your goods, no matter
                        the distance. Let us take the complexity out of logistics so you can focus on what matters
                        most — growing your business.
                    </p>
                    <Link to="/apply" className="home-intro__btn">
                        Become a Driver
                        <span className="home-intro__btn-arrow">→</span>
                    </Link>
                </div>
            </section>

            <ServiceHomeCom />
            <JobOfferCom />
            <AboutCom />
            <ContactCom />
        </div>
    );
};

export default Home;
