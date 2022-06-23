import React, { Component } from 'react'



import '../../../css/body/join/beTheBoss.css'

class BeTheBoss extends Component {
    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <div className="be-the-boss" id="blog">
                <div className="bgimg">     
                     <div className="image-wrapper">
                        <div className="content">
                            <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                Blog
                            </h1>
                            <p data-aos="fade-left" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                            Interested in joining the Whole Cell family? Want to learn more about who we are and how we do business? Like to get to know our founders and executive team?
                            <br/>
                            <br/>
                            Then take the next step and discover how Whole Cell Accessories franchise opportunities can contribute to your future success.
                            </p>
                          
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BeTheBoss
