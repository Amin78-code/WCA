import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody,
    Form, Input } from 'reactstrap';

import '../../css/auth/login.css'


class Login extends Component {
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")

        let loggedin = false
        if(token==null){
            loggedin = false
        }

        this.state = {
            user: '',
            password: '',
            loggedin,
            error: '',
            msg: ''
        }
        this.onChange = this.onChange.bind(this)
    }

    onCloseModal = () => {
        this.setState({
            user: '',
            password: '',
            error: ''

        })
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidUpdate(){
        if(this.state.loggedin){
            localStorage.setItem("token", "1")
            window.location.reload()
        }
    }

    handleLogin = (e) => {
        

        const {
            user,
            password
        } = this.state

        //create new xmlhttprequest
        var xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step
            if(xhr.responseText==="true"){
                this.setState({
                    loggedin: true
                })
            }else if(xhr.responseText==="false"){
                this.setState({
                    error: "username or password is incorrect"
                })
            }
            // this.setState ({
            //     error: xhr.responseText
            // });
            // alert(this.state.error)
        });
        // open the request with the verb and the url
        xhr.open('GET', 'https://wholecellonline.com/whole-cell-online-site/login_test.php?user=' + user + 
                                    '&password=' + password);
        // send the request
        xhr.send();
        
        e.preventDefault()
    }

    render() {
        return (
            <div>
                {(this.props.loginToggle) ? 
                <Modal 
                modalClassName="login-modal"
                isOpen={true} 
                toggle={() => this.props.onLoginToggle()} 
                centered
                >
                    <ModalHeader toggle={() => this.props.onLoginToggle()} style={{borderBottom: 0}}></ModalHeader>
                    <ModalBody cssModule={{'modal-body': 'text-center'}} style={{marginBottom: '50px'}}>
                        <Form style={{paddingLeft: '50px', paddingRight: '50px'}} method="POST" action="https://wholecellonline.com/internal/account/login.php">
                        {/* <Form style={{paddingLeft: '50px', paddingRight: '50px'}} onSubmit={this.handleLogin}> */}
                                <h4>Whole Cell Accessories</h4>
                            {/* {this.state.error !== '' ? 
                            <div>
                                <Label style={{color: 'red'}}>{this.state.error}</Label>
                            </div> : ''    
                        } */}
                                <br />
                                <div style={{color:'red',textAlign:'center', fontWeight:'bold'}}></div>
                                <Input type="text" placeholder="Username" value={this.state.user} name="user" onChange={this.onChange} />
                                <br />
                                <Input type="password" placeholder="Password or Swipe Card" value={this.state.password} name="password" onChange={this.onChange}/>
                                <br />
                                <Input type="submit" value="Login"/>
                        </Form>
                    </ModalBody>
                </Modal> : null
            }
                
            </div>
        )
    }
}

export default Login
