import React from 'react'
import TrackVisibility from 'react-on-screen'
import { SectionStyles, SectionTitle } from '../section/styles/index'
import Map from './map'

const Location = () => (
  <SectionStyles>
    <div className="container">
      <SectionTitle>Schauen Sie, vielleicht sind wir nicht so weit</SectionTitle>
    </div>
    <div style={{ height: '75vh', marginTop: '4rem', position: 'relative' }}>
      <TrackVisibility once>
        {({ isVisible }) => isVisible && <Map />}
      </TrackVisibility>
    </div>
  </SectionStyles>
)

export default Location
