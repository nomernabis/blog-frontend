import React, { Component } from 'react'
import { signIn, clearErrors } from '../actions/authActions'
import { connect } from 'react-redux'
import TextFieldGroup from './TextFieldGroup'
import { withRouter } from 'react-router'

class SigninForm extends Component{
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
    componentWillReceiveProps(nextProps){
        if(nextProps.auth.token){
            localStorage.setItem('token', nextProps.auth.token)
            localStorage.setItem('isLoggedIn', true)
            this.props.history.push('/')
        }
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
        return true
    }
    onSubmit(e){
        e.preventDefault()
        this.setState({ errors: {} })
        if(this.validate()){
            this.props.signIn(this.state)
        }
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value , errors: {} })
        if(this.props.auth.errors && Object.keys(this.props.auth.errors).length != 0){
            this.props.clearErrors()
        }
    }
    render(){
        const { errors } = this.props.auth
        if(errors && errors.non_field_errors){
            alert(errors.non_field_errors[0])
        }
        return (
            <form className="login-form">
                <TextFieldGroup value={this.state.username} type="text" field="username" label="Username" onChange={this.onChange} error={this.state.errors.username}/>
                <TextFieldGroup value={this.state.password} type="password" field="password" label="Password" onChange={this.onChange} error={this.state.errors.password} />
                <button onClick={this.onSubmit} className="button-login">
                    Sign In
                </button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    signIn: (credentials) => { dispatch(signIn(credentials))},
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SigninForm))
