import React, { Component } from 'react'
import SignupForm from './SignupForm'


class SignupPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="flex-container h-100vh login-bg">
                <SignupForm />
            </div>
        )
    }
}

export default SignupPage
