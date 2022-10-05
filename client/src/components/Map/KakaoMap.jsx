/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import * as S from './MapStyles';
import SearchResults from './SearchResults';
import { AutoComplete } from 'antd';

const { kakao } = window;

function KakaoMap({ method, keyword, submenu2, scrollToSection }) {
  const ps = new kakao.maps.services.Places();
  const bounds = new kakao.maps.LatLngBounds();
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (!map) return;
    let markers = [];

    ps.keywordSearch(keyword, async (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
      setPlaces([...data]);
    });
  }, [keyword]);

  return (
    <>
      <S.StyledMap // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <S.StyledMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: '#000' }}>{marker.content}</div>
            )}
          </S.StyledMarker>
        ))}
      </S.StyledMap>
      <SearchResults
        places={places}
        submenu2={submenu2}
        scrollToSection={scrollToSection}
      />
    </>
  );
}

export default KakaoMap;
