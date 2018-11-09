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

import headerBg from './tow-truck.jpg'

export default ({ ...props }) => (
  <StaticQuery
    query={graphql`
      query HeaderContentQuery {
        allContentJson {
          edges {
            node {
              headerTitle
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
      const { showAction } = props || false

      return (
        <Header
          style={{
            backgroundImage: `url(${headerBg})`,
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

                {showAction && (
                  <CallToAction>
                    <Link to="/kontaktformular/">{content.headerCallToAction}</Link>
                  </CallToAction>
                )}

                {!showAction && (<div style={{ height: 44 }} />)}
              </Content>
            </HeaderContent>
          </div>
        </Header>
      )
    }}
  />
)
