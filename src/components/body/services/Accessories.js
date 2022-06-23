import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import '../../../css/body/services/accessories.css'
import IntroductionSection from '../IntroductionSection'

class Accessories extends Component {
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")

        let loggedin = true
        if(token==null){
            loggedin = false
        }
        this.state = {
            loggedin
            
        }
    }
    render() {
        return (
            <div id="accessories">
            {
                this.state.loggedin ?
            <div className="loggedin-accessories">
                <div className="content">
                    <div className="accessories-banner-bgimg"> 
                        <div className="wrapper">
                            <Row className="top-row">
                                <Col>
                                <h5>Where would you like to Log-in?</h5>
                                </Col>
                            </Row>
                            <Row className="sub-content">
                                <Col xs={12} lg={4} className="col">
                                    <a className="btn btn-outline-light" href="https://wholecellonline.com/internal/"  target="_blank" rel="noopener noreferrer">
                                        Whole Cell Accessories <br/>
                                        Open to Public
                                    </a>
                                </Col>
                                <Col xs={12} lg={4} className="col">
                                    <a className="btn btn-outline-light" href="https://wholecellonline.com/wfp_store/"  target="_blank" rel="noopener noreferrer">
                                    We Fix Phones
                                    </a>
                                </Col>
                                <Col xs={12} lg={4} className="col">
                                    <a className="btn btn-outline-light" href="https://wholecellonline.com/prepaidcity/"  target="_blank" rel="noopener noreferrer">
                                    We are Wireless
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div> : 
            <IntroductionSection 
                bgImg="accessories-banner-bgimg"
                wrapper="wrapper"
            />
            }    
                <div className="accessories" id="accessories-content">
                    <div className="bgimg">     
                        <div className="wrapper">
                            <div className="content">
                                <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                    Whole Cell Accessories
                                </h1>
                                <p data-aos="fade-left" data-aos-offset="60" data-aos-delay="800" data-aos-duration="1000">
                                Whole Cell Accessories offers hundreds of Accessories for Cell Phones and other electronic devices at a discounted price. With hundreds of options to choose from, you will always have exactly what you are looking for!
                                With multiple locations all over the Chicagoland area your closest Whole Cell location is only a short drive away.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accessories
