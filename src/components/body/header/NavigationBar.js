import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav
} from 'reactstrap';

import NavHamburger from './NavHamburger'
import '../../../css/body/header/navigationBar.css'
import Login from '../../auth/Login'
import $ from 'jquery'
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedin = true
        if (token == null) {
            loggedin = false
        }
        this.loginElement = React.createRef()
        this.state = {
            isNavbarCollapsed: true,
            loginToggle: false,
            loggedin,
            isOpen: false

        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        this._onNavbarToggleClick()
    }

    onLoginToggle = () => {
        this.setState({
            loginToggle: !this.state.loginToggle
        })

        this.loginElement.current.onCloseModal()
    }

    componentDidMount() {
        $("#loggedin").click(function () {
            if ($("#user-modal").hasClass("visible")) {
                $("#user-modal").removeClass("visible");
            } else {
                $("#user-modal").addClass("visible");
            }
        });
        $("#mob-loggedin").click(function () {
            if ($("#user-modal").hasClass("visible")) {
                $("#user-modal").removeClass("visible");
            } else {
                $("#user-modal").addClass("visible");
            }
        });

        $(document).click(function (event) {
            //if you click on anything except the modal itself or the "open modal" link, close the modal
            if (!$(event.target).closest("#user-modal,#loggedin,#mob-loggedin").length) {
                $("body").find("#user-modal").removeClass("visible");
            }
        });


        const $topDropdown = $(".top.dropdown");
        const $topDropdownToggle = $(".top.dropdown-toggle");
        const $topDropdownMenu = $(".top.dropdown-menu");
        const showClass = "show";

        $(window).on("load resize", function () {
            if (this.matchMedia("(min-width: 1200px)").matches) {
                $topDropdown.hover(
                    function () {
                        const $this = $(this);
                        $this.addClass(showClass);
                        $this.find($topDropdownToggle).attr("aria-expanded", "true");
                        $this.find($topDropdownMenu).addClass(showClass);
                    },
                    function () {
                        const $this = $(this);
                        $this.removeClass(showClass);
                        $this.find($topDropdownToggle).attr("aria-expanded", "false");
                        $this.find($topDropdownMenu).removeClass(showClass);
                    }
                );
            }
            else {
                $topDropdown.off("mouseenter mouseleave");
            }
        });

        const $bottomDropdown = $(".top.dropdown-item");
        const $bottomDropdownToggle = $(".bottom.dropdown-toggle");
        const $bottomDropdownMenu = $(".bottom.dropdown-menu");

        $(window).on("load resize", function () {
            if (this.matchMedia("(min-width: 1200px)").matches) {
                $bottomDropdown.hover(
                    function () {
                        const $this = $(this);
                        $this.addClass(showClass);
                        $this.find($bottomDropdownToggle).attr("aria-expanded", "true");
                        $this.find($bottomDropdownMenu).addClass(showClass);
                    },
                    function () {
                        const $this = $(this);
                        $this.removeClass(showClass);
                        $this.find($bottomDropdownToggle).attr("aria-expanded", "false");
                        $this.find($bottomDropdownMenu).removeClass(showClass);
                    }
                );
            }
            else {
                $bottomDropdown.off("mouseenter mouseleave");
            }
        });

        if (window.innerWidth < 1200) {
            $('.bottom.dropdown .bottom.dropdown-toggle').on("click", function (e) {
                e.stopPropagation();
                e.preventDefault();
                $('.bottom.dropdown-menu').hide();
                $(this).next('.dropdown-menu').toggle();
            });
            $('.top.dropdown .top.dropdown-toggle').on("click", function (e) {
                // e.stopPropagation();
                e.preventDefault();
                $('.bottom.dropdown-menu').hide();
            });
        } else if (window.innerWidth >= 1200) {
            $('.bottom.dropdown .bottom.dropdown-toggle').on("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
            });
            $('.bottom.dropdown-menu .dropdown-item').on("click", function (e) {
                e.stopPropagation();
                // e.preventDefault();
            });
        }


        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 70 ? "navbar-body" : "navbar-body-scrolled";
            const listbackgroundcolor = window.scrollY < 70 ? "list-bg-color" : "remove-list-bg-color";

            this.setState({
                navbar_body: backgroundcolor,
                list_bg_color: listbackgroundcolor
            });

            $(window).scroll(
                this.state.isOpen ?
                    this.setState({
                        isNavbarCollapsed: true,
                        isOpen: false
                    }) : ''
            );
        });
    }

    getDate = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var d = weekday[today.getDay()];

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        return today = mm + '/' + dd + '/' + yyyy + ' ' + d;
    }

    _onNavbarToggleClick = () => {
        this.setState({
            isNavbarCollapsed: !this.state.isNavbarCollapsed
        })
    }
    _getNavbarToggleIcon() {
        return this.state.isNavbarCollapsed ? (
            <i className="fas fa-bars toggle-icon"></i>
        ) : (
            <i className="fas fa-times toggle-icon"></i>
        );
    }
    scrollToSection = () => {
        document.getElementById('nav-ham-icon').style.display = "block"
        document.getElementById('nav-cross-icon').style.display = "none"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('mobile-ham-menu').style.display = "none"
        document.getElementById('nav-logo-bottom').style.display = "block"
        document.body.style.overflow = "auto"
    }
    render() {

        return (
            <div className={this.props.state}>
                <Navbar className="header-navbar" expand="xl" variant="dark" fixed="top">
                    <Nav>
                        <NavbarBrand className="logo" href="/whole-cell-online-site/">
                            Whole Cell<span> Accessories</span> <br /> <h3 id="nav-logo-bottom">open to public</h3>
                        </NavbarBrand>
                    </Nav>
                    {
                        window.innerWidth < 1200 ?
                            this.state.loggedin ?
                                <i id="mob-loggedin" className="fas fa-user ml-auto" style={{ cursor: 'pointer' }}></i> :
                                <div className="ml-auto" onClick={() => this.onLoginToggle()}><i className="fas fa-user ml-auto" style={{ cursor: 'pointer' }}></i>&nbsp;Login</div> :
                            ""
                    }

                    {
                        window.innerWidth < 1200 ?
                            <NavHamburger
                                state={this.props.state}
                                state1Handler={this.props.state1Handler}
                                state2Handler={this.props.state2Handler}
                                scrollToServices={this.props.scrollToServices}
                                scrollToClient={this.props.scrollToClient}
                                scrollToJoinUs={this.props.scrollToJoinUs}
                                scrollToContact={this.props.scrollToContact}
                                scrollToStoreLocator={this.props.scrollToStoreLocator}
                            />
                            : ""
                    }
                    <Nav className="ml-auto" navbar>



                        <NavbarBrand

                            className={
                                this.props.headerDot ?
                                    "nav-item active" :
                                    "nav-item"
                            }
                            onClick={this.props.scrollToHeader}>
                            <span>Home</span>
                        </NavbarBrand>


                        <NavbarBrand
                            className={
                                this.props.servicesDot ?
                                    "nav-item active" :
                                    "nav-item"
                            }
                            onClick={this.props.scrollToServices}>
                            <span>Services</span>
                        </NavbarBrand>

                        <NavbarBrand
                            className={
                                this.props.testimonialDot ?
                                    "nav-item active" :
                                    "nav-item"
                            }
                            onClick={this.props.scrollToTestimonial}>
                            <span>Testimonials</span>
                        </NavbarBrand>

                        <a
                            className={"nav-item"}
                            href="http://blog.wholecellonline.com/"
                            target="_blank">
                            <span>Blogs</span>
                        </a>

                        <NavbarBrand
                            className={
                                this.props.workDot ?
                                    "nav-item active" :
                                    "nav-item"
                            }
                            onClick={this.props.scrollToWork}>
                            <span>REVIEWS</span>
                        </NavbarBrand>

                        <NavbarBrand
                            className={
                                this.props.joinDot ?
                                    "nav-item active" :
                                    "nav-item"
                            }
                            onClick={this.props.scrollToJoin}>
                            <span>Join</span>
                        </NavbarBrand>

                        <NavbarBrand
                            className={
                                this.props.contactDot ?
                                    "nav-item active" :
                                    "nav-item"
                            }
                            onClick={this.props.scrollToContact}>
                            <span>Contact</span>
                        </NavbarBrand>



                        <NavbarBrand className="nav-item date" >{this.getDate()}</NavbarBrand>
                        {/* {
                                    this.state.loggedin ? 
                                    
                                <NavbarBrand id="loggedin" className="login">Welcome Aakash</NavbarBrand>
                                :  */}

                        <NavbarBrand className="login nav-item" onClick={() => this.onLoginToggle()}><span><i className="fas fa-user"></i>&nbsp;Login</span></NavbarBrand>
                        {/* } */}
                    </Nav>
                    {
                        window.innerWidth >= 1200 ?
                            <NavHamburger
                                onLoginToggle={this.onLoginToggle}
                                state={this.props.state}
                                state1Handler={this.props.state1Handler}
                                state2Handler={this.props.state2Handler}
                                scrollToServices={this.props.scrollToServices}
                                scrollToClient={this.props.scrollToClient}
                                scrollToJoinUs={this.props.scrollToJoinUs}
                                scrollToContact={this.props.scrollToContact}
                                scrollToStoreLocator={this.props.scrollToStoreLocator}
                            /> : ""
                    }
                </Navbar>
                <Login
                    loginToggle={this.state.loginToggle}
                    onLoginToggle={() => this.onLoginToggle()}
                    ref={this.loginElement}
                />
            </div>
        )
    }
}

export default NavigationBar

