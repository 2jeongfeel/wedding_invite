<script setup>
import { useClipboard } from '../composables/useClipboard'
const props = defineProps({ accounts: { type: Array, default: () => [] } })
const { copy } = useClipboard()
const toText = (a) => `${a.bank} ${a.number} (${a.name})`
const copyAcc = async (a) => { const ok = await copy(toText(a)); if (ok) alert('계좌번호가 복사되었습니다.') }
</script>

<template>
  <section class="section">
    <div class="section-title">마음 전하실 곳</div>
    <div>
      <div v-for="(a,i) in accounts" :key="i" class="account-item">
        <div class="who">{{ a.label }}</div>
        <div class="mono line">{{ a.bank }} {{ a.number }} ({{ a.name }})</div>
        <button class="btn ghost" @click="copyAcc(a)">복사</button>
      </div>
    </div>
  </section>
</template>