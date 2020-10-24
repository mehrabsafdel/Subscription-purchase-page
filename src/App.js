import React, { Component } from 'react';
import Main from './Components/Main/Main';
import Classes from './App.css'


class App extends Component {

  render() {
    return (
      <div className = {
        Classes.main
      } >
        <span className={Classes.cOne}></span>
        <span className={Classes.cTwo}></span>
        <span className={Classes.cThree}></span>
        <span className={Classes.cFour}></span>
        <span className={Classes.cFive}></span>
        <span className={Classes.cSix}></span>
        <span className={Classes.cSeven}></span>
        <span className={Classes.cEight}></span>

        <Main />
        </div>
    );
  }
}


export default App;
