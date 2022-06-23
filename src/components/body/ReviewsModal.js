import React, { Component } from 'react'
import Reviews from './Reviews'

import '../../css/body/reviewsModal.css'

class ReviewsModal extends Component {

    handleCross = () => {
        document.getElementById('reviews-modal').style.display="none"
        document.body.style.overflow="auto"
    }
    render() {
        return (
            <div className="reviews-modal">
                <div className="contorls">
                    <i className="fas fa-times icon cross" onClick={this.handleCross}></i>
                </div>
                <div className="content">
                    <Reviews />
                </div>
            </div>
        )
    }
}

export default ReviewsModal
