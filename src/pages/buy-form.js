import React from 'react'
import Layout from '../components/layout'
import Home from '../components/home/home'
import TextField from '../components/form/text-field'
import TextArea from '../components/form/text-area'
import RadioGroup from '../components/form/radio-group'
import './buy-form.css'

const fuelOptions = [
  { key: 'petrol', value: 'Petrol' },
  { key: 'diesel', value: 'Diesel' },
  { key: 'lpg', value: 'LPG' },
]

const doorsOptions = [
  { key: '2/3', value: '2/3' },
  { key: '4/5', value: '4/5' },
]

class BuyForm extends React.Component {
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
          <form ref={this.formElement}>
            <section>
              <h3>Contact data</h3>
              <TextField identifier={'name'} label={'Full name'} />
              <TextField identifier={'email'} label={'Email'} type={'email'} />
              <TextField identifier={'phone'} label={'Phone'} type={'tel'} />
              <TextField identifier={'location'} label={'Post code / City'} />
            </section>
            <section>
              <h3>Car data</h3>
              <TextField identifier={'brand'} label={'Brand'} />
              <TextField identifier={'type'} label={'Type'} />
              <RadioGroup
                identifier={'fuel'}
                label={'Fuel'}
                options={fuelOptions}
              />
              <TextField
                identifier={'registration'}
                label={'First registration'}
                type={'date'}
              />
              <TextField identifier={'mileage'} label={'Mileage'} />
              <TextField identifier={'tuv'} label={'TÜV'} />
              <TextField identifier={'colour'} label={'Colour'} />
              <TextField identifier={'ps'} label={'PS'} type={'number'} />
              <RadioGroup
                identifier={'doors'}
                label={'Doors'}
                options={doorsOptions}
              />
              <TextField identifier={'displacement'} label={'Displacement'} />
              <TextField identifier={'price'} label={'Price'} type={'number'} />
              <TextArea identifier={'other'} label={'Other info'} />
            </section>
            <section>
              <div className="buy-form__actions">
                <button type="button" onClick={this.handleClear}>
                  Clear
                </button>
                <button type="button" onClick={this.handleSubmit}>
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

export default BuyForm
