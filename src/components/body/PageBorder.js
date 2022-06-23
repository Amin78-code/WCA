import React, { Component } from 'react'

import '../../css/body/pageBorder.css'

class PageBorder extends Component {

    
    render() {
        return (
            <div className={this.props.state} id="page-border">
                
                <div className="page-border top">
                    </div>
                    <div className="page-border bottom">
                        {
                        this.props.state==='state1' ? 
                            <span style={{cursor: 'pointer'}} onClick={this.props.scrollToServices}><span>Scroll</span> Down</span> : 
                            <span style={{cursor: 'pointer'}} onClick={this.props.scrollToHeader}><span>To</span> Top</span>
                        }
                    </div>
                    <div className="page-border left border-pad">
                    </div>
                    <div className="page-border right border-pad">
                    </div>
                    <div className="page-border left">
                        <ul>
                            <li>
                                <a href='https://www.youtube.com/channel/UCVqmjZmCX8bwQgem5oSV-LQ' target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/whole_cell_accessories/?hl=en' target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram icon"></i>
                                </a>
                            </li>
                            {/* <li>
                                <a href='https://www.google.com'>
                                    <i className="fab fa-google icon"></i>
                                </a>
                            </li> */}
                            <li>
                                <a href='https://www.facebook.com/Whole-Cell-Accessories-133478916702283/' target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f icon"></i>
                                </a>
                            </li>
                            {/* <li>
                                <a href='https://www.snapchat.com'>
                                    <i className="fab fa-snapchat-ghost icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.pinterest.com'>
                                    <i className="fab fa-pinterest-p icon"></i>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="page-border right">
                        <ul>
                            <li onClick={this.props.scrollToHeader}>
                                {
                                    this.props.headerDot ? 
                                        <i className="far fa-circle"></i>
                                    :
                                        <i className="fas fa-circle circle"></i>
                                }
                            </li>
                            <li onClick={this.props.scrollToServices}>
                                {
                                    this.props.servicesDot ? 
                                    <i className="far fa-circle"></i>
                                    :
                                    <i className="fas fa-circle circle"></i>
                                }
                            </li>
                            
                            <li onClick={this.props.scrollToTestimonial}>
                                {
                                    this.props.testimonialDot ? 
                                    <i className="far fa-circle"></i>
                                    :
                                    <i className="fas fa-circle circle"></i>
                                }
                            </li>
                            <li onClick={this.props.scrollToWork}>
                                {
                                    this.props.workDot ? 
                                        <i className="far fa-circle"></i>
                                    :
                                        <i className="fas fa-circle circle"></i>
                                }
                            </li>
                            <li onClick={this.props.scrollToJoin}>
                                {
                                    this.props.joinDot ? 
                                        <i className="far fa-circle"></i>
                                    :
                                        <i className="fas fa-circle circle"></i>
                                }
                            </li>
                            <li onClick={this.props.scrollToNumbers}>
                                {
                                    this.props.numbersDot ? 
                                        <i className="far fa-circle"></i>
                                    :
                                        <i className="fas fa-circle circle"></i>
                                }
                            </li>
                            <li onClick={this.props.scrollToContact}>
                                {
                                    this.props.contactDot ? 
                                        <i className="far fa-circle"></i>
                                         :
                                        <i className="fas fa-circle circle"></i>
                                }
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}

export default PageBorder
