import React from 'react'

const Post = ({title, text, author, created}) => {
    let date = new Date(created * 1000)
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = monthNames[date.getMonth()]
    let day = date.getDate()
    let year = date.getFullYear()
    return (
        <div className="post">
            <div className="post-title">{title}</div>
            <div className="post-text">{text + '...'}</div>
            <div className="post-author">{author}</div>
            <div className="post-date">{month + ' ' + day + ', ' + year}</div>
        </div>
    )
}

export default Post
