import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
 
import '../../css/body/about.css'

class About extends Component {
    render() {
        return (
            <div id="about" className="about">
                <div className="bgimg">  
                    <div className="wrapper">
                        <div className="content">
                            <h1>ABOUT</h1>
                            <h2><span>WE CREATE</span> AWESOME STUFF</h2>
                            <p>
                            We are Creative Team located in Kalura, Bovlandia. Tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <Row>
                                <Col xs={12} lg={4} className="col">
                                    <Row>
                                        <Col xs={3} sm={2} md={1} lg={2}>
                                            <i className="far fa-lightbulb icon"></i>
                                        </Col>
                                        <Col xs={9} sm={10} md={11} lg={10}>
                                            <h3>WEB <span>DEVELOPMENT</span></h3>
                                            <p>
                                                Praesent sodales, quam vitae gravida interdum, ex mi bibendum enim, sit amet tristique mi quam vel odio. Donec non nunc condimentum, hendrerit elit sed, condimentum magna. Suspendisse imperdiet purus vel ornare cursus.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} lg={4} className="col">
                                    <Row>
                                        <Col xs={3} sm={2} md={1} lg={2}>
                                            <i className="fas fa-tshirt icon"></i>
                                        </Col>
                                        <Col xs={9} sm={10} md={11} lg={10}>
                                            <h3>INTERNET <span>MARKETING</span></h3>
                                            <p>
                                            Curabitur et diam elementum, mollis tortor a, malesuada turpis. Vivamus gravida, justo et molestie sollicitudin, erat lorem tempus eros, vel laoreet nibh urna ac nunc, vestibulum neque vitae pellentesque efficitur.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} lg={4} className="col">
                                    <Row>
                                        <Col xs={3} sm={2} md={1} lg={2}>
                                            <i className="fas fa-volume-up icon"></i>
                                        </Col>
                                        <Col xs={9} sm={10} md={11} lg={10}>
                                            <h3>CLIENT <span>SUPPORT</span></h3>
                                            <p>
                                            Sed porta erat vel ipsum maximus, eget maximus est maximus. Maecenas at venenatis nibh, sit amet suscipit odio. In feugiat vehicula dui. In felis enim, maximus a dolor semper efficitur elit euismod magna quis commodo.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
