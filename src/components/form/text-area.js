import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ identifier, label }) => (
  <div style={{ marginBottom: 20 }}>
    <label htmlFor={identifier}>
      { label }
    </label>
    <textarea name={identifier} id={identifier} rows="4" style={{ width: '100%' }} />
  </div>
)

TextArea.propTypes = {
  identifier: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default TextArea
