import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'

import '../../css/body/howWeWork.css'

class HowWeWork extends Component {
    render() {
        return (
            <div id="hww" className="how-we-work">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1><span>HOW</span> WE WORK</h1>
                            <p className="top">
                            Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras
                            finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna
                             vel nunc. Donec nec eros rhoncus.
                            </p>
                            <Row>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <div className="circle">
                                    <i className="far fa-eye icon"></i>
                                    </div>
                                    <h2>AWESOME</h2>
                                    <div className="h-border"></div>
                                    <p>
                                    Duis aute irure fermentum in reprehenderit in voluptate velit esse cillum dolore massa fugiat eu sollicitudin.
                                    </p>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <div className="circle">
                                    <i className="far fa-thumbs-up icon"></i>
                                    </div>
                                    <h2>INNOVATIVE</h2>
                                    <div className="h-border"></div>
                                    <p>
                                    Duis aute irure fermentum in reprehenderit in voluptate velit esse cillum dolore massa fugiat eu sollicitudin.
                                    </p>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <div className="circle">
                                    <i className="far fa-paper-plane icon"></i>
                                    </div>
                                    <h2>CREATIVE</h2>
                                    <div className="h-border"></div>
                                    <p>
                                    Duis aute irure fermentum in reprehenderit in voluptate velit esse cillum dolore massa fugiat eu sollicitudin.
                                    </p>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <div className="circle">
                                    <i className="fas fa-flask icon"></i>
                                    </div>
                                    <h2>EXPERIMENTAL</h2>
                                    <div className="h-border"></div>
                                    <p>
                                    Duis aute irure fermentum in reprehenderit in voluptate velit esse cillum dolore massa fugiat eu sollicitudin.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowWeWork
