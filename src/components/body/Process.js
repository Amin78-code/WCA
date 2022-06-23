import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'

import '../../css/body/process.css'

class Process extends Component {
    render() {
        return (
            <div id="process" className="process">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1>PROCESS</h1>
                            <h2><span>WE MAKE</span> OUR CUSTOMERS HAPPY</h2>
                            <p>
                            Curabitur eget nulla ut neque aliquam dictum. Nam sollicitudin leo dui, non malesuada
                             felis aliquam non. Pellentesque habitant morbi tristique senectus et netus et malesuada
                              fames ac turpis egestas. Phasellus finibus tempor neque vel scelerisque. Cras nec ex ut
                               eleifend mollis ut a nibh. Vivamus commodo est sit amet ultricies.
                            </p>
                            <Row>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <div className="circle">
                                    <i className="fas fa-search icon"></i>
                                    </div>
                                    <h2>AWESOME</h2>
                                    <p>
                                    Duis aute irure fermentum in reprehenderit in voluptate velit esse cillum dolore massa fugiat eu sollicitudin.
                                    </p>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <div className="circle">
                                    <i className="fas fa-pencil-alt icon"></i>
                                    </div>
                                    <h2>INNOVATIVE</h2>
                                    <p>
                                    Duis aute irure fermentum in reprehenderit in voluptate velit esse cillum dolore massa fugiat eu sollicitudin.
                                    </p>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <div className="circle">
                                    <i className="fas fa-cog icon"></i>
                                    </div>
                                    <h2>CREATIVE</h2>
                                    <p>
                                    Duis aute irure fermentum in reprehenderit in voluptate velit esse cillum dolore massa fugiat eu sollicitudin.
                                    </p>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="col">
                                    <div className="circle">
                                    <i className="far fa-paper-plane icon"></i>
                                    </div>
                                    <h2>EXPERIMENTAL</h2>
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

export default Process
