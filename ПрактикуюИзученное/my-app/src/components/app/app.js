import React from "react"
import Header from '../header/header'
import SearchPanel from "../search-panel/search-panel"
import PostStatusilter from "../post-status-filter/post-status-filter"
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'
import './app.css'

const App= () => {
    const data = [
        {yo:"Going to learn React", important: true, id: "qwer"},
        {yo:"That's good", important:true, id:"wfsd"},
        {yo:"I need a break", id: "dfsa"}
    ]
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
                    <PostList posts={data}/>
                    <PostAddForm/>
                </div>
            </div>
        </>
    )
}

export default App
