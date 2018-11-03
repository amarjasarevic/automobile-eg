import React from 'react'
import Layout from '../components/layout'
import Home from '../components/home/home'
import AboutUs from '../components/about-us/about-us'
import About from '../components/about/about'
// import Faq from '../components/faq/faq'
import Location from '../components/location'
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

const IndexPage = () => {
  return (
    <Layout>
      <Home showAction />
      <div id="about">
        <About />
        <AboutUs />
      </div>
      {/* <Faq /> */}
      <Location />
    </Layout>
  )
}
export default IndexPage
