import React, { Component } from 'react'
import { login } from '../actions'
import { connect } from 'react-redux'
import { signUp } from '../actions/authActions'
import TextFieldGroup from './TextFieldGroup'

class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.validate = this.validate.bind(this)
    }
    validate(){
        const {username, password} = this.state
        let isValid = true
        let errors = {}
        if(!username || username === "") {
            errors.username = 'username is required'
            isValid = false
        }
        if(!password || password === ""){
            errors.password = 'password is required'
            isValid = false
        }
        this.setState({ errors })
        return isValid
    }
    onSubmit(e){
        e.preventDefault()
        this.setState({ errors: {} })
        if(this.validate()){
            this.props.signUp(this.state)
        }
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value , errors: {} })
    }
    render(){
        return (
            <form className="login-form">
                <TextFieldGroup value={this.state.username} type="text" field="username" label="Login" onChange={this.onChange} error={this.state.errors.username}/>
                <TextFieldGroup value={this.state.password} type="password" field="password" label="Password" onChange={this.onChange} error={this.state.errors.password} />
                <button onClick={this.onSubmit} className="button-login">
                    Sign Up
                </button>
            </form>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    signUp: (credentials) => { dispatch(signUp(credentials)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
