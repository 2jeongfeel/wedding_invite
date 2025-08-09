<script setup>
import cfg from './config'
import Hero from './components/Hero.vue'
import Intro from './components/Intro.vue'
import AccountList from './components/AccountList.vue'
import CeremonyInfo from './components/CeremonyInfo.vue'
import Gallery from './components/Gallery.vue'
import KakaoMap from './components/KakaoMap.vue'

const dateStr = new Intl.DateTimeFormat('ko-KR',{ dateStyle:'full', timeStyle:'short' }).format(new Date(cfg.dateISO))
</script>

<template>
  <div class="container">
    <!-- 1. 웨딩사진 -->
    <Hero :image="cfg.gallery[0]" :groom="cfg.couple.groom" :bride="cfg.couple.bride">
      <p class="muted" style="margin:4px 0 0">{{ dateStr }} · {{ cfg.venue.name }}</p>
    </Hero>

    <div style="height:14px"></div>

    <!-- 2. 결혼합니다 소개글 -->
    <Intro :text="cfg.intro" />

    <div style="height:14px"></div>

    <!-- 3. 계좌 -->
    <AccountList :accounts="cfg.accounts" />

    <div style="height:14px"></div>

    <!-- 4. 예식안내 + 캘린더 -->
    <CeremonyInfo title="결혼식" :startISO="cfg.dateISO" :location="`${cfg.venue.name} ${cfg.venue.address}`" />

    <div style="height:14px"></div>

    <!-- 5. 갤러리 -->
    <Gallery :images="cfg.gallery.slice(1)" />

    <div style="height:14px"></div>

    <!-- 6. 결혼식장 위치 - 이룸웨딩컨벤션 -->
    <KakaoMap :appKey="cfg.kakao.appKey"
              :lat="cfg.venue.lat" :lng="cfg.venue.lng"
              :title="cfg.venue.name" :address="cfg.venue.address" />

    <footer style="text-align:center;margin-top:18px" class="muted">
      <small>© 2025 {{ cfg.couple.groom }} &amp; {{ cfg.couple.bride }}</small>
    </footer>
  </div>
</template>