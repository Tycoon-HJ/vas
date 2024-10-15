<template>
  <div class="box">
    <dv-scroll-board :config="config" style="width:100%;height:100%" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        header: ['债券代码', '债券简称', '债券金额'],
        data: [
          ['<span style="color:#37a2da;">462663674</span>', '打打债券', '0.6'],
          ['76266367', '<span style="color:#32c5e9;">国新债券</span>', '3.5'],
          ['573784367', '行3列2', '<span style="color:#67e0e3;">45353</span>'],
          ['256734678', '<span style="color:#9fe6b8;">离新债券</span>', '34234234.787'],
          ['<span style="color:#ffdb5c;">257843673</span>', '行5列2', '423423'],
          ['843367738', '<span style="color:#ff9f7f;">睁大债券</span>', '42345.99'],
          ['114242563', '行7列2', '<span style="color:#fb7293;">45345</span>'],
          ['684432556', '<span style="color:#e062ae;">姥姥债券</span>', '45345.99'],
          ['<span style="color:#e690d1;">968699969</span>', '行9列2', '23424.90'],
          ['523525668', '<span style="color:#e7bcf3;">呵呵债券</span>', '55.8678'],
          ['843367738', '<span style="color:#ff9f7f;">睁大债券</span>', '42345.99'],
          ['114242563', '行7列2', '<span style="color:#fb7293;">45345</span>'],
          ['684432556', '<span style="color:#e062ae;">姥姥债券</span>', '45345.99'],
          ['<span style="color:#e690d1;">968699969</span>', '行9列2', '23424.90'],
        ],
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
  }
}
</script>

<style>
.box{
  width: 98%;
  height: 60%;
}
</style>