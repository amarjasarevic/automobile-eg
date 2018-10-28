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

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderContentQuery {
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
