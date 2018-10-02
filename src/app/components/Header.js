import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Header = ({ history }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    console.log('isLoggedIn', isLoggedIn)
    let buttons
    if(!isLoggedIn){
        buttons = (
            <div className="buttons">
                <a onClick={() => history.push('/signin') } className="button m-r">Sign In</a>
                <a onClick={(e) => {
                    e.preventDefault()
                    history.push('/signup')
                 }} className="button">Sign Up</a>
            </div>
        )
    } else {
        buttons = (
            <div className="buttons">
                <Link to="/addPost" className="button m-r">
                   Add Post
                </Link>
                <a onClick={(e) => {
                    e.preventDefault()
                    history.push('/signup')
                }} className="button">Logout</a>
            </div>
        )
    }
    return (
        <div className="header position-relative">
            <div className="header-title center-in-parent">Medium</div>
            {buttons}
        </div>
    )
}

export default withRouter(Header)
