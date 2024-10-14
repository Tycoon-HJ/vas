<template>
  <dv-full-screen-container>

    <div class="row">
      <div class="cell">
        <dv-border-box-8 :reverse="true">
          <RingChat></RingChat>
        </dv-border-box-8>
      </div>
      <div class="cell">
        <dv-border-box-8 :reverse="true"></dv-border-box-8>
      </div>
      <div class="cell">
        <dv-border-box-8 :reverse="true"></dv-border-box-8>
      </div>

    </div>
    <div class="row">
      <div class="cell">
        <dv-border-box-8 :reverse="true"></dv-border-box-8>
      </div>
      <div class="cell">
        <dv-border-box-8 :reverse="true"></dv-border-box-8>
      </div>
      <div class="cell">
        <dv-border-box-8 :reverse="true"></dv-border-box-8>
      </div>

    </div>


  </dv-full-screen-container>
</template>

<script>
import RingChat from "@/components/RingChat.vue";

export default {
  components: {
    RingChat
  }
}
</script>
<style>
body {
  background-color: black;
}

.row {
  height: 50%;
  width: 100%;
  display: flex;
  color: white;
}

.cell {
  flex: 1;
}
</style>