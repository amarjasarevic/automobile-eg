import React, { Component } from 'react'

const DISTANCE = 50

const withScrollWatch = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = this.state || {}
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false)
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false)
    }
    onScroll = () => {
      // if (window.scrollY >= 100 && !this.state.sticky) {
      //     this.setState({sticky: true});
      // } else if (window.scrollY < 100 && this.state.sticky) {
      //     this.setState({sticky: false});
      // }
      const show =
        document.body.scrollTop > DISTANCE ||
        document.documentElement.scrollTop > DISTANCE
      this.setState({ showScrollUp: show })
    }
    render() {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
}

export default withScrollWatch
