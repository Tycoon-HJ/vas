<script setup>

</script>
<template>
  <div id="app">
    <slot>111111</slot>
    <ImoocLoading></ImoocLoading>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
