import React, { Component } from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import JoinUsModal from './JoinUsModal'

import '../../../css/body/join/joinTeam.css'

class JoinTeam extends Component {
    constructor(props){
        super(props);
        this.state = {
            joinUsModal: false,
            joinUsContent: ""
        }
    }
    joinUsToggle = (content) => {
        this.setState({
            joinUsModal:!this.state.joinUsModal,
            joinUsContent: content
        })
      }
    render() {
        return (
            <div className="join-team" id="join-team">
                <div className="bgimg">     
                     <div className="image-wrapper">
                        <div className="content">
                            <Container fluid>
                                <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                    Join Our Team
                                </h1>
                                <p data-aos="fade-left" data-aos-offset="60" data-aos-delay="800" data-aos-duration="1000">
                                If you’re passionate, hard-working, and looking to make a difference, you might want to consider working with us. We’re searching for the best, most committed, team members that know what it takes to produce the best results. 
                                <br/>
                                <br/>
                                Want to love your job? Apply with us. Our team members love what they do, and you will too!
                                </p>
                            </Container>
                            <div className="wrapper">
                                <Row className="row">
                                    <Col xs={12} lg={4} className="col text-center">
                                        <button data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"
                                        className="btn btn-outline-light" onClick={() => this.joinUsToggle()}>Whole Cell Accessories <br/>Open To Public</button>
                                    </Col>
                                    <Col xs={12} lg={4} className="col text-center">
                                        <button data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"
                                        className="btn btn-outline-light" onClick={() => this.joinUsToggle()}>We Fix Phones</button>
                                    </Col>
                                    <Col xs={12} lg={4} className="col text-center">
                                        <button data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"
                                        className="btn btn-outline-light" onClick={() => this.joinUsToggle()}>Boost Mobile</button>
                                    </Col>
                                    <JoinUsModal 
                                        joinUsModal={this.state.joinUsModal}
                                        joinUsToggle={this.joinUsToggle}
                                        joinUsContent={this.state.joinUsContent}
                                    />
                                </Row> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinTeam
