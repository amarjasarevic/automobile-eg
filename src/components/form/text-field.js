import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ identifier, label, type, required }) => (
  <div style={{ marginBottom: 20 }}>
    <label htmlFor={identifier}>
      { label } { required && '*' }
    </label>
    <input type={type || 'text'} name={identifier} id={identifier} style={{ width: '100%' }} required={required} />
  </div>
)

TextField.propTypes = {
  identifier: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
}

export default TextField
