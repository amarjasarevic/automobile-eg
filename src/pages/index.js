import React, { PureComponent } from 'react'
import Layout from '../components/layout'
import Home from '../components/home/home'
import AboutUs from '../components/about-us/about-us'
import About from '../components/about/about'
import Advantages from '../components/advantages/advantages'
import Location from '../components/location/location'
import { injectGlobal } from 'emotion'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  .container {
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    max-width: 100%;
  }

  @media (max-width: 959px) {
    .container {
      width: 90%;
    }
  }

  @media (min-width: 960px) and (max-width: 1199px) {
    .container {
      width: 930px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`

class IndexPage extends PureComponent {
  constructor() {
    super()

    this.homeRef = React.createRef()
    this.aboutRef = React.createRef()
    this.locationRef = React.createRef()
  }

  componentDidMount() {
    const componentName = localStorage.getItem('sectionToNavigate')

    setTimeout(() => {
      this.scrollToComponent(componentName)

      localStorage.removeItem('sectionToNavigate')
    }, 100)
  }

  componentWillUnmount() {
    localStorage.removeItem('sectionToNavigate')
  }

  scrollToComponent = componentName => {
    if (componentName === 'about') {
      this.scrollTo(this.aboutRef.current.offsetTop)
    } else if (componentName === 'location') {
      this.scrollTo(this.locationRef.current.offsetTop)
    } else {
      this.scrollTo(this.homeRef.current.offsetTop)
    }
  }

  scrollTo = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <Layout onNavigate={this.scrollToComponent}>
        <div ref={this.homeRef}>
          <Home showAction />
        </div>
        <div ref={this.aboutRef}>
          <About />
          <AboutUs />
          <Advantages />
        </div>
        <div ref={this.locationRef}>
          <Location />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
