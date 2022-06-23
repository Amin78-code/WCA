import React, { Component } from 'react'

import '../../css/body/introductionSection.css'

class IntroductionSection extends Component {
    render() {
        return (
            <div>
            <div className="introduction-section">
                <div className="content">
                    <div className={this.props.bgImg}>  
                    
                    {/* <div className={this.props.wrapper}>
                            <div className="sub-content">
                                <span>
                                    <h1 data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                        {this.props.sectionName}
                                    </h1>
                                </span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default IntroductionSection
