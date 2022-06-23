import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'
import '../../../css/body/join/joinUs.css'
import JoinTeam from './JoinTeam'
import BeTheBoss from './BeTheBoss'

class JoinUs extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
        this.joinTeam = React.createRef()
        this.beTheBoss = React.createRef()
     }

     scrollToJoinTeam = (event) => {
        if(this.joinTeam.current){
            this.joinTeam.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }
    scrollToBeTheBoss = (event) => {
        if(this.beTheBoss.current){
            this.beTheBoss.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }

    render() {
        return (
            <div id="join">
                <div className="join-us">
                    <div className="bgimg">
                        <Row className="content">
                            <Col md={6} xs={12} className="cr-col col" onClick={this.scrollToJoinTeam}>
                            Join Our Team
                            </Col>
                            <Col md={6} xs={12} className="st-col col" onClick={this.scrollToBeTheBoss}>
                            Be The Boss
                            </Col>
                        </Row>
                    </div>
                </div>
               <section ref={this.joinTeam}>
                    <JoinTeam />
               </section>
               <section ref={this.beTheBoss}>
                   <BeTheBoss />
               </section>
            </div>
        )
    }
}

export default JoinUs