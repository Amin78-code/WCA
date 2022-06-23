import React, { Component } from 'react'

import '../../../css/body/header/navHamburger.css'

class NavHamburger extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    handleHamburger = () => {
        window.innerWidth<1200 ?
        document.getElementById('mobile-ham-menu').style.display="block" :
        document.getElementById('ham-menu').style.display="block" 

        document.getElementById('nav-ham-icon').style.display="none"
        document.getElementById('nav-cross-icon').style.display="block"
        document.getElementById('nav-logo-bottom').style.display="none" 
        document.body.style.overflow="hidden"
        if(this.props.state==="state1"){
            this.props.state2Handler()
        }
        if(this.props.state==="state2"){
            this.props.state2Handler()
        }
    }
    handleCross = () => {
        window.innerWidth<1200 ?
        document.getElementById('mobile-ham-menu').style.display="none" :
        document.getElementById('ham-menu').style.display="none" 

        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
        if(window.pageYOffset > 10){
            this.props.state2Handler()
        }
        else{
            this.props.state1Handler()
        }
        
    }
    render() {
        return (
            <div className="nav-hamburger">
                
                <i className="fas fa-bars icon" id="nav-ham-icon" onClick={this.handleHamburger}></i>
                <i className="fas fa-times icon" id="nav-cross-icon" style={{display: "none"}} onClick={this.handleCross}></i>
            </div>
        )
    }
}

export default NavHamburger
