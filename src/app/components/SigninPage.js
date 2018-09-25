import React, { Component } from 'react'
import SigninForm from './SigninForm'

class LoginPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="flex-container h-100vh login-bg">
                <SigninForm />
            </div>
        )
    }
}

export default LoginPage
