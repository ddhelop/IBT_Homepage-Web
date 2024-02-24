'use client'

import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'

interface ILocationProps {
  lat: number
  lng: number
}

function GoogleMapComponent(props: ILocationProps) {
  const [loading, setLoading] = useState(true) // 로딩 상태 추가
  const [containerStyle, setContainerStyle] = useState({
    width: '33.85vw', // PC 화면 기준 너비
    height: '33.85vw', // PC 화면 기준 높이
  })

  // 화면 크기 변경에 따른 스타일 업데이트를 처리하는 함수입니다.
  const updateContainerStyle = () => {
    if (window.innerWidth < 768) {
      // 모바일 화면으로 가정 (768px 기준)
      setContainerStyle({
        width: '290px',
        height: '290px',
      })
    } else if (window.innerWidth < 1024) {
      setContainerStyle({
        width: '380px', // PC 화면 기준 너비
        height: '380px', // PC 화면 기준 높이
      })
    } else {
      setContainerStyle({
        width: '33.85vw', // PC 화면 기준 너비
        height: '33.85vw', // PC 화면 기준 높이
      })
    }
  }

  // 화면 크기 변경 시 스타일을 업데이트하기 위한 useEffect 훅입니다.
  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 초기 스타일을 설정합니다.
    updateContainerStyle()
    // resize 이벤트 리스너를 추가합니다.
    window.addEventListener('resize', updateContainerStyle)
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('resize', updateContainerStyle)
    }
  }, [])

  const center = {
    lat: props.lat,
    lng: props.lng,
  }

  // 로딩 스켈레톤 스타일
  const skeletonStyle = {
    ...containerStyle,
    backgroundColor: 'grey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    color: 'white',
  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCaDpdV3yidXTBE2CfjfGEpYw9zwdq_aGc"
      onLoad={() => setLoading(false)} // API 로드 완료 시 로딩 상태 변경
    >
      {loading ? (
        // 로딩 중 스켈레톤 표시
        <div style={skeletonStyle}>loading...</div>
      ) : (
        // 로딩 완료 시 GoogleMap 표시
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
          <MarkerF
            position={center}
            icon={'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}
          ></MarkerF>
        </GoogleMap>
      )}
    </LoadScript>
  )
}

export default React.memo(GoogleMapComponent)
