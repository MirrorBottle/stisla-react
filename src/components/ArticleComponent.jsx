import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';


const ArticleOne = ({ title, cover, caption, link, buttonText }) => {
    return (
        <article className="article">
            <div className="article-header">
                <div className="article-image" style={{ backgroundImage: `url(${cover})` }}>
                </div>
                <div className="article-title">
                    <h2>
                        <Link to={link}>{title}</Link>
                    </h2>
                </div>
            </div>
            <div className="article-details">
                <p>{caption}</p>
                <div className="article-cta">
                    <Link to={link} className="btn btn-primary">{buttonText}</Link>
                </div>
            </div>
        </article>
    )
}
ArticleOne.defaultProps = {
    buttonText: 'Read More'
}

const ArticleTwo = ({ title, cover, caption, link, linkText, withBadge, badgeData }) => {
    return (
        <article className="article article-style-b">
            <div className="article-header">
                <div className="article-image" style={{ backgroundImage: `url(${cover})` }}></div>
                {withBadge && (
                    <div className="article-badge">
                        <div className={`article-badge-item bg-${badgeData.color}`}>
                            <i className={badgeData.icon}></i> {badgeData.text}
                        </div>
                    </div>
                )}
            </div>
            <div className="article-details">
                <div className="article-title">
                    <h2><Link to={link}>{title}</Link></h2>
                </div>
                <p>{caption}</p>
                <div className="article-cta">
                    <Link to={link}>{linkText} <i className="fas fa-chevron-right"></i></Link>
                </div>
            </div>
        </article>
    )
}
ArticleTwo.defaultProps = {
    badgeData: { text: 'This is a Badge', color: 'danger', icon: 'far fa-fire' },
    withBadge: false,
    linkText: 'Read More',
}

const ArticleThree = ({ title, cover, caption, link, date, tag, author }) => {
    return (
        <article className="article article-style-c">
            <div className="article-header">
                <div className="article-image" style={{ backgroundImage: `url(${cover})` }}></div>
            </div>
            <div className="article-details">&nbsp;
                <div className="article-category">
                    {Array.isArray(tag) ? tag.map(({ name, link }) => (<Link className="mr-2" to={link}>{name}</Link>)) : <Link to={tag.link}>{tag.name}</Link>}
                    <div className="bullet"></div>
                    <Link to="#">{moment(date).fromNow(true)}</Link></div>
                <div className="article-title">
                    <h2><Link to={link}>{title}</Link></h2>
                </div>
                <p>{caption}</p>
                {author && (
                    <div className="article-user">
                        <img alt={author.name} src={author.profile} />
                        <div className="article-user-details">
                            <div className="user-detail-name">
                                <p>{author.name}</p>
                            </div>
                            <div className="text-job">{author.job}</div>
                        </div>
                    </div>
                )}
            </div>
        </article>
    )
}
export {
    ArticleOne,
    ArticleTwo,
    ArticleThree
}
