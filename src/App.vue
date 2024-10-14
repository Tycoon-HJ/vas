<template>
  <dv-full-screen-container>

    <div class="row">
      <div class="cell">
        <dv-border-box-8 :reverse="true">
          <RingChat/>
        </dv-border-box-8>
      </div>
      <div class="cell">
        <dv-border-box-8 :reverse="true">
          <CapsuleChat/>
        </dv-border-box-8>
      </div>
      <div class="cell">
        <dv-border-box-8 :reverse="true">
          <FlylineChat/>
        </dv-border-box-8>
      </div>

    </div>
    <div class="row">
      <div class="cell">
        <dv-border-box-8 :reverse="true">
          <ScrollBoard/>
        </dv-border-box-8>
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
import CapsuleChat from "@/components/CapsuleChat.vue";
import FlylineChat from "@/components/FlylineChat.vue";
import ScrollBoard from "@/components/ScrollBoard.vue";

export default {
  components: {
    RingChat,
    CapsuleChat,
    FlylineChat,
    ScrollBoard
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