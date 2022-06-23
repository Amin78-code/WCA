import React, { Component } from 'react'

import FImg1 from '../../assets/female1.jpg'
import FImg2 from '../../assets/female2.jpg'
import MImg1 from '../../assets/male1.jpg'
import MImg2 from '../../assets/male2.jpg'

import '../../css/body/team.css'

class Team extends Component {
    render() {
        return (
            <div id="team" className="team">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1>Team</h1>
                            <h2><span>WHO </span>WE ARE</h2>
                            <p>
                            Our success depends on the strength of our team. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation.
                            </p>
                            <div className="outer-box">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={MImg2} alt="female"/>
                                    </div>
                                    <div className="sub-content">
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                                <h3>MIKE JOHNSON</h3>
                                <h4>CEO & Founder</h4>
                            </div>
                            <div className="outer-box">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={FImg2} alt="female"/>
                                    </div>
                                    <div className="sub-content">
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                                <h3>JESSICA SPECTER</h3>
                                <h4>Creative Director</h4>
                            </div>
                            <div className="outer-box">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={MImg1} alt="female"/>
                                    </div>
                                    <div className="sub-content">
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                                <h3>ANDREW MILES</h3>
                                <h4>Developer</h4>
                            </div>
                            <div className="outer-box">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={FImg1} alt="female"/>
                                    </div>
                                    <div className="sub-content">
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                                <h3>LYNDA SMITH</h3>
                                <h4>Programmer</h4>
                            </div>
                            <h1 className="bottom-h">WE WANT TO CHANGE <br/> PEOPLES LIVES</h1>
                            <p className="bottom-p">
                            Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team
