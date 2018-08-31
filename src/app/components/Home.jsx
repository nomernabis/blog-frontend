import React from 'react'
import { connect } from 'react-redux'
import Post from './Post.jsx'

const Home = ({ posts }) => {
    console.log('props', posts)
    const postList = posts.map(post => <Post key={post.id} {...post} />)
    return (
        <div>
            {postList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, null)(Home)
