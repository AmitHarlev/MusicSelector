import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';

class App extends Component {
  render() {
    return (
      <div>
        <MainPanel/>
      </div>
    );
  }
}

class MainPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: ["Call Me Maybe"],
      textBoxValue: ""
    }
  }

  handleChange = (e) => {
    this.setState({textBoxValue: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
      this.setState({
        items: this.state.items.concat(this.state.textBoxValue),
        textBoxValue: ""
      });
  }

  SongList = () => {
    return this.state.items.map((item, index) => (
        <li key={index}><span>{item} <UpDoot/></span></li>
    ));
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.textBoxValue} onChange={this.handleChange}></input>
        </form>
        <this.SongList/>
      </div>
    )}
}

class UpDoot extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      vote: 0
    };

  }

  incrementVote = () => {
    this.setState({
      vote: this.state.vote + 1
    });
  }

  render() {
    return (<div>
      <button onClick={this.incrementVote}>Click Me</button>
      <span>{this.state.vote}</span>
    </div>);
  }
}

export default App;
