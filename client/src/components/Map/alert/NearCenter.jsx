import React, { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import * as S from './Styles';

function NearCenter({ method, submenu1, submenu2, submenu3 }) {
  const newScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.addEventListener('load', () => {
        resolve();
      });
      script.addEventListener('error', (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    // 카카오맵 스크립트 읽어오기
    const myScript = newScript(
      `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}`,
    );

    // 스크립트 읽기 완료 후 카카오맵 설정
    myScript.then(() => {
      console.log('script loaded!!!');
      const { kakao } = window;
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), // 좌표설정
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options); // 맵생성
        // 마커설정
        const markerPosition = new kakao.maps.LatLng(
          37.56000302825312,
          126.97540593203321,
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    });
  }, []);

  // * 검색버튼 클릭시 이벤트핸들러
  const handleSearchInput = (e) => {
    e.preventDefault();
    // 재사용하는 컴포넌트임으로 함수가 조건에 따라 다르게 동작해야 함.
    // method === 'alert'일 경우 가까운 보호소 찾기 오청 실행
    // method === 'adopt'일 경우 입양 가능한 센터 찾기 요청 실행
  };

  return (
    <S.NearCenterLayout>
      <S.SearchInputWrapper ref={submenu1}>
        <S.InputDescBox>
          <FaMapMarkerAlt />
          <span>발견 위치</span>
        </S.InputDescBox>
        <S.SearchForm>
          <S.SearchInput type="text" />
          <S.SearchBtn type="button" onClick={handleSearchInput}>
            {method === 'alert' && <span>가까운 보호소 찾기</span>}
            {method === 'adopt' && <span>입양 가능한 센터 찾기</span>}
          </S.SearchBtn>
        </S.SearchForm>
      </S.SearchInputWrapper>
      <div ref={submenu2}>
        {method === 'alert' && (
          <S.SectionTitle>주변 유기견 센터</S.SectionTitle>
        )}
        {method === 'adopt' && (
          <S.SectionTitle>입양 가능한 센터</S.SectionTitle>
        )}
      </div>
      <S.MapContainer id="map" />
      <div ref={submenu3}>
        <S.SectionTitle>메뉴3</S.SectionTitle>
      </div>
    </S.NearCenterLayout>
  );
}

export default NearCenter;
