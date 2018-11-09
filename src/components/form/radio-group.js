import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { RadioGroupContent } from './styles'

const RadioGroup = ({ identifier, label, options, required }) => (
  <RadioGroupContent>
    <label htmlFor={identifier}>
      { label } { required && '*' }
    </label>
    { options.map(({ key, value }) =>
        <Fragment key={key}>
          <input type="radio" name={identifier} id={key} value={key} required={required} />
          <label htmlFor={key}>{ value }</label>
        </Fragment>
      )
    }
  </RadioGroupContent>
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
