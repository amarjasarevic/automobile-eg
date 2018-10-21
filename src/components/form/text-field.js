import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ identifier, label, type }) => (
  <div style={{ marginBottom: 20 }}>
    <label htmlFor={identifier}>
      { label }
    </label>
    <input type={type || 'text'} name={identifier} id={identifier} style={{ width: '100%' }} />
  </div>
)

TextField.propTypes = {
  identifier: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default TextField
