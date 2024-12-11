<script setup>
import {ref} from 'vue'

let props = defineProps({
  title: {type: String},
  value: {type: String},
});
</script>

<template>
  <div class="block-continer">
    <div class="block-title11">{{ title }}</div>
    <div class="block-value">{{ value }}</div>
  </div>
</template>

<style scoped lang="scss">
.block-continer {

  margin: 1px;
  display: flow-root;
  width: 90%;
}

.block-title11 {
  font-size: 18px;
  float: left;
}

.block-value {
  font-size: 18px;
  float: right;
}

</style>