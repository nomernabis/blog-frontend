import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp, clearErrors } from '../actions/authActions'
import TextFieldGroup from './TextFieldGroup'
import { withRouter } from 'react-router'

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
        this.props.clearErrors()
        if(this.validate()){
            this.props.signUp(this.state)
        }
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value , errors: {} })
        if(this.props.auth.errors && Object.keys(this.props.auth.errors).length != 0){
            this.props.clearErrors()
        }
    }
    render(){
        if(this.props.auth.response && Object.keys(this.props.auth.errors).length == 0){
            this.props.history.push('/')
            this.props.clearErrors()
        }
        let username
        if(this.props.auth.errors && this.props.auth.errors.username){
            username = this.props.auth.errors.username[0]
        }
        return (
            <form className="login-form">
                <TextFieldGroup value={this.state.username} type="text" field="username" label="Username" onChange={this.onChange} error={this.state.errors.username || username}/>
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
    signUp: (credentials) => dispatch(signUp(credentials)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm))
