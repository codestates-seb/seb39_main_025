/* 회원가입, 로그인, 인가 요청을 위한 api 요청 함수들 */
// TODO: 인가 요청을 위해 헤더에 일일히 토큰값을 번거롭게 넣지 않도록 리팩토링할 예정
// 현재는 사용하지 않는 파일임!
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dec4-49-169-198-207.jp.ngrok.io/api/',
  headers: {},
});
