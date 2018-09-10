import React, { Component } from 'react'
import { login } from '../actions'
import { connect } from 'react-redux'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            errors: null
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
        const { loginUser } = this.props
        this.setState({ errors: null })
        if(this.validate()){
            loginUser(this.state)
        }
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value , errors: null})
    }
    render(){

        let errorUsername = null, errorPassword = null
        if(this.state.errors){
            const { username, password } = this.state.errors
            console.log('erorrs', this.state.errors)
            errorUsername = (<div className="error-message">{username}</div>)
            errorPassword = (<div className="error-message">{password}</div>)
        }
        return (
            <div className="flex-container h-100vh login-bg">
                <form className="login-form">
                    <div className="group">
                        <input onChange={this.onChange} name="username" className="login-input" type="text" required />
                        <span className="bar"></span>
                        <label className="group-label">Login</label>
                        {errorUsername}
                    </div>
                    <div className="group">
                        <input onChange={this.onChange} name="password" className="login-input" type="password" required />
                        <span className="bar"></span>
                        <label className="group-label">Password</label>
                        {errorPassword}
                    </div>
                    <button onClick={this.onSubmit} className="button-login">
                        Sign Up
                    </button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (credentials) => { dispatch(login(credentials))}
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
