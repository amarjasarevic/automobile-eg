import React from 'react'
import { Section } from '../section/section'
import { StaticQuery, graphql } from 'gatsby'
import { AboutUsItems, ItemBlock, ImageHolder, ItemContent } from './styles'

import onTheSpotImage from '../../images/on-the-spot.png'
import phoneOrMailImage from '../../images/phone-or-mail.png'
import contactFormImage from '../../images/contact-form.png'

export default () => (
  <StaticQuery
    query={graphql`
      query AboutUsContentQuery {
        allContentJson {
          edges {
            node {
              aboutUsTitle
              aboutUsItems {
                id
                image
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
        <Section title={content.aboutUsTitle}>
          <AboutUsItems>
            {content.aboutUsItems.map((item) => {

              let image = ''
              let imageStyle = {}

              switch (item.id) {
                case 1:
                  image = onTheSpotImage
                  imageStyle = { marginTop: 35 }
                  break

                case 2:
                  image = contactFormImage
                  imageStyle = { marginTop: - 75 }
                  break

                case 3:
                  image = phoneOrMailImage
                  imageStyle = { marginTop: 20, marginLeft: 30 }
                  break

                default:
                  break
              }

              return (
                <ItemBlock key={item.id}>
                  <ImageHolder style={{ marginBottom: item.id === 2 ? 55 : 0 }}>
                    <img src={image} alt={item.title} style={imageStyle} />
                  </ImageHolder>
                  <ItemContent>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </ItemContent>
                </ItemBlock>
              )
            })}
          </AboutUsItems>
        </Section>
      )
    }}
  />
)
