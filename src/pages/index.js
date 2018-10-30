import React from 'react'
import Layout from '../components/layout'
import Home from '../components/home/home'
import About from '../components/about/about'
import Contact from '../components/contact'
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
  /* for edge cases: */
  width: 100%;
  max-width: 100%;
}

@media (min-width: 768px) {
  .container{
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container{
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container{
    width: 1170px;
  }
}
`

const IndexPage = () => {
  return (
    <Layout>
      <Home showAction />
      <About />
      <Contact />
    </Layout>
  )
}
export default IndexPage
