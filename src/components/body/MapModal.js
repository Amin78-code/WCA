import React, { Component } from 'react'
import StoreLocator from './StoreLocator'

import '../../css/body/mapModal.css'

class MapModal extends Component {

    handleCross = () => {
        document.getElementById('map-modal').style.display="none"
        document.body.style.overflow="auto"
    }
    render() {
        return (
            <div className="map-modal">
                <div className="contorls">
                    <i className="fas fa-times icon cross" onClick={this.handleCross}></i>
                </div>
                <div className="content">
                    <StoreLocator />
                </div>
            </div>
        )
    }
}

export default MapModal
