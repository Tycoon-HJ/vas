<template>
  <div>
    <div class="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10) rotate(30) skewX(30) skewY(30) scale(1.5)"></rect>
      </svg>
    </div>
  </div>

</template>
<script>
export default{
  name: 'SvgAnimation'
}
</script>

<style lang="scss">
.container {
  border: 1px solid #000000;
}
</style>