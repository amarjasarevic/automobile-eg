import React from 'react'
import { Section } from '../section/section'
import { StaticQuery, graphql } from 'gatsby'
import { AboutRow, FeatureItem, ItemTitle, ItemContent } from './styles'

export default () => (
  <StaticQuery
    query={graphql`
      query AboutContentQuery {
        allContentJson {
          edges {
            node {
              aboutTitle
              aboutItems {
                id
                title
                content
              }
            }
          }
        }
      }
    `}
    render={data => {
      const content = data.allContentJson.edges[0].node
      return (
        <Section title={content.aboutTitle}>
          <AboutRow>
            {content.aboutItems.map((item, i) => {
              return (
                <FeatureItem key={i}>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemContent>{item.content}</ItemContent>
                </FeatureItem>
              )
            })}
          </AboutRow>
        </Section>
      )
    }}
  />
)
