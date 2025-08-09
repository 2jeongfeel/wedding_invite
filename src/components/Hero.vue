<script setup>
defineProps({
  image: { type: String, required: true },
  groom: { type: String, required: true },
  bride: { type: String, required: true }
})
</script>

<template>
  <section class="section hero">
    <div class="hero-media">
      <img :src="image" :alt="`${groom} & ${bride} 웨딩사진`" />
    </div>
    <div style="padding:12px 2px">
      <div class="kicker" aria-hidden="true">Wedding Invitation</div>
      <h1>{{ groom }} &amp; {{ bride }}</h1>
      <slot />
    </div>
  </section>
</template>