import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  showClock = () => {
    this.setState(prevState => ({showClock: !prevState.showClock}))
  }

  render() {
    const {showClock} = this.state

    const buttonText = showClock ? 'Hide Clock' : 'Show Clock'
    return (
      <div className="app-container">
        <button
          onClick={this.showClock}
          type="button"
          className="toggle-button"
        >
          {buttonText}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
