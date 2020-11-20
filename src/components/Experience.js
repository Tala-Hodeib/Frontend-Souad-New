import React from 'react';
import Carousel from 'react-elastic-carousel';
// import Item from "./ExpItem";
import './Experience.css'

function slider() {
    return (
        <div className="main-wrapper">
            <h1 id="Experience">My Experience</h1>
            <div className="exp-slider">
                <Carousel
                    verticalMode
                    easing="cubic-bezier(0.110,1,1.000,0.210)"
                    tiltEasing="cubic-bezier(1,0.15,0.55,1.54)"
                    transitionMs={500}
                >
                    <div className="card">
                        <div className="card-avatar">
                            <img src="images/l1.jpeg" alt="company logo"></img>
                        </div>
                        <div className="card-details">
                            <div className="name">Quality Assurance Officer</div>
                            <div className="occupation">Nymgo</div>

                            <div className="card-about">
                                <div className="item">
                                    <span className="value">2015</span>
                                    <span className="separator">-</span>
                                    <span className="value">2019</span>
                                </div>
                            </div>
                            <div className="skills">
                                <ul className="value">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-avatar">
                            <img src="images/l2.jpeg" alt="company logo"></img>
                        </div>
                        <div className="card-details">
                            <div className="name">Account Manager</div>
                            <div className="occupation">Aramco</div>

                            <div className="card-about">
                                <div className="item">
                                    <span className="value">2015</span>
                                    <span className="separator">-</span>
                                    <span className="value">2019</span>
                                </div>
                            </div>
                            <div className="skills">
                                <ul className="value">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-avatar">
                            <img src="images/l3.jpeg" alt="company logo"></img>
                        </div>
                        <div className="card-details">
                            <div className="name">Consultant</div>
                            <div className="occupation">Miracle</div>

                            <div className="card-about">
                                <div className="item">
                                    <span className="value">2015</span>
                                    <span className="separator">-</span>
                                    <span className="value">2019</span>
                                </div>
                            </div>
                            <div className="skills">
                                <ul className="value">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
export default slider