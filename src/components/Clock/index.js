import {Component} from 'react'
import './index.css'

class Clock extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {date: new Date()}
  //   }

  //   componentDidMount() {
  //     this.timerId = setInterval(() => {
  //       this.setState({date: new Date()})
  //     }, 1000)
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.timerId)
  //   }

  state = {date: new Date()}

  onUpdateState = () => {
    setInterval(() => {
      this.setState({date: new Date()})
    }, 1000)
  }

  render() {
    this.onUpdateState()
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="heading">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
