import React from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'

function Map({lat, lng}) {

  // TODO :
  // Markers 표시를 위한건데 왜 안되지..
  // const navermaps = window.naver.maps

  return  <RenderAfterNavermapsLoaded
            ncpClientId={'vkuzj8184p'} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
          >
          <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
              width: '100%', // 네이버지도 가로 길이
              height: '85vh' // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat, lng }} // 지도 초기 위치
            defaultZoom={17} // 지도 초기 확대 배율
          >
            {/* // TODO : */}
            {/* <Marker
              key={1}
              position={new navermaps.LatLng(37.551229, 126.988205)}
              animation={2}
              onClick={() => {alert('여기는 N서울타워입니다.');}}
            /> */}
          </NaverMap>
        </RenderAfterNavermapsLoaded>
}

export default Map