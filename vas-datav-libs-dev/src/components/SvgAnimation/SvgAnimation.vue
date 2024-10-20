<template>
  <div>
    <div class="container">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!--      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10) rotate(30) skewX(30) skewY(30) scale(1.5)"></rect>-->

        <!--        [2,-1,50] => 2*x +(-1)*y + 50 = x
                    [1,2,0] => 1*x +2*y + 0 = y
                    计算用到的x，y是最开始的坐标

        -->
        <rect class="rect" x="0" y="0" width="100" height="50" stroke-width="2" stroke="#d1d3d7" fill="none"
              transform="matrix(2 1 -1 2 50 0)"></rect>
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
          <rect x="0" y="0" width="200" height="200" stroke-width="8" stroke="grey" fill="none"></rect>
          <rect class="rect-process" x="0" y="0" width="200" height="200" stroke-width="8" stroke="blue" fill="none"
                transform="matrix(0 1 -1 0 200 0)"></rect>
        </svg>
      </div>
    </div>
    <div class="container">
      <svg viewBox="0 0 1024 1024" width="200" height="200">
        <path class="logo"
              d="M411.26 739.49c-45.99 0-91.96-1.86-137.62-5.58-93.82-7.92-160-73.91-161.01-160.47-0.49-42.65 15.56-83.19 45.2-114.17 29.66-30.99 69.46-48.79 112.08-50.11 61.66-1.91 118.3 30.53 147.83 84.67 4.63 8.48 1.5 19.12-6.98 23.74-8.49 4.63-19.11 1.5-23.74-6.98-23.18-42.48-67.64-67.95-116.02-66.45-33.4 1.04-64.61 15-87.88 39.32-23.27 24.32-35.87 56.13-35.49 89.57 0.39 33.69 13.02 63.55 36.54 86.36 23.17 22.48 55.98 36.56 92.37 39.63 88.83 7.24 178.96 7.28 267.84 0.13l1.97-0.16c130.46-8.42 221.76-99.07 222.01-220.44 0.12-58.95-22.5-114.35-63.7-156-41.2-41.65-96.35-64.86-155.28-65.36h-1.94c-34.26 0-67.09 7.63-97.6 22.69-29.64 14.63-56.1 36.18-76.52 62.31l-0.28 0.35c-0.16 0.2-17.31 21.18-24.16 39.17-3.44 9.03-13.55 13.56-22.58 10.12-9.03-3.44-13.56-13.55-10.12-22.58 8.61-22.6 27.62-46.22 29.7-48.78 23.62-30.18 54.21-55.07 88.48-71.99 36.04-17.79 74.85-26.67 115.33-26.3 68.24 0.57 132.12 27.47 179.87 75.75 47.74 48.27 73.96 112.43 73.81 180.68-0.07 34.54-6.51 67.52-19.15 98.01-12.32 29.75-30.21 56.4-53.18 79.22-22.82 22.68-50 40.92-80.76 54.2-31.24 13.49-65.4 21.51-101.54 23.86l-1.56 0.12c-45.09 3.63-90.5 5.44-135.91 5.44z"
              fill="#333333" p-id="1405"></path>
        <path class="logo"
              d="M781.38 734.62c-13.41 0-33.48-0.93-58.57-4.83-9.55-1.49-16.09-10.43-14.6-19.98s10.43-16.08 19.98-14.6c41.75 6.49 67.92 3.89 68.18 3.86l0.73-0.06c25.35-1.64 46.44-10.36 60.99-25.21 14-14.29 21.41-33.69 21.41-56.1 0-44.81-36.46-81.27-81.27-81.27-9.67 0-17.5-7.83-17.5-17.5s7.83-17.5 17.5-17.5c64.11 0 116.27 52.16 116.27 116.27s-46.12 111.62-114.82 116.21c-1.74 0.17-8.09 0.71-18.3 0.71zM836.82 833.02H212.78c-9.67 0-17.5-7.83-17.5-17.5s7.83-17.5 17.5-17.5h624.04c9.67 0 17.5 7.83 17.5 17.5s-7.83 17.5-17.5 17.5z"
              fill="#333333" p-id="1406"></path>
      </svg>

    </div>
    <div class="container">
      <svg class="line-container" viewBox="0 0 400 400" width="400" height="400">
        <line class="line" x1="0" y1="20" x2="400" y2="20" fill="none" stroke-width="20" stroke="red"></line>
        /
      </svg>
    </div>

    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="100" height="50">
          <set attributeName="x" attributeType="XML" to="10" begin="1s"></set>
          <set attributeName="x" attributeType="XML" to="20" begin="2s"></set>
          <set attributeName="fill" attributeType="XML" to="blue" begin="2s"></set>
        </rect>
      </svg>
    </div>

    <div class="container">
      <svg width="200" height="200">
        <circle r="30" cx="0" cy="0" stroke="black" stroke-width="1">
          <!--          <animate attributeName="cx" attributeType="XML" from="0" to="100" dur="5s" fill="freeze"-->
          <!--                   repeatCount="indefinite"></animate>-->
          <!--          <animate attributeName="cy" attributeType="XML" from="0" to="50" dur="5s" fill="freeze"-->
          <!--                   repeatCount="indefinite"></animate>-->
          <animateTransform attributeName="transform" attributeType="XML" begin="0" dur="3s" type="scale" from="1"
                            to="2" repeatCount="indefinite"></animateTransform>

        </circle>
        /
      </svg>
    </div>
    <div class="container">
      <svg width="400" height="400">
        <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
          <animate attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" dur="5s" fill="freeze"
                   repeatCount="1"/>
        </polygon>
      </svg>
    </div>

    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion
              id="forward-rect"
              path="M10 10 L110 10 L110 110 L10 110"
              dur="2s"
              rotate="0"
              fill="freeze"
              begin="0; backward-rect.end + 0.5s"
          ></animateMotion>
          <animateMotion
              id="backward-rect"
              path="M10 100 L110 100 L110 10 L10 10"
              dur="2s"
              rotate="0"
              fill="freeze"
              begin="forward-rect.end + 0.5s"
          ></animateMotion>
          <animate id="red-to-blue" attributeName="fill" attributeType="XML" from="red" to="blue" dur="2s" fill="freeze"
                   begin="0; blue-to-red.end+0.5s"></animate>
          <animate id="blue-to-red" attributeName="fill" attributeType="XML" from="blue" to="red" dur="2s" fill="freeze"
                   begin="red-to-blue.end+0.5s"></animate>

        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110" fill="none" stroke="green"></path>
      </svg>
    </div>
    <div class="container">
      <svg viewBox="0 0 200 200" width="200" height="200">
        <g id="rect1">
          <rect x="0" y="0" rx="0" ry="0" width="100" height="100" fill="red">
            <animate
                attributeType="XML"
                attributeName="fill"
                from="red"
                to="green"
                begin="rect1.click"
                dur="2s"
                fill="freeze"
            />
          </rect>
        </g>
        <animateTransform
            attributeType="XML"
            attributeName="transform"
            type="translate"
            from="0, 0"
            to="50, 50"
            begin="rect1.click"
            dur="2s"
            fill="freeze"
        />
        <rect x="0" y="100" width="100" height="100" fill="blue">
          <animate
              attributeType="XML"
              attributeName="fill"
              from="blue"
              to="green"
              begin="rect1.click"
              dur="2s"
              fill="freeze"
          />
        </rect>
      </svg>

    </div>
  </div>

</template>
<script>
import {onMounted} from "vue";

export default {
  name: 'SvgAnimation',
  setup() {
    onMounted(() => {
      const logo = document.getElementsByClassName('logo')[0];
      console.log(logo.getTotalLength())
    })
  }
}
</script>

<style lang="scss">
.container {
  svg {
    border: 1px solid #000000;
  }
}

.rect {
  stroke-dasharray: 10 20 30;
}

.circle {
  animation: circle 5s linear infinite;
}

@keyframes circle {
  from {
    stroke-dasharray: 0 800;
  }
  to {
    stroke-dasharray: 800 0;
  }
}

.rect-process {
  animation: rect-process 5s linear infinite;
}

@keyframes rect-process {
  from {
    stroke-dasharray: 0 1257;
  }
  to {
    stroke-dasharray: 1257 0;
  }
}

.logo {
  fill: none;
  stroke: #333;
  stroke-width: 5;
  animation: logo 5s linear 1 forwards;
}

//在1s内执行完毕
@keyframes logo {

  0% {
    fill: white;
    stroke-dasharray: 3908;
    stroke-dashoffset: 3908;
  }

  50% {
    fill: white;
    stroke-dasharray: 3908;
    stroke-dashoffset: 0;
  }
  75% {
    fill: red;
  }
  100% {
    fill: cyan;
  }

}

.line {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 0.5s ease-out;

}

.line-container {
  &:hover {
    .line {
      stroke-dashoffset: 0;

    }
  }
}
</style>