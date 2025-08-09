<script setup>
import { ref } from 'vue'
import Lightbox from './Lightbox.vue'
const props = defineProps({ images: { type: Array, default: () => [] } })

const show = ref(false)
const startIndex = ref(0)
const open = (i) => { startIndex.value = i; show.value = true }
</script>

<template>
  <section class="section">
    <div class="section-title">갤러리</div>
    <div class="gallery">
      <img v-for="(src,i) in images" :key="i" :src="src" :alt="`갤러리 사진 ${i+1}`"
           loading="lazy" decoding="async" @click="open(i)" style="cursor: zoom-in;" />
    </div>
    <Lightbox v-model="show" :images="images" :startIndex="startIndex" />
  </section>
</template>