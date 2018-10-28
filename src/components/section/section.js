import React from 'react'
import { SectionStyles, SectionTitle, SectionContent } from './styles'

export const Section = ({ ...props }) => {
  return (
    <SectionStyles>
      <div className="container">
        <SectionTitle>{props.title}</SectionTitle>
        <SectionContent>{props.children}</SectionContent>
      </div>
    </SectionStyles>
  )
}
