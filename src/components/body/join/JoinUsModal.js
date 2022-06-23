import React, { Component } from 'react'
import {
    Modal,ModalHeader, ModalBody,Form, FormGroup, Input,
    Row, Col
} from 'reactstrap';
// import axios from 'axios'

import '../../../css/body/join/joinUsModal.css'

class JoinUsModal extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname: "",
            lastname: "",
            email: "",
            message: "",
            subject: "",
            emailStatus: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }
    handleSubmit = (e) => {

        const {
            firstname,
            lastname,
            email,
            message,
            subject
        } = this.state

        //create new xmlhttprequest
        var xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step
            
            this.setState ({
                emailStatus: xhr.responseText
            });
            alert(this.state.emailStatus)
            
            if(firstname && lastname && email && message !== ""){
            this.props.joinUsToggle()
            }
        });
        // open the request with the verb and the url
        xhr.open('GET', 'https://wholecellonline.com/whole-cell-online-site/mail.php?sendto=' + email + 
        '&name=' + firstname + ' ' + lastname +
        '&message=' + message +'&subject=' + subject);
        // send the request
        xhr.send();

        // reset the fields
        this.resetForm()
        
        e.preventDefault()
    }
        resetForm(){
            document.getElementById('contact-form').reset();
            this.setState({
                firstname: "",
                lastname: "",
                email: "",
                message: "",
                subject: ""
            })
        }

    render() {
        return (
            <div>
                <Modal 
                modalClassName="join-modal"
                contentClassName="join-modal-content"
                isOpen={this.props.joinUsModal} 
                toggle={this.props.joinUsToggle} 
                centered>
                <ModalHeader toggle={this.props.joinUsToggle} cssModule={{'modal-title': 'w-100 text-center'}}
                  className="border-0 ">Write to us</ModalHeader>
                 <ModalBody>
                   <Form id="contact-form" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Input
                                    type="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                    required="required"
                                    onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input
                                    type="lastname"
                                    name="lastname"
                                    placeholder="Last Name"
                                    required="required"
                                    onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>   
                        
                        <FormGroup>
                            <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required="required"
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                            name="message"
                            type="textarea" 
                            rows={4} 
                            id="joinUsMessage" 
                            placeholder="Message"
                            required="required"
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="text-center">
                            <button className="btn btn-outline-light send" type="submit">Send</button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default JoinUsModal
