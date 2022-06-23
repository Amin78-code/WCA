 import React, { Component } from 'react'
import {FacebookShareButton, FacebookIcon, 
        WhatsappShareButton, WhatsappIcon,
        EmailShareButton, EmailIcon} from 'react-share'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Swal from 'sweetalert2';

import Video1 from '../../../assets/testimonials/2022.m4v'


import '../../../css/body/testimonials/reviewsVideoSection.css'
import $ from 'jquery'

class ReviewsVideoSection extends Component {
    constructor(props){
        super(props)
        this.state={
            pause: false,
            // videos: [
                
            //     {
            //         id: "",
            //         class:"rvs-slide video",
            //         vidref: "vidRef26",
            //         src: Video26
            //     },
            //     {
            //         id: "",
            //         class:"rvs-slide video current",
            //         vidref: "vidRef27",
            //         src: Video27
            //     }
            // ]
        }
    }
    componentDidMount = () => {

        // //changing video slide
        // const slides = document.querySelectorAll('.rvs-slide');
        // const prev = document.querySelector('#rvs-next');
        // const next = document.querySelector('#rvs-prev');
        // const auto = false; // Auto scroll
        // const intervalTime = 5000;
        // let slideInterval;

        // const nextSlide = () => {
        // // Get current class
        // const current = document.querySelector('.current');
        // // Remove current class
        // if(current){
        //     current.classList.remove('current');
        // }
        // // Check for next slide
        // if (current.nextElementSibling) {
        //     // Add current to next sibling
        //     current.nextElementSibling.classList.add('current');
        // } else {
        //     // Add current to start
        //     slides[0].classList.add('current');
        // }
        // setTimeout(() => current.classList.remove('current'),200);
        // };

        // const prevSlide = () => {
        // // Get current class
        // const current = document.querySelector('.current');
        // // Remove current class
        // if(current){
        //     current.classList.remove('current');
        // }
        // // Check for prev slide
        // if (current.previousElementSibling) {
        //     // Add current to prev sibling
        //     current.previousElementSibling.classList.add('current');
        // } else {
        //     // Add current to last
        //     slides[slides.length - 1].classList.add('current');
        // }
        // setTimeout(() => current.classList.remove('current'));
        // };

        // // Button events
        // if(next) {
        //     next.addEventListener('click', e => {
        //         nextSlide();
        //         if (auto) {
        //         clearInterval(slideInterval);
        //         slideInterval = setInterval(nextSlide, intervalTime);
        //         }
        //     });
        // }

        // if(prev){
        //     prev.addEventListener('click', e => {
        //         prevSlide();
        //         if (auto) {
        //         clearInterval(slideInterval);
        //         slideInterval = setInterval(nextSlide, intervalTime);
        //         }
        //     });
        // }

        // // Auto slide
        // if (auto) {
        // // Run next slide at interval time
        // slideInterval = setInterval(nextSlide, intervalTime);
        // }

        
        
        // $('.reviews-video-section .video-wrapper').click(function () {
        //     if($('.reviews-video-section .rvs-slider .video.current').get(0).paused){        
        //         $('.reviews-video-section .rvs-slider .video.current').get(0).play(); 
        //       }
        //         $(this).fadeOut()
        //   });
        //   $('.reviews-video-section .rvs-prev').click(function () {
        //       $('.reviews-video-section .video-wrapper').fadeIn()
        //       })
        //   $('.reviews-video-section .rvs-next').click(function () {
        //       $('.reviews-video-section .video-wrapper').fadeIn()
        //       })

        $('.reviews-video-section .video-wrapper').click(function () {
            if($('.reviews-video-section .video').get(0).paused){        
                $('.reviews-video-section .video').get(0).play(); 
              }
                $(this).fadeOut()
          });

    }
    pauseVideo = () => {
        // Pause as well
        this.refs.vidRef26.pause();
        this.refs.vidRef27.pause();
      };
    
    render() {
        const handleCopy = () => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: 'Successfully, Copied To Clipboard', 
                showConfirmButton: false,
                timer: 1500
              })
          }
        let url = "https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/testimonials/2022.m4v";
        return (
            <div className="reviews-video-section">
            <div className="social-share">
              <FacebookShareButton url={url}>
                <FacebookIcon logoFillColor="white" size={50}></FacebookIcon>
              </FacebookShareButton>
              <EmailShareButton url={url}>
                <EmailIcon logoFillColor="white" size={50}></EmailIcon>
              </EmailShareButton>
              <WhatsappShareButton url={url}>
                <WhatsappIcon logoFillColor="white" size={50}></WhatsappIcon>
              </WhatsappShareButton>
            <CopyToClipboard text={"https://wholecellonline.com/whole-cell-online-site/wholecellonline-media/testimonials/2022.m4v"}
                onCopy={handleCopy}>
                <i className="fas fa-paste ctc-icon"></i>
            </CopyToClipboard>
            </div>
                <div className="video-wrapper">
                    <i className="far fa-play-circle playpause"></i>
                </div>
                    {/* <div className="rvs-slider">
                        {this.state.videos.slice().reverse().map((video,key)=>(
                        <video key={key} ref={video.vidref}
                        preload="none"
                        controls id={video.id} className={video.class}>
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                        ))}
                    </div>
                    <button id="rvs-prev" className="rvs-prev" onClick={this.pauseVideo}><i className="fas fa-arrow-left"></i>{ window.innerWidth>575 ? " Prev Video" : ""}</button>
                    <button id="rvs-next" className="rvs-next" onClick={this.pauseVideo}>{ window.innerWidth>575 ? "Next Video " : ""}<i className="fas fa-arrow-right"></i></button> */}
                <video preload="auto"
                controls id="video" className="video">
                    <source src={Video1} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        )
    }
}

export default ReviewsVideoSection
