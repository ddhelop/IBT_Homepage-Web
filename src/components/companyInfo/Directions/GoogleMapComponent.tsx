'use client'

import React from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'

interface ILocationProps {
  lat: number
  lng: number
}

function GoogleMapComponent(props: ILocationProps) {
  const containerStyle = {
    width: '450px',
    height: '470px',
  }
  const center = {
    lat: props.lat,
    lng: props.lng,
  }
  return (
    // google Map
    <LoadScript googleMapsApiKey="AIzaSyCaDpdV3yidXTBE2CfjfGEpYw9zwdq_aGc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <MarkerF
          position={center}
          icon={'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}
        ></MarkerF>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMapComponent)
