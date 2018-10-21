import React from 'react'
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react'

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    return (
      <div id="contact" style={{ height: '75vh', marginBottom: 100, paddingTop: 50, position: 'relative' }}>
        <Map
          item
          xs={12}
          google={this.props.google}
          onClick={this.onMapClick}
          zoom={14}
          initialCenter={{ lat: 48.14434, lng: 11.43694 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            title={'Automobile EG'}
            position={{ lat: 48.14434, lng: 11.43694 }}
            name={'Automobile EG'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h4>Automobile EG</h4>
              <p>
                Bodenseestraße 129, 81243 München
                <br/>
                +49 89 51299770
              </p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  api: (process.env.GOOGLE_API_KEY_GOES_HERE)
})(Contact)
