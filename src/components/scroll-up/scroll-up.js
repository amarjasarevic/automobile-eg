import React from 'react'
import './scroll-up.css'

const DISTANCE = 50

class ScrollUp extends React.Component {
  constructor() {
    super()

    this.state = {
      showScrollUp: false
    }
  }

  componentDidMount() {
    this.checkForScrollToTop()

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  checkForScrollToTop = () => {
    const show = document.body.scrollTop > DISTANCE || document.documentElement.scrollTop > DISTANCE

    this.setState({ showScrollUp: show })
  }

  handleScroll = () => {
    this.checkForScrollToTop()
  }

  scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  render() {
    const scrollUpStyle = this.state.showScrollUp ? { bottom: '2rem', opacity: 0.9 } : {}

    return (
      <button
        type="button"
        className="scroll-up"
        style={scrollUpStyle}
        onClick={this.scrollUp}
      >
        <div />
        <div />
      </button>
    );
  }
}

export default ScrollUp