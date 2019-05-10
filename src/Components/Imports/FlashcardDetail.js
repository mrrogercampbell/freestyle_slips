import React, { Component } from 'react'
import Definition from './Definition'
import PropTypes from 'prop-types'

class FlashcardDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTimeout: null,
      timer: 10,
      show: false
    }

    this.decrementTimer = this.decrementTimer.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
  }

  decrementTimer() {
    if (this.state.timer === 0) {
      this.props.onTimerEnd()
    } else {
      clearTimeout(this.state.currentTimeout)
      this.setState(prevState => ({
        timer: prevState.timer - 1,
        currentTimeout: window.setTimeout(this.decrementTimer, 1000)
      }))
    }
  }

  toggleShow() {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  componentDidMount() {
    this.setState({ currentTimeout: window.setTimeout(this.decrementTimer, 1000) })
  }

  componentWillReceiveProps() {
    clearTimeout(this.state.currentTimeout)
    this.setState({
      timer: 10,
      currentTimeout: window.setTimeout(this.decrementTimer, 1000)
    })
  }

  render() {
    let flashcard = this.props.card
    return (
      <div>
        {/* <h3>{this.state.timer}</h3> */}
        <h1>{flashcard.word}</h1>
        {this.state.show && flashcard.definitions.map((def, idx) => <Definition def={def} key={def._id} idx={idx} />)}
        <button
          onClick={this.toggleShow}
          className='waves-effect waves-light btn'>
          {this.state.show ? 'Hide Definition' : 'Show Definition'}
        </button>
      </div>
    )
  }
}


FlashcardDetail.propTypes = {
  onTimerEnd: PropTypes.func,
  card: PropTypes.object
}

export default FlashcardDetail