import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header/header'
import Footer from './footer/footer'
import ScrollUp from './scroll-up/scroll-up'
import './layout.css'

const Layout = ({ children, onNavigate }) => (
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
        <Header onNavigate={onNavigate} />
        <div>{children}</div>
        <ScrollUp />
        <Footer />
      </>
    )}
  />
)

export default Layout
