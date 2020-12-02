import React from 'react'
import PostListItem from '../post-list-item/post-list-item'

import './post-list.css'

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        return(
            <li className="list-group-item">
                <PostListItem {...item}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
            {/* <PostListItem label={posts[0].label} important={posts[0].important}/> */}
            {/* <PostListItem label="Thats is good" important={true}/>
            <PostListItem label="I need a break..."/> */}
        </ul>
    )
}

export default PostList