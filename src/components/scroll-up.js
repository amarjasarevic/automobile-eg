import React from 'react'
import './scroll-up.css'

const DISTANCE = 50;
const SPEED = 250;

class ScrollUp extends React.Component {
  constructor() {
    super();

    this.state = {
      showScrollUp: false
    }
  }

  componentDidMount() {
    this.checkForScrollToTop();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  checkForScrollToTop = () => {
    const show = document.body.scrollTop > DISTANCE || document.documentElement.scrollTop > DISTANCE;

    this.setState({ showScrollUp: show });
  }

  handleScroll = () => {
    this.checkForScrollToTop();
  }

  scrollUp = () => {
    const { performance, requestAnimationFrame } = window;

    if (SPEED <= 0 || typeof performance === 'undefined' || typeof requestAnimationFrame === 'undefined') {
      return ScrollUp.setScrollTop(0);
    }

    const start = performance.now();
    const initScrollTop = ScrollUp.getScrollTop();
    const pxsToScrollBy = initScrollTop - 0;

    requestAnimationFrame(step);

    function step(timestamp) {
      const delta = timestamp - start;
      const progress = Math.min(delta / SPEED, 1);
      ScrollUp.setScrollTop(initScrollTop - Math.round(progress * pxsToScrollBy));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  }

  static getScrollTop = () =>
    document.body.scrollTop || ((document.documentElement && document.documentElement.scrollTop) || 0);

  static setScrollTop = (value) => {
    document.body.scrollTop = value;
    if (document.documentElement) {
      document.documentElement.scrollTop = value;
    }
  }

  render() {
    const scrollUpStyle = this.state.showScrollUp ? { bottom: '2rem', opacity: 0.9 } : {};

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

export default ScrollUp;