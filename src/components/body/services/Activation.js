import React, { Component } from 'react'

import '../../../css/body/services/activation.css'
import IntroductionSection from '../IntroductionSection'

class Activation extends Component {
    render() {
        return (
            <div id="activation">
                <IntroductionSection 
                    bgImg="activation-banner-bgimg"
                />
                <div className="activation">
                    <div className="bgimg">     
                        <div className="wrapper">
                            <div className="content">
                                <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                    We Are Wireless
                                </h1>
                                <p data-aos="fade-left" data-aos-offset="60" data-aos-delay="800" data-aos-duration="1000">
                                Ranked as one of the highest performing Boost Mobile Stores in the Country, we have the best deals in the market to help you save money when you activate with us! We get it, choosing a phone carrier can be confusing but our expert staff can help you navigate all your options to help you save the most!
                                Visit any of our Boost Mobile locations to get our great deals and promotions. Our expert staff is trained to help you explore all of your option get the most out of your money! 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Activation
