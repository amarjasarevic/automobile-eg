import React, { PureComponent, Children, cloneElement } from 'react'
import { AccordionStyles } from './styles'

export default class Accordion extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      selectedSectionIndex: -1,
    }
  }

  getAdditionalProps = (index, props) => ({
    handleClick: this.toggle,
    index,
    selected: index === this.state.selectedSectionIndex,
    ...props,
  })

  getChildrenSectionsWithProps = () => {
    return Children.map(this.props.children, (child, index) =>
      cloneElement(child, this.getAdditionalProps(index, child.props))
    )
  }

  toggle = sectionIndex => {
    if (this.state.selectedSectionIndex === sectionIndex) {
      this.setState({ selectedSectionIndex: -1 })
    } else {
      this.setState({ selectedSectionIndex: sectionIndex })
    }
  }

  render() {
    const childrenSectionsWithProps = this.getChildrenSectionsWithProps()

    return <AccordionStyles>{childrenSectionsWithProps}</AccordionStyles>
  }
}
