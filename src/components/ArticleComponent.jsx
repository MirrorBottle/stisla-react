import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
function ArticleOne({ title, cover, caption, link, buttonText, ButtonComponent }) {
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
                <ButtonComponent link={link} text={buttonText} />
            </div>
        </article>
    )
}

ArticleOne.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    ButtonComponent: PropTypes.element
}

ArticleOne.defaultProps = {
    buttonText: 'Read More',
    ButtonComponent: ({ link, text }) => (
        <div className="article-cta">
            <Link to={link} className="btn btn-primary">{text}</Link>
        </div>
    )
}

function ArticleTwo({ title, cover, caption, link, linkText, withBadge, BadgeComponent, LinkComponent }) {
    return (
        <article class="article article-style-b">
            <div class="article-header">
                <div class="article-image" style={{ backgroundImage: `url(${cover})` }}></div>
                {withBadge && <BadgeComponent />}
            </div>
            <div class="article-details">
                <div class="article-title">
                    <h2><Link to={link}>{title}</Link></h2>
                </div>
                <p>{caption}</p>
                <LinkComponent link={link} linkText={linkText} />
            </div>
        </article>
    )
}

ArticleTwo.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    withBadge: PropTypes.bool,
    BadgeComponent: PropTypes.element,
    LinkComponent: PropTypes.element
}

ArticleTwo.defaultProps = {
    withBadge: false,
    linkText: 'Read More',
    BadgeComponent: () => (
        <div class="article-badge">
            <div class="article-badge-item bg-danger">
                <i class="fas fa-circle"></i> With Badge
            </div>
        </div>
    ),
    LinkComponent: ({ link, linkText }) => (
        <div class="article-cta">
            <Link to={link}>{linkText} <i class="fas fa-chevron-right"></i></Link>
        </div>
    )
}

function ArticleThree({ title, cover, caption, link, date, tag, tagLink, author }) {
    return (
        <article class="article article-style-c">
            <div class="article-header">
                <div class="article-image" style={{ backgroundImage: `url(${cover})` }}></div>
            </div>
            <div class="article-details">&nbsp;
                <div class="article-category">
                    {Array.isArray(tag) ? tag.map(({ name, link }) => (<Link className="mr-2" to={link}>{name}</Link>)) : <Link to={tagLink}>{tag}</Link>}
                    <div class="bullet"></div>
                    <Link to="#">{moment(date).fromNow(true)}</Link></div>
                <div class="article-title">
                    <h2><Link to={link}>{title}</Link></h2>
                </div>
                <p>{caption}</p>
                {author && (
                    <div class="article-user">
                        <img alt={author.name} src={author.profile} />
                        <div class="article-user-details">
                            <div class="user-detail-name">
                                <a href="#">{author.name}</a>
                            </div>
                            <div class="text-job">{author.job}</div>
                        </div>
                    </div>
                )}
            </div>
        </article>
    )
}
ArticleThree.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    link: PropTypes.string,
    date: PropTypes.instanceOf(moment).isRequired,
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            link: PropTypes.string
        }))
    ]).isRequired,
    tagLink: PropTypes.string,
    author: PropTypes.shape({
        name: PropTypes.string,
        profile: PropTypes.string,
        job: PropTypes.string
    })
}
export {
    ArticleOne,
    ArticleTwo,
    ArticleThree
}
