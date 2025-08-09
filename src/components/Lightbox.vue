<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  modelValue: { type: Boolean, default: false },
  startIndex: { type: Number, default: 0 }
})
const emit = defineEmits(['update:modelValue'])

const open = ref(props.modelValue)
const index = ref(props.startIndex)
watch(() => props.modelValue, v => open.value = v)
watch(open, v => emit('update:modelValue', v))
watch(() => props.startIndex, v => { if (open.value) index.value = v })

function close(){ open.value = false }
function next(){ if (!props.images.length) return; index.value = (index.value + 1) % props.images.length }
function prev(){ if (!props.images.length) return; index.value = (index.value - 1 + props.images.length) % props.images.length }

function onKey(e){
  if(!open.value) return
  if(e.key === 'Escape') close()
  else if(e.key === 'ArrowRight') next()
  else if(e.key === 'ArrowLeft') prev()
}

let touchStartX = 0, touchStartY = 0
function onTouchStart(e){
  const t = e.changedTouches[0]; touchStartX = t.clientX; touchStartY = t.clientY
}
function onTouchEnd(e){
  const t = e.changedTouches[0]
  const dx = t.clientX - touchStartX
  const dy = t.clientY - touchStartY
  if(Math.abs(dx) > 40 && Math.abs(dy) < 40){
    if(dx < 0) next(); else prev()
  }
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <teleport to="body">
    <div v-if="open" class="lb-overlay" @click.self="close" @touchstart="onTouchStart" @touchend="onTouchEnd">
      <button class="lb-close" aria-label="닫기" @click="close">×</button>
      <button class="lb-nav left" aria-label="이전 사진" @click.stop="prev">‹</button>
      <figure class="lb-figure">
        <img :src="images[index]" :alt="`확대 이미지 ${index+1}`" />
        <figcaption class="lb-caption">{{ index+1 }} / {{ images.length }}</figcaption>
      </figure>
      <button class="lb-nav right" aria-label="다음 사진" @click.stop="next">›</button>
    </div>
  </teleport>
</template>

<style scoped>
.lb-overlay{
  position: fixed; inset: 0;
  background: rgba(0,0,0,.9);
  display: grid; place-items: center;
  z-index: 9999;
  padding: 16px;
}
.lb-figure{ margin: 0; position: relative; max-width: 96vw; max-height: 90vh; display: grid; place-items: center }
.lb-figure img{
  max-width: 96vw; max-height: 86vh;
  width: auto; height: auto; object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 12px 36px rgba(0,0,0,.4);
}
.lb-caption{
  position: absolute; bottom: -28px; left: 50%; transform: translateX(-50%);
  color: #fff; font-size: 12px; opacity: .85;
}
.lb-close{
  position: absolute; top: 10px; right: 14px;
  background: transparent; border: none; color: #fff; font-size: 34px; line-height: 1;
  cursor: pointer; opacity: .9;
}
.lb-nav{
  position: absolute; top: 50%; transform: translateY(-50%);
  background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.2);
  color: #fff; font-size: 30px; width: 44px; height: 44px; border-radius: 50%;
  cursor: pointer; display: grid; place-items: center;
  transition: background .15s ease;
}
.lb-nav:hover{ background: rgba(255,255,255,.18) }
.lb-nav.left{ left: 12px }
.lb-nav.right{ right: 12px }
@media (min-width: 768px){
  .lb-nav{ width: 52px; height: 52px; font-size: 36px }
  .lb-close{ font-size: 40px }
}
</style>