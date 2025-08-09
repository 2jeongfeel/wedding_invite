<script setup>
defineProps({ text: { type: String, required: true } })
</script>

<template>
  <section class="section">
    <div class="section-title">이정필 &amp; 장유지 결혼합니다</div>
    <p style="line-height:1.85; white-space:pre-line">{{ text }}</p>
  </section>
</template>