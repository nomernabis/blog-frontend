import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList.jsx'
import Header from './Header'
import { fetchPosts } from '../actions'

class Home extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(fetchPosts())
    }
    render(){
        const { posts } = this.props
        return (
            <div>
                <Header />
                <PostList posts={posts} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {posts: state.posts.posts}
}

export default connect(mapStateToProps)(Home)
