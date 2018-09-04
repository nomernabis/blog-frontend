import React from 'react'
import { withRouter } from 'react-router-dom'

const Header = ({ history }) => (
    <div className="header position-relative">
        <div className="header-title center-in-parent">Medium</div>
        <div className="buttons">
            <a onClick={() => history.push('/signin') } className="button m-r">Sign In</a>
            <a onClick={(e) => {
                e.preventDefault()
                history.push('/signup')
             }} className="button">Sign Up</a>
        </div>
    </div>
)

export default withRouter(Header)
