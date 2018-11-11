import React from 'react'
import { Section } from '../section/section'
import { StaticQuery, graphql } from 'gatsby'
import { AdvantagesContainer, AdvantagesItem } from './styles/index'

import cashImage from '../../images/cash.png'
import deregistrationImage from '../../images/deregistration.png'
import noAdsImage from '../../images/no-ads.png'
import noCallsImage from '../../images/no-calls.png'
import pickUpImage from '../../images/pick-up.png'
import timeImage from '../../images/time.png'

export default () => (
  <StaticQuery
    query={graphql`
      query AdvantagesContentQuery {
        allContentJson {
          edges {
            node {
              advantagesTitle
              advantagesItems {
                id
                text
              }
            }
          }
        }
      }
    `}
    render={data => {
      const content = data.allContentJson.edges[0].node

      return (
        <Section title={content.advantagesTitle}>
          <AdvantagesContainer>
            {content.advantagesItems.map((item) => {

              let image = ''

              switch (item.id) {
                case 1:
                  image = timeImage
                  break

                case 2:
                  image = noCallsImage
                  break

                case 3:
                  image = noAdsImage
                  break

                case 4:
                  image = cashImage
                  break

                case 5:
                  image = pickUpImage
                  break

                case 6:
                  image = deregistrationImage
                  break

                default:
                  break
              }

              return (
                <AdvantagesItem key={item.id}>
                  <img src={image} alt={item.text} />
                  <div>{item.text}</div>
                </AdvantagesItem>
              )
            })}
          </AdvantagesContainer>
        </Section>
      )
    }}
  />
)
