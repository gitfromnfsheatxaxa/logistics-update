import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../Context.jsx';
import NewsComponent from '../../components/NewsComponent/NewsComponent.jsx';
import '../Pages.css';
import './News.css';

const News = () => {
    const { array } = useContext(BlogContext);
    const items = array?.filter((el) => el?.description !== 'Pumps-zegor') ?? [];

    return (
        <div className="news-page">
            <section className="news-hero">
                <div className="news-hero__overlay" />
                <div className="news-hero__inner">
                    <div className="news-hero__label">
                        <span className="news-hero__line" />
                        <span>Our Fleet</span>
                    </div>
                    <h1 className="news-hero__title">
                        Trucks <em>&amp; News</em>
                    </h1>
                    <p className="news-hero__subtitle">
                        Meet the equipment moving your freight and stay up to date with the latest from our team on the road.
                    </p>
                </div>
                <div className="news-hero__cut" />
            </section>

            <section className="news-body">
                {items.length > 0 ? (
                    <div className="news-grid">
                        {items.map((el) => (
                            <NewsComponent key={el?._id} el={el} />
                        ))}
                    </div>
                ) : (
                    <p className="news-empty">No items to display right now.</p>
                )}

                <div className="news-cta">
                    <Link to="/contact" className="news-cta__btn">
                        Contact Us
                        <span className="news-cta__btn-arrow">→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default News;
