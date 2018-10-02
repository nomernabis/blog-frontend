import React from 'react'

const Post = ({title, text_preview, author, created, image}) => {
    let date = new Date(created * 1000)
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = monthNames[date.getMonth()]
    let day = date.getDate()
    let year = date.getFullYear()
    console.log('img', image)
    return (
        <div className="post" style={{height: '123px'}}>
            <img className="line" style={{maxHeight: '100%'}} src={image} />
            <div className="line position-relative" style={{verticalAlign: 'top', height: '100%', marginLeft: '16px'}}>
                <div className="center-vertical">
                    <div className="post-title">{title}</div>
                    <div className="post-text">{text_preview + '...'}</div>
                    <div className="post-author">{author}</div>
                    <div className="post-date">{month + ' ' + day + ', ' + year}</div>
                </div>
            </div>
        </div>
    )
}

export default Post
