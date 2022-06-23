import React, { Component } from 'react'
import '../../css/body/storeLocator.css'

class StoreLocator extends Component {
    componentDidMount(){
        
      function loadScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBmFOOpGfwDilHaxqgiOqoOCuCcBVXgSis&callback=initMap";
        document.body.appendChild(script);
      }

      window.onload = loadScript;
    }
    render() {
        
        return (
            <div className="store-locator" id="s-stores">
                {/* Google map */}
                <div id="map" className="z-depth-1-half map-container mb-5" style={{width: '100%'}}></div>
            </div>
        )
    }
}

export default StoreLocator
