import React from 'react'
import PropTypes from 'prop-types'
import { TextContent } from './styles'

const TextArea = ({ identifier, label }) => (
  <TextContent>
    <label htmlFor={identifier}>
      { label }
    </label>
    <textarea name={identifier} id={identifier} rows="4" />
  </TextContent>
)

TextArea.propTypes = {
  identifier: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default TextArea
