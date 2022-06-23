import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import $ from 'jquery'

import '../../css/body/ourSkills.css'

class OurSkills extends Component {
    componentDidMount = () => {

        var animatorTeaserL = $('.prog-bar');
        var winHeight = $(window).height();
        if (animatorTeaserL.length) {
            var firEvent1 = false,
                objectPosTop = $('.prog-bar').offset().top+1300;
                
                //when element shows at bottom
                var elementViewInBottom = objectPosTop - winHeight;
            $(window).on('scroll', function() {
                var currentPosition = $(document).scrollTop();
                //when element position starting in viewport
              if (currentPosition > elementViewInBottom && firEvent1 === false) {
                firEvent1 = true;
                progressAnimation();
              }   
            });
        }

        function progressAnimation(){
            document.getElementById('html-percentage').style.opacity="1"
            document.getElementById('html-percentage').style.width="40%"
            document.getElementById('css3-percentage').style.opacity="1"
            document.getElementById('css3-percentage').style.width="45%"
            document.getElementById('jquery-percentage').style.opacity="1"
            document.getElementById('jquery-percentage').style.width="50%"
            document.getElementById('mysql-percentage').style.opacity="1"
            document.getElementById('mysql-percentage').style.width="40%"
            document.getElementById('php-percentage').style.opacity="1"
            document.getElementById('php-percentage').style.width="90%"
        } 
    }
    render() {
        return (
            <div id="skills" className="our-skills">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="content">
                            <h1>OUR SKILLS</h1>
                            <h2><span>OUR MAIN</span> SKILLS</h2>
                            <p>
                            Aliquam scelerisque vestibulum mi, eu commodo sem vestibulum convallis. Proin sed 
                            mi vehicula, porta nisi eu, facilisis nisl. Etiam tristique mi nec fermentum vestibulum.
                             Nullam in nisi ut tellus laoreet ultrices. In ullamcorper dictum interdum vestibulum 
                             etiam tristique mi nec fermentum commodo sem vestibulum laoreet ultrices.
                            </p>
                            <Row>
                                <Col xs={12} lg={6} className="col">
                                    <p>
                                        <span>FUSCE NON COMMODO SAPIEN, QUIS ULTRICES ENIM. PROIN IN PLACERAT URNA. 
                                            NULLA LUCTUS LEO NEC MASSA VESTIBULUM CONSEQUAT QUIS.</span><br/>
                                            <br/>
                                        Sed dapibus, leo ut egestas convallis, leo purus condimentum ipsum, sit amet 
                                        lobortis odio nisi id enim. Pellentesque habitant morbi tristique senectus et 
                                        netus et malesuada fames ac turpis egestas. Morbi suscipit, mi in interdum volutpat,
                                         quam mi porta nisi, dapibus placerat sapien tortor eleifend arcu. Cras sit amet 
                                         euismod mi, non imperdiet felis. Praesent eros nibh, ullamcorper ut suscipit sit
                                          amet, mattis sollicitudin lectus. Cum sociis natoque penatibus et magnis dis 
                                          parturient montes, nascetur ridiculus mus. Duis in enim sit amet nibh placerat 
                                          consectetur id et enim. Nunc nec dui ac ligula posuere posuere vel id metus. 
                                          Integer maximus eros nec lobortis tempor.
                                    </p>
                                </Col>
                                <Col xs={12} lg={6} className="col">
                                    <div className="prog-bar dark">
                                        <h3>HTML5</h3>
                                        40%
                                        <div id="html-percentage" className="html-percentage percent"></div>
                                    </div>
                                    <div className="prog-bar light">
                                        <h3>CSS3</h3>
                                        45%
                                        <div id="css3-percentage" className="css3-percentage percent"></div>
                                    </div>
                                    <div className="prog-bar dark">
                                        <h3>JQUERY</h3>
                                        50%
                                        <div id="jquery-percentage" className="jquery-percentage percent"></div>
                                    </div>
                                    <div className="prog-bar light">
                                        <h3>MYSQL</h3>
                                        40%
                                        <div id="mysql-percentage" className="mysql-percentage percent"></div>
                                    </div>
                                    <div className="prog-bar dark">
                                        <h3>PHP</h3>
                                        90%
                                        <div id="php-percentage" className="php-percentage percent"></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurSkills
