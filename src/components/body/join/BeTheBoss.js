import React, { Component } from 'react'

import JoinUsModal from './JoinUsModal'

import '../../../css/body/join/beTheBoss.css'

class BeTheBoss extends Component {
    constructor(props){
        super(props);
        this.state = {
            joinUsModal: false
        }
    }
    joinUsToggle = () => {
        this.setState({
            joinUsModal:!this.state.joinUsModal
        })
      }
    render() {
        return (
            <div className="be-the-boss" id="be-the-boss">
                <div className="bgimg">     
                     <div className="image-wrapper">
                        <div className="content">
                            <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                Be The Boss
                            </h1>
                            <p data-aos="fade-left" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                            Interested in joining the Whole Cell family? Want to learn more about who we are and how we do business? Like to get to know our founders and executive team?
                            <br/>
                            <br/>
                            Then take the next step and discover how Whole Cell Accessories franchise opportunities can contribute to your future success.
                            </p>
                            <button data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"
                            className="btn btn-outline-light" onClick={() => this.joinUsToggle()}>Write to us</button>

                            <JoinUsModal 
                            joinUsModal={this.state.joinUsModal}
                            joinUsToggle={this.joinUsToggle}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BeTheBoss
