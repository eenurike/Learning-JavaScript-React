import React from 'react'
import PostListItem from '../post-list-item/post-list-item'

const PostList = ({posts}) => {
    const elem = posts.map((item) => {
        const {id, ...itemProps} = item
        return(
              <div key={id}>
                  <PostListItem {...itemProps}/>
              </div>
    
        )
    })

    return( 
    <div className="listGroup">
        {elem}
    </div>
    )
}

export default PostList