import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // GitHub Pages '프로젝트 페이지' 배포면 저장소 이름과 동일하게!
  base: '/wedding_invite/',
  // 간단 배포 방식: Pages가 /docs 폴더를 서빙하도록 빌드 결과 위치 변경
  build: { outDir: 'docs' },
  server: { port: 5173, open: true }
})