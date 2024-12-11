<script setup>
import {ref} from 'vue'
let props = defineProps({
  title: { type: String },
  value: { type: String },
});
</script>

<template>
  <div class="gradient-border">
    <div class="block-title">{{title}}</div>
    <br />{{value}}
  </div>
</template>

<style scoped lang="scss">
.block-title{
  font-size: 18px;
}
.gradient-border {
  margin: 8px;
  --border-width: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  font-family: Lato, sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  color: white;
  background: #222;
  border-radius: 10px;

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
            60deg,
            hsl(224, 85%, 66%),
            hsl(269, 85%, 66%),
            hsl(314, 85%, 66%),
            hsl(359, 85%, 66%),
            hsl(44, 85%, 66%),
            hsl(89, 85%, 66%),
            hsl(134, 85%, 66%),
            hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 10px;
    animation: moveGradient 4s alternate infinite;
  }
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
</style>