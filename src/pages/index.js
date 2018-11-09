import React from 'react'
import Layout from '../components/layout'
import Home from '../components/home/home'
import AboutUs from '../components/about-us/about-us'
import About from '../components/about/about'
import Location from '../components/location'
import { injectGlobal } from 'emotion'
import scrollToComponent from 'react-scroll-to-component'
// import Faq from '../components/faq/faq'

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

class IndexPage extends React.Component {
  constructor() {
    super()

    this.homeRef = React.createRef()
    this.aboutRef = React.createRef()
    this.locationRef = React.createRef()
  }

  componentDidMount() {
    const componentName = localStorage.getItem('sectionToNavigate')

    setTimeout(() => {
      this.scrollTo(componentName)

      localStorage.removeItem('sectionToNavigate')
    }, 100)
  }

  scrollTo = (componentName) => {
    if (componentName === 'about') {
      scrollToComponent(this.aboutRef.current, { align: 'top' })
    } else if (componentName === 'location') {
      scrollToComponent(this.locationRef.current, { align: 'top' })
    } else {
      scrollToComponent(this.homeRef.current, { align: 'top' })
    }
  }

  render() {
    return (
      <Layout onNavigate={this.scrollTo}>
        <Home showAction ref={this.homeRef} />
        <About ref={this.aboutRef} />
        <AboutUs />
        <Location ref={this.locationRef} />
      </Layout>
    )
  }
}

export default IndexPage
