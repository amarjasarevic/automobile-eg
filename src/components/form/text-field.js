import React from 'react'
import PropTypes from 'prop-types'
import { TextContent } from './styles'

const TextField = ({ identifier, label, type, required }) => (
  <TextContent>
    <label htmlFor={identifier}>
      { label } { required && '*' }
    </label>
    <input type={type || 'text'} name={identifier} id={identifier} required={required} />
  </TextContent>
)

TextField.propTypes = {
  identifier: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
}

export default TextField
