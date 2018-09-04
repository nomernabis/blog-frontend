import React, { Component } from 'react'
import {login} from '../actions'
import {connect} from 'react-redux'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        let id = this.refs.login.value
        let password = this.refs.password.value
        this.props.dispatch(login(id, password))
    }
    render(){
        return (
            <div className="flex-container h-100vh login-bg">
                <div className="login-form">
                    <div className="group">
                        <input ref="login" className="login-input" type="text" required />
                        <span className="bar"></span>
                        <label className="group-label">Login</label>
                    </div>
                    <div className="group">
                        <input ref="password" className="login-input" type="password" required />
                        <span className="bar"></span>
                        <label className="group-label">Password</label>
                    </div>
                    <button onClick={this.onSubmit} className="button-login">
                        Sign Up
                    </button>
                </div>
            </div>
        )
    }
}

export default connect()(SignUp)
