import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import {
  Header,
  OverlayBg,
  HeaderContent,
  Content,
  CallToAction,
  HeaderLink,
} from './styles'
import headerBg from './bmw.jpeg'

import './home.css'

export default () => (
  <StaticQuery
    query={graphql`
      query MainContentQuery {
        allContentJson {
          edges {
            node {
              headerTitle
              headerSubtitle
              headerTelephone
              headerEmail
              headerCallToAction
            }
          }
        }
      }
    `}
    render={data => {
      const content = data.allContentJson.edges[0].node
      return (
        <Header
          style={{
            background: `url(${headerBg}) center`,
          }}
        >
          <OverlayBg />
          <div className="container">
            <HeaderContent>
              <Content>
                <h1>{content.headerTitle}</h1>
                <h2>
                  <HeaderLink href={`tel:${content.headerTelephone}`}>
                    {content.headerTelephone}
                  </HeaderLink>
                  <HeaderLink href={`mailto:${content.headerEmail}`}>
                    {content.headerEmail}
                  </HeaderLink>
                </h2>

                <CallToAction>
                  <Link to="/buy-form/">{content.headerCallToAction}</Link>
                </CallToAction>
              </Content>
            </HeaderContent>
          </div>
        </Header>
      )
    }}
  />
)

// const Home = () => (
//   <h1>home root</h1>
//   // <div className="home__root">
//   //   <div className="home__content">
//   //     <h1>We buy your car</h1>
//   //     <h1>
//   //       <a href="tel:089-51299770" className="home__contact">
//   //         089-51299770
//   //       </a>
//   //     </h1>
//   //     <h1>
//   //       <a href="mailto:automobile-eg@gmail.com" className="home__contact">
//   //         automobile-eg@gmail.com
//   //       </a>
//   //     </h1>
//   //     <h2>You can contact us any time!</h2>
//   //     <h5>
//   //       <Link to="/buy-form/" className="home__link">
//   //         <div />
//   //         <div />
//   //         <span>or you prefer forms</span>
//   //       </Link>
//   //     </h5>
//   //   </div>
//   // </div>
// )
