<template>
  <div>
    <div class="container">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!--      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10) rotate(30) skewX(30) skewY(30) scale(1.5)"></rect>-->

        <!--        [2,-1,50] => 2*x +(-1)*y + 50 = x
                    [1,2,0] => 1*x +2*y + 0 = y
                    计算用到的x，y是最开始的坐标

        -->
        <rect class="rect" x="0" y="0" width="100" height="50" stroke-width="2" stroke="#d1d3d7"  fill="none" transform="matrix(2 1 -1 2 50 0)"></rect>
      </svg>

      <div class="container">
        <svg width="440" height="440" viewBox="0 0 440 440">
          <circle cx="220" cy="220" r="200" stroke-width="20" stroke="#d1d3d7" fill="none"></circle>
          <circle class="circle" cx="220" cy="220" r="200" stroke-width="20" stroke="#00a5e0" fill="none"
          transform="matrix(0 -1 1 0 0 440)">
          </circle>
        </svg>
      </div>
      <div class="container">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <rect x="0" y="0" width="200" height="200" stroke-width="8" stroke="grey"  fill="none"></rect>
          <rect class="rect-process" x="0" y="0" width="200" height="200" stroke-width="8" stroke="blue"  fill="none"
                transform="matrix(0 1 -1 0 200 0)"></rect>
        </svg>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'SvgAnimation'
}
</script>

<style lang="scss">
.container {
  svg{
    border: 1px solid #000000;
  }
}
.rect{
  stroke-dasharray: 10 20 30;
}
.circle{
  animation: circle 5s linear infinite;
}

@keyframes circle {
  from{
    stroke-dasharray: 0 800;
  }
  to{
    stroke-dasharray: 800 0;
  }
}

.rect-process{
  animation: rect-process 5s linear infinite;
}

@keyframes rect-process {
  from{
    stroke-dasharray: 0 1257;
  }
  to{
    stroke-dasharray: 1257 0;
  }
}
</style>