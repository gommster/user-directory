import React, {Component} from 'react'
import './App.css';
import IdCard from './idCard'
import Home from './home'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <IdCard />
      </div>
    );
  }
}
export default App;