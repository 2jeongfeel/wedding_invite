<script setup>
import { onMounted, ref } from 'vue'
import { useScript } from '../composables/useScript'

const props = defineProps({
  appKey: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  title: { type: String, default: '예식장' },
  address: { type: String, default: '' }
})

const mapEl = ref(null)
const { load } = useScript()

onMounted(async () => {
  const sdkUrl = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${props.appKey}&autoload=false`
  await load(sdkUrl)
  kakao.maps.load(function () {
    const center = new kakao.maps.LatLng(props.lat, props.lng)
    const map = new kakao.maps.Map(mapEl.value, { center, level: 3 })
    const marker = new kakao.maps.Marker({ position: center })
    marker.setMap(map)
    if (props.title || props.address) {
      const iw = new kakao.maps.InfoWindow({ content: `<div style="padding:6px 10px;font-weight:600">${props.title}</div><div style="padding:0 10px 6px;font-size:12px;color:#6b7280">${props.address}</div>` })
      iw.open(map, marker)
    }
  })
})
</script>

<template>
  <section class="section">
    <div class="section-title">결혼식장 위치</div>
    <div class="muted" style="margin-bottom:8px">{{ title }} · {{ address }}</div>
    <div ref="mapEl" class="map-frame" role="img" :aria-label="`${title} 위치 지도`"></div>
    <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;justify-content:center">
      <a class="btn ghost" :href="`https://map.kakao.com/link/map/${encodeURIComponent(title)},${lat},${lng}`" target="_blank" rel="noreferrer">카카오맵</a>
      <a class="btn ghost" :href="`https://m.map.naver.com/route.nhn?menu=route&ename=${encodeURIComponent(title)}&ex=${lng}&ey=${lat}`" target="_blank" rel="noreferrer">네이버 길찾기</a>
      <a class="btn ghost" :href="`https://maps.google.com/?q=${lat},${lng}`" target="_blank" rel="noreferrer">Google Maps</a>
    </div>
  </section>
</template>