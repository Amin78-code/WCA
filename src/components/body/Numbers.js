import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'
import $ from 'jquery'

import '../../css/body/numbers.css'

class Numbers extends Component {
    componentDidMount = () => {

        var counterTeaserL = $('.counters');
        var winHeight = $(window).height();
        if (counterTeaserL.length) {
            var firEvent = false,
                objectPosTop = $('.counters').offset().top+900;
                
                //when element shows at bottom
                var elementViewInBottom = objectPosTop - winHeight;
            $(window).on('scroll', function() {
                var currentPosition = $(document).scrollTop();
                //when element position starting in viewport
              if (currentPosition > elementViewInBottom && firEvent === false) {
                  $('#ham-numbers').click(function () {
                    firEvent = false;
                  })
                  $('#m-ham-numbers').click(function () {
                    firEvent = false;
                  })
                firEvent = true;
                animationCounter();
              }   
            });
        }

        function animationCounter(){

            $('.counter').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        } 
    }
    render() {
        return (
            <div id="numbers" className="numbers">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1>OUR<span> NUMBERS</span></h1>
                            <h2><span>SOME OF THE</span> COOL FACTS ABOUT US</h2>
                        </div>
                        <Row className="counters">
                            <Col xs={12} sm={6} xl={3} className="background-l col">
                            {/* <div className="counter background-10-light" data-target="358022">0</div> */}
                                <div className="counter background-10-light">468450</div>
                                <h3>Satisfied Customers</h3>
                            </Col>
                            <Col xs={12} sm={6} xl={3} className="background-d col">
                            {/* <div className="counter background-10-light" data-target="24442">0</div> */}
                                <div className="counter background-10-light">31261</div>
                                <h3>Succesful Repairs</h3>
                            </Col>
                            <Col xs={12} sm={6} xl={3} className="background-l col">
                            {/* <div className="counter background-10-light" data-target="6656">0</div> */}
                                <div className="counter background-10-light">10435</div>
                                {/* <h3>5 Star Google Reviews</h3> */}
                                <h3>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                </h3> 
                            </Col>
                            <Col xs={12} sm={6} xl={3} className="background-d col">
                            {/* <div className="counter background-10-light" data-target="6656">0</div> */}
                                <div className="counter background-10-light">125171</div> 
                                <h3>New Phone Sales</h3>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default Numbers
