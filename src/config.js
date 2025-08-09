export default {
  couple: { groom: '이정필', bride: '장유지' },
  dateISO: '2026-02-07T11:00:00+09:00',
  intro: `저희 두 사람이 소중한 분들을 모시고 한 가정을 이루려 합니다.
바쁘시더라도 오셔서 축복해 주시면 더없는 기쁨이겠습니다.`,

  venue: {
    name: '이룸웨딩컨벤션',
    address: '서울 ○○구 ○○로 123 (정확한 주소로 교체하세요)',
    // TODO: 실제 좌표로 교체하세요.
    lat: 37.5665,
    lng: 126.9780
  },

  kakao: { appKey: 'YOUR_KAKAO_APP_KEY' },

  accounts: [
    { label: '신랑 이정필', bank: '신한', number: '110-545-887230', name: '이정필' },
    { label: '신부 장유지', bank: '국민', number: '772001-04-166903', name: '장유지' }
  ],

  // ✅ Vite가 빌드 시 정적 파일로 처리할 수 있게 모두 new URL 사용
  gallery: [
    new URL('./assets/images/wedding1.jpg', import.meta.url).href,
    new URL('./assets/images/wedding2.jpg', import.meta.url).href,
    new URL('./assets/images/wedding3.jpg', import.meta.url).href,
    new URL('./assets/images/wedding4.jpg', import.meta.url).href,
    new URL('./assets/images/wedding5.jpg', import.meta.url).href,
    new URL('./assets/images/wedding6.jpg', import.meta.url).href,
    new URL('./assets/images/wedding7.jpg', import.meta.url).href,
    new URL('./assets/images/wedding8.jpg', import.meta.url).href,
    new URL('./assets/images/wedding9.jpg', import.meta.url).href,
    new URL('./assets/images/wedding10.jpg', import.meta.url).href,
    new URL('./assets/images/wedding11.jpg', import.meta.url).href,
    new URL('./assets/images/wedding12.jpg', import.meta.url).href,
    new URL('./assets/images/wedding13.jpg', import.meta.url).href,
    new URL('./assets/images/wedding14.jpg', import.meta.url).href,
    new URL('./assets/images/wedding15.jpg', import.meta.url).href
  ]
}