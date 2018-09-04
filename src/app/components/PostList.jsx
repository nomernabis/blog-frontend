import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import Post from './Post.jsx'


class PostList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let postList
        if(this.props.posts){
            postList = this.props.posts.map(post => <Post key={post.id} {...post} />)
        } else {
            postList = 'No Posts'
        }
        return (
            <div>
                {postList}
            </div>
        )
    }
}

export default PostList
