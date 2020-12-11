import React from 'react'
import Header from '../header/header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'

import './app.css'
// import style from './App.module.sass'

const App = () => {

    const data = [
        {label: "Going to learn React", important: true, like:true, id: "wqdff"},
        {label: "Thats is good", important: false, like:false, id:"afqfq"},
        {label: "I need a break...", important: false, like:false, id:"wqqfx"}
    ]

    return (
        <div className='app'>
            <Header/>

            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
        
    )
}

export default App;

