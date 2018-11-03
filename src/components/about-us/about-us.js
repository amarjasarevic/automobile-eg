import React from 'react'
import { Section } from '../section/section'
import { StaticQuery, graphql } from 'gatsby'
import { AboutUsItems, ItemBlock, ImageHolder, ItemContent } from './styles'

import onTheSpotImage from '../../images/on-the-spot.png';
import phoneOrMailImage from '../../images/phone-or-mail.png';
import contactFormImage from '../../images/contact-form.png';

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
        <Section title={content.aboutUsTitle} id="about">
          <AboutUsItems>
            {content.aboutUsItems.map((item) => {

              const image = item.id === 1 ? onTheSpotImage : item.id === 2 ? contactFormImage : phoneOrMailImage

              let imageStyle = {}
              if (item.id === 1) {
                imageStyle = { marginTop: 35 };
              } else if (item.id === 2) {
                imageStyle = { marginTop: - 75 };
              } else {
                imageStyle = { marginTop: 20, marginLeft: 30 };
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
