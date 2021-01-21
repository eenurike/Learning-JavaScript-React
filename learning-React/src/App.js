


import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      years: 30,
      proffesion: "still loh"
    }

    this.onChange = () => {
      this.setState(({years}) => ({
        years: ++years
      }))
    }

    this.onNeChange = () => {
      this.setState(state => ({
        years: --state.years
      }))
    }

    this.being = () => {
      this.setState(proffesion => ({
        proffesion: "Frontend developer"
      }))

    }
  }
  render() {
    const {name} = this.props
    const {years, proffesion} = this.state

    let classNames
    if(proffesion === "Frontend developer") {
      classNames = "changeButton"
    }
    return(
      
      <>
        <p>My name is {name}, i'm {years} <button onClick={this.onChange}>++</button><button onClick={this.onNeChange}>--</button>, and i'm a {proffesion} <button 
          onClick={this.being}
          className={classNames}>Wanna change your being?
        </button></p>
      </>
    )
  }
}

const All = () => {
  return(
    <>
      <App name="Nurike"/>
      <App name="Temur"/>
      <App name="Stas"/>
    </>
  )
}
  
export default All;
