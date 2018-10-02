import React, { Component } from 'react'
import AddPostForm from './AddPostForm'

class AddPost extends Component{
    constructor(props){
        super(props)
        console.log('addPost constructor')
    }
    componentDidMount(){
        console.log('component did mount')
    }
    render(){
        return(
            <div className="flex-container h-100vh login-bg">
                <AddPostForm />
            </div>
        )
    }
}

export default AddPost
