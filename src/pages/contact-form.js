import React from 'react'
import Layout from '../components/layout'
import Home from '../components/home/home'
import TextField from '../components/form/text-field'
import TextArea from '../components/form/text-area'
import RadioGroup from '../components/form/radio-group'
import './contact-form.css'

const fuelOptions = [
  { key: 'petrol', value: 'Petrol' },
  { key: 'diesel', value: 'Diesel' },
  { key: 'lpg', value: 'LPG' },
]

const doorsOptions = [
  { key: '2/3', value: '2/3' },
  { key: '4/5', value: '4/5' },
]

class ContactForm extends React.Component {
  constructor() {
    super()

    this.formElement = React.createRef()
  }

  isValidValue = element => element.type !== 'radio' || element.checked

  handleClear = () => {
    this.formElement.current.reset()
  }

  handleSubmit = () => {
    const request = {}

    const elements = this.formElement.current.elements

    for (let i = 0; i < elements.length; i += 1) {
      if (elements[i].name && this.isValidValue(elements[i])) {
        request[elements[i].name] = elements[i].value
      }
    }

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(request),
    }

    fetch('http://localhost:8080/new-car', fetchOptions)
      .then(() => {
        this.handleClear()
        console.log('Request successfully sent.')
      })
      .catch(() => console.log('Something wrong. Please try again.'))
  }

  render() {
    return (
      <Layout>
        <Home />
        <div className="buy-form__root">
          <h1>Buy form</h1>
          <form ref={this.formElement} onSubmit={this.handleSubmit}>
            <p>Fields marked with * are required.</p>
            <section>
              <h3>Contact data</h3>
              <div className="buy-form__fields">
                <TextField identifier={'name'} label={'Full name'} />
                <TextField identifier={'email'} label={'Email'} type={'email'} />
              </div>
              <div className="buy-form__fields">
                <TextField identifier={'phone'} label={'Phone'} type={'tel'} required />
                <TextField identifier={'location'} label={'Post code / City'} required />
              </div>
            </section>
            <section>
              <h3>Car data</h3>
              <div className="buy-form__fields">
                <TextField identifier={'brand'} label={'Brand'} required />
                <TextField identifier={'type'} label={'Type'} required />
              </div>
              <div className="buy-form__fields">
                <TextField
                  identifier={'registration'}
                  label={'First registration'}
                  type={'date'}
                  required
                />
                <RadioGroup
                  identifier={'fuel'}
                  label={'Fuel'}
                  options={fuelOptions}
                  required
                />
              </div>
              <div className="buy-form__fields">
                <TextField identifier={'mileage'} label={'Mileage'} />
                <TextField identifier={'tuv'} label={'TÜV'} />
              </div>
              <div className="buy-form__fields">
                <TextField identifier={'ps'} label={'PS'} type={'number'} />
                <RadioGroup
                  identifier={'doors'}
                  label={'Doors'}
                  options={doorsOptions}
                />
              </div>
              <div className="buy-form__fields">
                <TextField identifier={'colour'} label={'Colour'} />
                <TextField identifier={'price'} label={'Price'} type={'number'} />
              </div>
              <div className="buy-form__fields">
                <TextArea identifier={'displacement'} label={'Displacement'} />
                <TextArea identifier={'other'} label={'Other info'} />
              </div>
            </section>
            <section>
              <div className="buy-form__actions">
                <button type="button" onClick={this.handleClear}>
                  Clear
                </button>
                <button type="submit">
                  Send request
                </button>
              </div>
            </section>
          </form>
        </div>
      </Layout>
    )
  }
}

export default ContactForm
