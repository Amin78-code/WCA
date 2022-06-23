import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import '../../css/body/whoWeAre.css'

class WhoWeAre extends Component {
    render() {
        return (
            <div id="wwa" className="who-we-are">
                <Row>
                    <Col xs={12} lg={6} className="col first">
                        <button onClick={this.props.scrollToWork}>View Our Work</button>
                    </Col>
                    <Col xs={12} lg={6} className="col sec">
                        <h1><span>WHO</span> WE ARE</h1>
                        <p>
                            <span>QUISQUE DOLOR LACUS, COMMODO ID HENDRERIT VIVERRA, EUISMOD IN ODIO.</span>
                            <br/>
                            Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.
                            Aenean nisi neque, aliquam ut nibh sit amet, finibus sagittis tortor aenean consectetur.
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default WhoWeAre
