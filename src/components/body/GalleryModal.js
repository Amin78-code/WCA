import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import {FacebookShareButton, FacebookIcon, 
        WhatsappShareButton, WhatsappIcon,
        EmailShareButton, EmailIcon} from 'react-share' 
import {CopyToClipboard} from 'react-copy-to-clipboard'; 
import Swal from 'sweetalert2'

import '../../css/body/galleryModal.css'

class GalleryModal extends Component {

    handleCross = () => {
        var video = document.getElementById('gm-video');
        video.pause();
        video.currentTime = 0;
        if(document.getElementById('footer-reviews-modal')){
            document.getElementById('footer-reviews-modal').style.display="none"
        }
        if(document.getElementById('work-gallery-modal')){
            document.getElementById('work-gallery-modal').style.display="none"
        }
        if(document.getElementById('reviews-gallery-modal')){
            document.getElementById('reviews-gallery-modal').style.display="none"
        }
        document.body.style.overflow="auto"
        this.props.clearState()
    }
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
        // let url = "https://wholecellonline.com/whole-cell-online-site/static/media/main.8695a813.mp4";
        return (
            <div className="gallery-modal">
                <div className="gm-contorls">
                    <i className="fas fa-times icon cross" onClick={this.handleCross}></i>
                </div>
                {
                this.props.filteredModal ? 
                this.props.filteredModal.map((data,key) => (
                <div className="gm-content" key={key}>
                    <h1>{data.firstname} <span>{data.lastname}</span></h1>
                    <Row>
                        <Col xs={12} lg={9} className="first-col">
                            <React.Fragment key={data.video}>
                                <video controls autoPlay className="video" id="gm-video" preload="none">
                                    <source src={data.video} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            </React.Fragment>
                        </Col>
                        <Col xs={12} lg={3} className="sec-col">
                            <span>
                                <h5>Description</h5>
                                <p>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                </p>
                                <p>{data.date}</p>
                                <p>{data.desc}</p>
                                <div className="social-share">
                                <FacebookShareButton url={data.url}>
                                    <FacebookIcon logoFillColor="white" size={35} title="facebook"></FacebookIcon>
                                </FacebookShareButton>
                                <EmailShareButton url={data.url}>
                                    <EmailIcon logoFillColor="white" size={35} title="email"></EmailIcon>
                                </EmailShareButton>
                                <WhatsappShareButton url={data.url}>
                                    <WhatsappIcon logoFillColor="white" size={35} title="whatsapp"></WhatsappIcon>
                                </WhatsappShareButton>
                                <CopyToClipboard text={data.url} title="copy to clipboard"
                                    onCopy={handleCopy}>
                                    <i className="fas fa-paste ctc-icon"></i>
                                </CopyToClipboard>
                                </div>
                            </span>
                        </Col>
                    </Row>
                </div>
                )) : ''}
            </div>
        )
    }
}

export default GalleryModal
