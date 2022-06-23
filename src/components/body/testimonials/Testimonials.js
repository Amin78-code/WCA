import React, { Component } from 'react'
import ReviewsVideoSection from './ReviewsVideoSection'
import TestimonialsModal from './TestimonialsModal'

import '../../../css/body/testimonials/testimonials.css'

class Testimonials extends Component {
    handleReviewsModal = () => {
        document.getElementById('testimonials-modal').style.display="block"
        document.body.style.overflow="hidden"
    }
    render() {
        return (
            <div id="testimonials" className="testimonials">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1>Testimonials</h1>
                            <h2><span>OUR RECENT</span> TESTIMONIAL</h2>
                        </div>
                        <ReviewsVideoSection />
                        {/* <a className="testi-btn" href="/whole-cell-online-site/testimonials">View More Testimonials</a> */}
                        <a className="testi-btn" onClick={this.handleReviewsModal}>View More Testimonials</a>
                        <div id="testimonials-modal">
                            <TestimonialsModal/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials
