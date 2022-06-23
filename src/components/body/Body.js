import React, { Component } from 'react'

import Header from './header/Header'
import Tabs from './services/Tabs'
import Accessories from './services/Accessories'
import Repair from './services/Repair'
import Blog from './blog/Blog'
import Activation from './services/Activation'
import Testimonials from './testimonials/Testimonials'
import OurWork from './OurWork'
import JoinUs from './join/JoinUs'
import Numbers from './Numbers'
import Contact from './Contact'
import Footer from './Footer'

class Body extends Component {
    constructor(props){
        super(props)
        this.state={
            state1: "state1",
            headerDot: true,
            servicesDot: false,
            testimonialDot: false,
            workDot: false,
            joinDot: false,
            numbersDot: false,
            contactDot: false
        }
        this.header = React.createRef()
        this.services = React.createRef()
        this.work = React.createRef()
        this.numbers = React.createRef()
        this.testimonial = React.createRef()
        this.join = React.createRef()
        this.contact = React.createRef()
    } 
    
    
    componentDidMount() {

        const state2 = window.pageYOffset > 10 ? "state2" : "state1";

        this.setState({ 
            state1: state2
            });
        
        document.addEventListener("scroll", () => {
            const state2 = window.pageYOffset > 10 ? "state2" : "state1";
    
            this.setState({ 
                state1: state2
                });

                
            if(window.scrollY-60 < document.getElementById("tabs").offsetTop)
            {
        
                this.setState({
                    headerDot: true,
                    servicesDot: false,
                    testimonialDot: false,
                    workDot: false,
                    joinDot: false,
                    numbersDot: false,
                    contactDot: false
        
                })
            } 
            if(window.scrollY >= document.getElementById("tabs").offsetTop-50)
            {
                this.setState({
                    headerDot: false,
                    servicesDot: true,
                    testimonialDot: false,
                    workDot: false,
                    joinDot: false,
                    numbersDot: false,
                    contactDot: false
        
                })
            }
            if(window.scrollY >= document.getElementById("testimonials").offsetTop-50)
            {
                this.setState({
                    headerDot: false,
                    servicesDot: false,
                    testimonialDot: true,
                    workDot: false,
                    joinDot: false,
                    numbersDot: false,
                    contactDot: false
        
                })
            }
            if(window.scrollY >= document.getElementById("work").offsetTop-50)
            {
                this.setState({
                    headerDot: false,
                    servicesDot: false,
                    testimonialDot: false,
                    workDot: true,
                    joinDot: false,
                    numbersDot: false,
                    contactDot: false
        
                })
            }
            if(window.scrollY >= document.getElementById("join").offsetTop-140)
            {
                this.setState({
                    headerDot: false,
                    servicesDot: false,
                    testimonialDot: false,
                    workDot: false,
                    joinDot: true,
                    numbersDot: false,
                    contactDot: false
        
                })
            }
            if(window.scrollY >= document.getElementById("numbers").offsetTop-140)
            {
                this.setState({
                    headerDot: false,
                    servicesDot: false,
                    testimonialDot: false,
                    workDot: false,
                    joinDot: false,
                    numbersDot: true,
                    contactDot: false
        
                })
            }
            if(window.scrollY >= document.getElementById("contact").offsetTop-50)
            {
                this.setState({
                    headerDot: false,
                    servicesDot: false,
                    testimonialDot: false,
                    workDot: false,
                    joinDot: false,
                    numbersDot: false,
                    contactDot: true
        
                })
            }
        })
        
    } 
    

    scrollToHeader = () => {
        //.current is verification that your element has rendered
        if(this.header.current){
            this.header.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        if(window.pageYOffset<10){
            this.setState({
                state1: "state1"
            })
        }
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    scrollToServices = () => {
        const store = document.getElementById('tabs').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store -40, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    scrollToAccessories = () => {
        const store = document.getElementById('accessories').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store -0, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
    }
    scrollToRepair = () => {
        const store = document.getElementById('repair').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store -0, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
    }
    scrollToActivation = () => {
        const store = document.getElementById('activation').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store -0, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
    }
    scrollToTestimonial = () => {
        //.current is verification that your element has rendered
        if(this.testimonial.current){
            this.testimonial.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    scrollToWork = () => {
        //.current is verification that your element has rendered
        if(this.work.current){
            this.work.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    scrollToJoin = () => {
        if(this.join.current){
            this.join.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    scrollToNumbers = () => {
        const store = document.getElementById('numbers').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if(window.innerWidth>576){
            window.scrollTo({
                top: store - 130, //add your necessary value
                behavior: "smooth"  //Smooth transition to roll
              });
        }
        if(window.innerWidth<=576){
            window.scrollTo({
                top: store , //add your necessary value
                behavior: "smooth"  //Smooth transition to roll
              });
        }
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }
    scrollToContact = () => {
        //.current is verification that your element has rendered
        if(this.contact.current){
            this.contact.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        document.getElementById('nav-ham-icon').style.display="block"
        document.getElementById('nav-cross-icon').style.display="none"
        document.getElementById('ham-menu').style.display="none"
        document.getElementById('mobile-ham-menu').style.display="none"
        document.getElementById('nav-logo-bottom').style.display="block" 
        document.body.style.overflow="auto"
    }

    

    state1Handler = () => {
        this.setState({
            state1: "state1"
        })
    }

    state2Handler = () => {
        this.setState({
            state1: "state2"
        })
    }
    render() {
        return (
            <div>
                <section ref={this.header}>
                    <Header 
                        state1Handler={this.state1Handler}
                        state2Handler={this.state2Handler}
                        scrollToHeader={this.scrollToHeader}
                        scrollToServices={this.scrollToServices}
                        scrollToTestimonial={this.scrollToTestimonial}
                        scrollToWork={this.scrollToWork}
                        scrollToJoin={this.scrollToJoin}
                        scrollToNumbers={this.scrollToNumbers}
                        scrollToContact={this.scrollToContact}
                        state={this.state.state1}
                        headerDot={this.state.headerDot}
                        servicesDot={this.state.servicesDot}
                        testimonialDot={this.state.testimonialDot}
                        workDot={this.state.workDot}
                        joinDot={this.state.joinDot}
                        numbersDot={this.state.numbersDot}
                        contactDot={this.state.contactDot}
                    />
                </section>
                <section ref={this.services}><Tabs 
                scrollToAccessories={this.scrollToAccessories}
                scrollToRepair={this.scrollToRepair}
                scrollToActivation={this.scrollToActivation}
                /></section>
                <Accessories />
                <Repair />
                <Activation />
                <section ref={this.testimonial}><Testimonials /></section>
                <section ref={this.work}><OurWork /></section>
                <section ref={this.join}><JoinUs /></section>
                <section /* ref={this.join} */><Blog /></section>
                <section ref={this.numbers}><Numbers /></section>
                <section ref={this.contact}><Contact /></section>
                <Footer 
                    scrollToServices={this.scrollToServices}
                    scrollToAccessories={this.scrollToAccessories}
                    scrollToRepair={this.scrollToRepair}
                    scrollToActivation={this.scrollToActivation}
                    scrollToWork={this.scrollToWork}
                    scrollToNumbers={this.scrollToNumbers}
                    scrollToContact={this.scrollToContact}
                />
            </div>
        )
    }
}

export default Body
