import React from 'react'
import {
  SectionStyles,
  SectionTitle,
  SectionSubtitle,
  SectionContent,
} from './styles'

export const Section = ({ ...props }) => {
  return (
    <SectionStyles>
      <div className="container">
        <SectionTitle>{props.title}</SectionTitle>
        {props.subtitle && <SectionSubtitle>{props.subtitle}</SectionSubtitle>}
        <SectionContent>{props.children}</SectionContent>
      </div>
    </SectionStyles>
  )
}
