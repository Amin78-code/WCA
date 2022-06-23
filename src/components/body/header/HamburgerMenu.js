import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap"

import '../../../css/body/header/hamburgerMenu.css'

class HamburgerMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
            state: "state1 text"
        }
    }
    componentDidMount() {
    }
    dropdownToggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
    scrollToSection = () => {
        document.getElementById('nav-ham-icon').style.display = "block"
        document.getElementById('nav-cross-icon').style.display = "none"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('nav-logo-bottom').style.display = "block"
        document.body.style.overflow = "auto"
    }
    scrollToStoreLocator = () => {
        document.getElementById('nav-ham-icon').style.display = "block"
        document.getElementById('nav-cross-icon').style.display = "none"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('nav-logo-bottom').style.display = "block"
        document.body.style.overflow = "auto"
        this.props.scrollToStoreLocator()
    }
    render() {
        return (
            <div className="hamburger-menu">
                <Row className="top">
                    <Col xs={12} xl={6} className="first col" onClick={this.props.scrollToHeader}>
                        <div className={this.state.state}>
                            <span>
                                <span className="label">We Are</span>
                                <br />
                                <span className="title">Whole Cell Accessories</span>
                            </span>
                        </div>
                    </Col>
                    <Col xs={12} xl={6} className="sec col" onClick={this.props.scrollToServices}>
                        <div className="text">
                            <span>
                                <span className="label">Awesome</span>
                                <br />
                                <span className="title">Services</span>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className="bottom">
                    <Col xs={12} xl={3} className="first col" onClick={this.props.scrollToWork}>
                        <div className="text">
                            <span>
                                <span className="label">Happy Clients</span>
                                <br />
                                <span className="title">Reviews</span>
                            </span>
                        </div>
                    </Col>
                    <Col id="ham-numbers" xs={12} xl={3} className="sec col" onClick={this.props.scrollToNumbers}>
                        <div className="text">
                            <span>
                                <span className="label">Some Facts</span>
                                <br />
                                <span className="title">Numbers</span>
                            </span>
                        </div>
                    </Col>
                    <Col id="ham-numbers" xs={12} xl={3} className="sec col">
                        <a href='http://blog.wholecellonline.com/' className="text">
                            <span>
                                <span className="label">Our</span>
                                <br />
                                <span style={{ color: 'white' }} className="title">Blogs</span>
                            </span>
                        </a>
                    </Col>
                    <Col xs={12} xl={3} className="third col" onClick={this.props.scrollToContact}>
                        <div className="text">
                            <span>
                                <span className="label">Our</span>
                                <br />
                                <span className="title">Contact</span>
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HamburgerMenu
