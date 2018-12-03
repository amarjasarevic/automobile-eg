import React from 'react'
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react'

class AutomobileEGMap extends React.Component {
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
      <Map
        item
        xs={12}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={{ lat: 48.15884, lng: 11.4187013 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={'Automobile EG'}
          position={{ lat: 48.15884, lng: 11.4187013 }}
          name={'Automobile EG'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>Automobile EG</h4>
            <p>
              Hohenrechbergstraße 12-14, 81245 München
              <br/>
              +49 172 8 666 828
            </p>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper(
  () => ({
      apiKey: 'AIzaSyAIyuRRHBRsMGR-z-mkv0_V73j_P4zewq8',
      language: 'de',
    }
  ))(AutomobileEGMap)
