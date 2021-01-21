import React from 'react'
import Header from '../header/header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'

import './app.css'
// import style from './App.module.sass'

export default class App extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            data : [
                {label: "Going to learn React", important: true, like:true, id: 1},
                {label: "Thats is good", important: false, like:false, id:2},
                {label: "I need a break...", important: false, like:false, id:3}
            ]
        }


        this.deleteItem = (id) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                // const before = data.splice(0, index)
                // const after = data.splice(index + 1)
                // const newArr = [...before, ...after]
                const newArr = [...data.slice(0, index), ...data.slice(index+1)];

                return {
                    data: newArr
                }
            });
        }

        this.maxId = 4

        this.addItem = (body) => {
            const newItem = {
                label: body,
                important: false,
                id: this.maxId++
            }

            this.setState(({data}) => {
                const newArr = [...data, newItem]

                return {
                    data: newArr
                }
            })
        }
    }
    

    render() {
        return (
            <div className='app'>
                <Header/>
    
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
            
        )
    }
    
}



