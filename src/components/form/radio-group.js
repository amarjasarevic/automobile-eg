import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const RadioGroup = ({ identifier, label, options, required }) => (
  <div style={{ marginBottom: 20 }}>
    <label htmlFor={identifier} style={{ display: 'block' }}>
      { label } { required && '*' }
    </label>
    { options.map(({ key, value }) =>
        <Fragment key={key}>
          <input type="radio" name={identifier} id={key} value={key} style={{ marginLeft: 30 }} required={required} />
          <label htmlFor={key} style={{ marginLeft: 10 }}>{ value }</label>
        </Fragment>
      )
    }
  </div>
)

RadioGroup.propTypes = {
  identifier: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  required: PropTypes.bool,
}

export default RadioGroup
