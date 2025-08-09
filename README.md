<<<<<<< HEAD
# wedding_invite
mobile_wedding_invite
=======
# 모바일 청첩장 - 이정필 & 장유지 (Vue 3 + Vite)

요청하신 순서에 맞춰 구성된 **순수 Vue 3** 템플릿입니다. (카카오톡 공유 / RSVP 없음)
1) 웨딩사진 → 2) 결혼합니다 소개글 → 3) 계좌 → 4) 예식안내+캘린더 → 5) 갤러리 → 6) 이룸웨딩컨벤션 위치

## 사용법
```bash
npm install
npm run dev   # http://localhost:5173
```

### 설정 (`src/config.js`)
- `couple`: { groom: '이정필', bride: '장유지' }
- `dateISO`: 예식 일시 (ISO)
- `intro`: 소개글
- `venue`: { name: '이룸웨딩컨벤션', address: '정확한 주소', lat: 00, lng: 00 }
  > 카카오맵을 위해 **실제 좌표(lat,lng)** 로 교체하고, 카카오 개발자 콘솔에서 **JavaScript 키** 발급 및 도메인 등록을 해주세요.
- `accounts`: 계좌목록 (복사 버튼 포함)
- `gallery`: 첫 장은 메인 사진으로 쓰이며, 이후는 갤러리에 노출됩니다.

### 빌드/배포
```bash
npm run build
# dist/ 를 Netlify / Vercel / GitHub Pages에 업로드
```

MIT License
>>>>>>> 74fa437 (init: wedding invite)
