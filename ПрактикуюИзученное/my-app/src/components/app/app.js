import React from "react"
import Header from '../header/header'
import SearchPanel from "../search-panel/search-panel"
import PostStatusilter from "../post-status-filter/post-status-filter"
import PostList from '../post-list/post-list'
import './app.css'

const App= () => {
    return(
        <>
            <Header/>
            <div className="searchPanelBlock Background">
               <div className="wrapper">
                    <SearchPanel/>  
                    <PostStatusilter/>
               </div>
            </div>

            <div className="postListGroup Background">
                <div className="wrapper">
                    <PostList/>
                </div>
            </div>
        </>
    )
}

export default App
