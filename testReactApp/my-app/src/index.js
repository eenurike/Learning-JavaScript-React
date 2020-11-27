import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/app';
// import reportWebVitals from './reportWebVitals';


class WhoAmI extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         years: 26
    //     }
    //     this.nextYear = this.nextYear.bind(this)  способ 1
    //     this.nextYear = () => {                      способ 2
    //         this.setState(state => ({
    //             years: ++state.years
    //         }))
    //     }
    // }

    // nextYear() {
    //     this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }

    state = {
        years: 26
    }

    nextYear = () => {
        this.setState(state => ({
            years: ++state.years
        }))
    }

    render() {
        const {name, surname, link} = this.props;
        const years = this.state.years;
        return (
                 <>
                    <button onClick={this.nextYear}>++</button>
                    <h1>My name is {name}, surname {surname}, years - {years}</h1>
                    <a href={link}>My profile</a>
                 </>
                )
    }
}

const All = () => {
    return(
        <>
            <WhoAmI name="Nur" surname="Yelemesov" link="vk.com"/>
            <WhoAmI name="Liuba" surname="Stolyarova" link="vk.com"/>
            <WhoAmI name="Temur" surname="Sarsenbaev" link="vk.com"/>
        </>
    )
}

ReactDOM.render(<All/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
