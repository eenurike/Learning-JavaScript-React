import React from 'react'
import './post-add-form.css'

const PostAddForm = () => {
    return(
        <form>
            <input 
                type="text"
                placeholder = "What are you thinking about"/>
            <button type="submit">Add post</button>
        </form>
    )
}

export default PostAddForm