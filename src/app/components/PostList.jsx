import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
import Post from './Post'

class PostList extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(fetchPosts())
    }
    render(){
        let postList
        if(this.props.posts){
            console.log('posts', this.props.posts)
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

function mapStateToProps(state){
    return {posts: state.posts.posts}
}

export default connect(mapStateToProps)(PostList)
