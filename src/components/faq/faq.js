import React from 'react'
import { Section } from '../section/section'
import Accordion, { AccordionSection } from '../accordion'
import { StaticQuery, graphql } from 'gatsby'
import { FaqRow } from './styles'

export default () => (
  <StaticQuery
    query={graphql`
      query FaqContentQuery {
        allContentJson {
          edges {
            node {
              faqTitle
              faqSubtitle
              faqItems {
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
        <Section title={content.faqTitle} subtitle={content.faqSubtitle}>
          <FaqRow>
            <Accordion>
              {content.faqItems.map((item, i) => {
                return (
                  <AccordionSection key={`faq-${item.id}`} title={item.title}>
                    <p>{item.content}</p>
                  </AccordionSection>
                )
              })}
            </Accordion>
          </FaqRow>
        </Section>
      )
    }}
  />
)
