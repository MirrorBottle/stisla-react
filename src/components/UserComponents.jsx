import React from 'react'
import 'bootstrap-social/bootstrap-social.css';
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function KFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num)
}

function UserCardOne({ id, name, profile, job, bio, facebook, github, instagram, twitter, followAction }) {
    return (
        <div className="card author-box card-primary">
            <div className="card-body">
                <div className="author-box-left">
                    <img alt="profile" src={require(`assets/img/avatar/${profile}`)} className="rounded-circle author-box-picture" />
                    <div className="clearfix"></div>
                    <a href="#" className="btn btn-primary mt-3 follow-btn" onClick={() => followAction(id)}>Follow</a>
                </div>
                <div className="author-box-details">
                    <div className="author-box-name">
                        <a href="#">{name}</a>
                    </div>
                    <div className="author-box-job">{job}</div>
                    <div className="author-box-description">
                        <p>{bio}</p>
                    </div>
                    <div className="mb-2 mt-3"><div className="text-small font-weight-bold">Follow Hasan On</div></div>
                    <a href={`https://www.facebook.com/${facebook}`} className="btn btn-social-icon mr-1 btn-facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href={`https://www.twitter.com/${twitter}`} className="btn btn-social-icon mr-1 btn-twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`https://www.github.com/${github}`} className="btn   btn-social-icon mr-1 btn-github">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={`https://www.instagram.com/${instagram}`} className="btn btn-social-icon mr-1 btn-instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <div className="w-100 d-sm-none"></div>
                    <div className="float-right mt-sm-0 mt-3">
                        <a href="#" className="btn">View Posts <i className="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
UserCardOne.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    profile: PropTypes.string,
    job: PropTypes.string,
    bio: PropTypes.string,
    facebook: PropTypes.string,
    github: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    followAction: PropTypes.func
}
UserCardOne.defaultProps = {
    id: 0,
    name: '',
    profile: '',
    job: '',
    bio: '',
    facebook: '',
    github: '',
    instagram: '',
    twitter: '',
    followAction: (id) => alert('following')
}
function UserCardTwo({ name, profile, job, email, bio, total_posts, total_followers, total_followings, instagram, github, facebook, twitter }) {
    return (
        <div className="card profile-widget">
            <div className="profile-widget-header">
                <img alt="profile" src={require(`assets/img/avatar/${profile}`)} className="rounded-circle profile-widget-picture" />
                <div className="profile-widget-items">
                    <div className="profile-widget-item">
                        <div className="profile-widget-item-label">Posts</div>
                        <div className="profile-widget-item-value">{KFormatter(total_posts)}</div>
                    </div>
                    <div className="profile-widget-item">
                        <div className="profile-widget-item-label">Followers</div>
                        <div className="profile-widget-item-value">{KFormatter(total_followers)}</div>
                    </div>
                    <div className="profile-widget-item">
                        <div className="profile-widget-item-label">Following</div>
                        <div className="profile-widget-item-value">{KFormatter(total_followings)}</div>
                    </div>
                </div>
            </div>
            <div className="profile-widget-description pb-0">
                <div className="profile-widget-name">{name}
                    <div className="text-muted d-inline font-weight-normal"><div className="slash"></div> {job}</div></div>
                <div dangerouslySetInnerHTML={{ __html: bio }} />
            </div>
            <div className="card-footer text-center pt-0">
                <div className="font-weight-bold mb-2 text-small">Follow Hasan On</div>
                <a href={`https://www.facebook.com/${facebook}`} className="btn btn-social-icon mr-1 btn-facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href={`https://www.twitter.com/${twitter}`} className="btn btn-social-icon mr-1 btn-twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={`https://www.github.com/${github}`} className="btn btn-social-icon mr-1 btn-github">
                    <i className="fab fa-github"></i>
                </a>
                <a href={`https://www.instagram.com/${instagram}`} className="btn btn-social-icon mr-1 btn-instagram">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    )
}
UserCardTwo.propTypes = {
    name: PropTypes.string,
    profile: PropTypes.string,
    job: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
    total_posts: PropTypes.number,
    total_followers: PropTypes.number,
    total_followings: PropTypes.number,
    facebook: PropTypes.string,
    github: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
}

function Users({ data, actionText, actionCallback, dataToShow, dataToScroll }) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: dataToShow,
        slidesToScroll: dataToScroll
    };
    return (
        <div className="card card-danger">
            <div className="card-header">
                <h4>Users</h4>
                <div className="card-header-action">
                    <a href="#" className="btn btn-danger btn-icon icon-right">View All <i className="fas fa-chevron-right"></i></a>
                </div>
            </div>
            <div className="card-body">
                <Slider {...settings}>
                    {data.map(d => (
                        <div className="user-item">
                            <img alt="profile" src={require(`assets/img/avatar/${d.profile}`)} className="img-fluid" />
                            <div className="user-details">
                                <div className="user-name">{d.name}</div>
                                <div className="text-job text-muted">{d.job}</div>
                                <div className="user-cta">
                                    <button className="btn btn-primary follow-btn" onClick={() => actionCallback(d)}>{actionText}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export {
    UserCardOne,
    UserCardTwo,
    Users
}
