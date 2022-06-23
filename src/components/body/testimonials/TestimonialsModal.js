import React, { Component } from 'react'
import AllTestimonials from './AllTestimonials'
import $ from 'jquery'

import '../../../css/body/testimonials/testimonialsModal.css'

class TestimonialsModal extends Component {

    handleCross = () => {
        var video = document.getElementById('current-testi');
        video.pause();
        video.currentTime = 0;
        document.getElementById('testimonials-modal').style.display="none"
        document.body.style.overflow="auto"
        $('#test-wrapper').fadeIn()
    }
    render() {
        return (
            <div className="testimonials-modal">
                <div className="contorls">
                    <i className="fas fa-times icon cross" onClick={this.handleCross}></i>
                </div>
                {/* <div className="content"> */}
                    <AllTestimonials />
                {/* </div> */}
            </div>
        )
    }
}

export default TestimonialsModal
