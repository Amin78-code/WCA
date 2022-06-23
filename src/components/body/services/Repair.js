import React, { Component } from 'react'

import BgVideo from '../../../assets/services/repair.mp4'
import RepairPoster from '../../../assets/services/repair-poster.jpg'
import '../../../css/body/services/repair.css'
import IntroductionSection from '../IntroductionSection'
// import $ from 'jquery'

class Repair extends Component {
    // componentDidMount(){
    //     $('.repair .video').parent().click(function () {
    //         if($(this).children(".video").get(0).paused){        
    //             $(this).children(".video").get(0).play(); 
    //             $(this).children(".playpause").fadeOut();   
    //             $(this).children(".wrapper").children(".playpausemob").fadeOut();
    //           }else{       
    //               $(this).children(".video").get(0).pause();
    //               $(this).children(".playpause").fadeIn(); 
    //               $(this).children(".wrapper").children(".playpausemob").fadeIn();
    //           }
    //       });
    // }
    render() {
        return (
            <div id="repair">
                <IntroductionSection 
                    bgImg="repair-banner-bgimg"
                />
                <div className="repair">
                    <video preload="auto" autoPlay muted loop="loop" id="repair-video" className="video" poster={RepairPoster}>
                    <source src={BgVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                    </video>
                        {/* {
                            window.innerWidth>576 ?
                            <i className="far fa-play-circle playpause"></i> : ""
                        } */}
                    <div className="wrapper">
                        {/* {
                            window.innerWidth<=576 ?
                            <i className="far fa-play-circle playpausemob"></i> : ""
                        } */}
                        <div className="content">
                            <h1 data-aos="fade-right" data-aos-offset="55" data-aos-delay="200" data-aos-duration="1000">
                                We Fix Phones
                            </h1>
                            <p data-aos="fade-left" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                            We Fix Phones is a premiere cell phone and electronics repair service with one of the fastest and most reliable repair experiences in the county. We value our customers and keep them informed as their phones are serviced.
                            Our team of highly trained repair technicians asses your broken device and give you detailed explanations of their assessments. These craftsmen use the highest quality parts to make repairs for your satisfaction. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Repair