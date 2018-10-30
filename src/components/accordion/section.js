import React, { PureComponent } from 'react'
import { VelocityTransitionGroup } from 'velocity-react'
import {
  AccordionSectionStyles,
  AccordionToggle,
  AccordionContent,
  AccordionInner,
} from './styles'

export default class AccordionSection extends PureComponent {
  toggle = () => {
    this.props.handleClick(this.props.index)
  }

  render() {
    return (
      <AccordionSectionStyles>
        <AccordionToggle toggled={this.props.selected} onClick={this.toggle}>
          {this.props.title}
        </AccordionToggle>
        <VelocityTransitionGroup
          component="div"
          enter={{
            animation: 'slideDown',
            duration: 300,
            style: { height: '' },
          }}
          leave={{
            animation: 'slideUp',
            duration: 175,
          }}
        >
          {this.props.selected && (
            <AccordionContent>
              <AccordionInner>{this.props.children}</AccordionInner>
            </AccordionContent>
          )}
        </VelocityTransitionGroup>
      </AccordionSectionStyles>
    )
  }
}
