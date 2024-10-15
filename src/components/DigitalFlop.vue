<template>
  <dv-digital-flop :config="config" style="width:100%;height:100%;"/>
</template>
<script>
export default {

  data() {
    return {
      config: {
        number: [123456],
        content: '{nt}个',
      }

    }
  }
}
</script>
<style>

</style>