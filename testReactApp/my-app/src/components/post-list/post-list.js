import React from 'react'
import PostListItem from '../post-list-item/post-list-item'

import './post-list.css'

import {ListGroup} from 'react-bootstrap'

const PostList = ({posts, onDelete}) => {
    
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item
        return(
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}/>
            </li>
        )
    });

    return (

        // <ul className="app-list list-group">
        //     {elements}
        //     {/* <PostListItem label={posts[0].label} important={posts[0].important}/> */}
        //     {/* <PostListItem label="Thats is good" important={true}/>
        //     <PostListItem label="I need a break..."/> */}
        // </ul>
        <ListGroup className="app-list">
             
             {elements}
        </ListGroup>

    )
}

export default PostList