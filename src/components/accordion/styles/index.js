import styled from 'react-emotion'

export const AccordionStyles = styled('div')`
  position: relative;
`

export const AccordionSectionStyles = styled('div')`
  border-bottom: 1px solid rgba(151, 151, 151, 0.15);
`

export const AccordionToggle = styled('div')`
  position: relative;
  padding: 15px 20px;
  background-color: ${props => (props.toggled ? '#fab700' : 'white')};
  line-height: 1.3;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  transition: color 0.35s;
  color: ${props => (props.toggled ? 'hsla(0,0%,0%,0.9)' : 'inherit')};

  &:hover {
    color: ${props => (props.toggled ? 'hsla(0,0%,0%,0.9)' : '#fab700')};
    transition-duration: 0.175s;
  }
`

export const AccordionContent = styled('div')`
  background-color: #f5f8fc;

  p {
    margin-top: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const AccordionInner = styled('div')`
  padding: 20px 20px 30px;
`
