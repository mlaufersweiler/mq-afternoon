import React, {Component} from 'react';
import logo from './logo.svg';
import './reset.css'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      links: ["SERVICES", "PORTFOLIO", "ABOUT", "TEAM", "CONTACT"],
      hiddenMenu: false
    };
  }
  showMenu = () => {
    this.setState({hiddenMenu: !this.state.hiddenMenu})
  }

  render(){
    const linkMap = this.state.links.map((element, index) => {
      return <li key={index}>{element}</li>
    });
    return (
      <div className="App">
        <div className="button-container">
          <button className="hidden-button"
          type="submit"
          onClick={this.showMenu}>MENU</button>
        </div>
        <div className="background-img">
          <nav className="nav-bar">
            <h2 className="startBootstrap">Start Bootstrap</h2>
            <ul className="menu">{linkMap}</ul>
            {this.state.hiddenMenu && <ul className="hidden-menu">{linkMap}</ul> }
          </nav>
          <header>
            <div className="container">
              <div className="overlay">
                <div className="intro">
                  <p className="welcome">Welcome To Our Studio!</p>
                  <p className="call">IT'S NICE TO MEET YOU!</p>
                  <button className="call-button">TELL ME MORE</button>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    )
  }
}
export default App;
