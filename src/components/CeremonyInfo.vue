<script setup>
import { computed } from 'vue'
import { buildIcsUrl } from '../utils/ics'

const props = defineProps({
  title: { type: String, default: '결혼식' },
  startISO: { type: String, required: true },
  location: { type: String, default: '' }
})

const kDate = computed(() => new Intl.DateTimeFormat('ko-KR', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(props.startISO)))
const icsUrl = computed(() => buildIcsUrl({ title: props.title, location: props.location, startISO: props.startISO }))
const googleUrl = computed(() => {
  const fmt = (iso) => new Date(iso).toISOString().replace(/[-:]/g,'').split('.')[0]+'Z'
  const p = new URLSearchParams({ action:'TEMPLATE', text:props.title, details:'함께 자리해 주세요', location:props.location, dates:`${fmt(props.startISO)}/` })
  return `https://www.google.com/calendar/render?${p}`
})
</script>

<template>
  <section class="section">
    <div class="section-title">예식 안내</div>
    <p class="muted" style="margin-top:6px">{{ kDate }}</p>
    <p style="margin:8px 0 14px">{{ location }}</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">
      <a class="btn" :href="googleUrl" target="_blank" rel="noreferrer">Google 캘린더</a>
      <a class="btn ghost" :href="icsUrl" download="wedding.ics">iCal 내려받기</a>
    </div>
  </section>
</template>