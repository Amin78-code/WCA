import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import '../../../css/body/services/tabs.css'

class Tabs extends Component {
    render() {
        return (
            <div id="tabs" className="tabs">
                <Row className="bgimg">
                    <Col xs={12} lg={4} className="col first" onClick={this.props.scrollToAccessories}>
                        <h1>Whole Cell Accessories</h1>
                        <h2>Open To Public</h2>
                        {/* <h3>
                            Responsive Styling<br/>
                            Retina Ready
                        </h3> */}
                    </Col>
                    <Col xs={12} lg={4} className="col sec" onClick={this.props.scrollToRepair}>
                        <h1>We Fix Phones</h1>
                        {/* <h2>EFFECTS</h2>
                        <h3>
                        Highly Optimized<br/>
                        Smooth Animations
                        </h3> */}
                    </Col>
                    <Col xs={12} lg={4} className="col third" onClick={this.props.scrollToActivation}>
                        <h1>We Are Wireless</h1>
                        {/* <h2>FRAMEWORK</h2>
                        <h3>
                        Adapted for Multicolor Sections<br/>
                        Highly Customized
                        </h3> */}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Tabs
