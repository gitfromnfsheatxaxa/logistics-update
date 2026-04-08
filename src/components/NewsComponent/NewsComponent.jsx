import React from 'react';
import './NewsComponent.css';

const NewsComponent = ({ el }) => {
    const date = el?.createdAt ? el.createdAt.slice(0, 10) : '';

    return (
        <article className="nws-card">
            <div className="nws-card__media">
                <img src={el?.image} alt={el?.name} className="nws-card__image" />
                <span className="nws-card__corner nws-card__corner--h" />
                <span className="nws-card__corner nws-card__corner--v" />
                {date && (
                    <div className="nws-card__date">
                        <span className="nws-card__date-day">{date.slice(8, 10)}</span>
                        <span className="nws-card__date-month">{date.slice(0, 7)}</span>
                    </div>
                )}
            </div>

            <div className="nws-card__body">
                <div className="nws-card__label">
                    <span className="nws-card__line" />
                    <span>News</span>
                </div>
                <h3 className="nws-card__title">{el?.name}</h3>
                <span className="nws-card__bar" />
                <p className="nws-card__desc">{el?.description}</p>
                {date && (
                    <p className="nws-card__meta">Published {date}</p>
                )}
            </div>
        </article>
    );
};

export default NewsComponent;
