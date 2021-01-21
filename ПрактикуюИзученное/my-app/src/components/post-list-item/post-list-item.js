import React from 'react'

import './post-list-item.css'



// class PostListItem extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             important: false,
//             like: false
//         }

//         this.onImportant = () => {
//             this.setState(({important}) => ({
//                 important: !important
//             }))
//         }

//         this.onLike = () => {
//             this.setState(({like}) => ({
//                 like: !like
//             }))
//         }
//     }


//     render() {
//     const {yo} = this.props  
//     const {important,like} = this.state  

//     let classNames = "listItem"
//     if(important) {
//         classNames += " important"
//     }

//     let classLike = ""
//     let border = "borderRed"
//     if(like) {
//         classLike += "yes"
//         border += " delBorderRed"
//     }

    

//     return(
//         <>
//             <div className="listWrapper">
//                 <li className={classNames}
//                     onClick={this.onLike}>
//                     {yo}
//                 </li>
//                 <div className="buttonMenu">
//                     <button onClick={this.onImportant}>tip</button>
//                     <button className={border}>del</button>
//                     <button className={classLike}>like</button>
//                 </div>
//             </div>
//         </>
//     )
//     }
//}

class PostListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            important: false,
            like: false
        }

        this.onImportant = () => {
            this.setState(({important}) => ({
                important: !important
            }))
        }

        this.onLike = () => {
            this.setState(({like}) => ({
                like: !like
            }))
        }
    }

    render() {
        const {yo} = this.props
        const {important, like} = this.state

        let classNames = "listItem"
        if(important) {
            classNames += " important"
        }

        let classLike = ""
        let border = "borderRed"
        if(like) {
            classLike += "yes"
            border += "delBorderRed"
        }
        return(
            <>
                <div className="listWrapper">
                    <li className={classNames}
                        onClick={this.onLike}>
                        {yo}
                    </li>
                    <div className="buttonMenu">
                        <button onClick={this.onImportant}>tip</button>
                        <button className={border}>del</button>
                        <button className={classLike}>like</button>
                    </div>
                </div>
            </>
        )
    }
}

export default PostListItem