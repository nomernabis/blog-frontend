import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList.jsx'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import AddPost from './AddPost'

class Home extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Header />
                <Route exact path='/' component={PostList} />
            </div>
        )
    }
}

export default Home
