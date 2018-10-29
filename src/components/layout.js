import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header/header'
import Footer from './footer/footer'
import ScrollUp from './scroll-up'
import './layout.css'

const MainContent = styled('div')`
  margin: '0 auto',
  padding-bottom: '50px',
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainContent>{children}</MainContent>
        <ScrollUp />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
