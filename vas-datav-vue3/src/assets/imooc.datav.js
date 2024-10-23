(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.imoocDatav = factory(global.Vue));
})(this, (function (vue) { 'use strict';

  var script$3 = {
    name: 'TestComponent',
    setup() {
      const message = 'hello';
      const count = vue.ref(1);
      const doubleCount = vue.computed(() => count.value * 2);
      const add = () => {
        count.value++;
      };
      return {
        message,
        doubleCount,
        add
      };
    }
  };

  const _hoisted_1$2 = {
    class: "test"
  };
  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_imooc_loading = vue.resolveComponent("imooc-loading");
    const _component_FlyBox = vue.resolveComponent("FlyBox");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [vue.createCommentVNode("    <svg width=\"500\" height=\"200\" viewBox=\"0 0 50 20\" style=\"border: 1px solid #000000\">"), vue.createCommentVNode("      <rect x=\"20\" y=\"10\" width=\"10\" height=\"5\" style=\"stroke: #000000; fill:none;\"/>"), vue.createCommentVNode("    </svg>"), vue.createCommentVNode("    <svg width=\"500\" height=\"200\" viewBox=\"0 0 200 200\" style=\"border: 1px solid #000000\" preserveAspectRatio=\"xMidYMid meet\">"), vue.createCommentVNode("      <rect x=\"100\" y=\"100\" width=\"100\" height=\"50\" stroke-width=\"10\" style=\"stroke: #000000; fill:none;\"/>"), vue.createCommentVNode("    </svg>"), vue.createCommentVNode("    <svg width=\"10%\" height=\"10%\" viewBox=\"0 0 100 100\">"), vue.createCommentVNode("      <line x1=\"0\" y1=\"50\" x2=\"100\" y2=\"50\" stroke-width=\"8\" stroke=\"currentColor\" />"), vue.createCommentVNode("      <line x1=\"50\" y1=\"0\" x2=\"50\" y2=\"100\" stroke-width=\"8\" stroke=\"currentColor\" />"), vue.createCommentVNode("    </svg>"), vue.createCommentVNode("    <svg width=\"500\" height=\"200\" viewBox=\"0 0 200 200\" style=\"border: 1px solid #000000\" preserveAspectRatio=\"xMaxYMin meet\">"), vue.createCommentVNode("      <rect x=\"100\" y=\"100\" width=\"100\" height=\"50\" stroke-width=\"10\" style=\"stroke: #000000; fill:none;\"/>"), vue.createCommentVNode("    </svg>"), vue.createCommentVNode("    <svg width=\"500\" height=\"200\" viewBox=\"0 0 200 200\" style=\"border: 1px solid #000000\" preserveAspectRatio=\"xMidYMax slice\">"), vue.createCommentVNode("      <rect x=\"100\" y=\"100\" width=\"100\" height=\"50\" stroke-width=\"10\" style=\"stroke: #000000; fill:none;\"/>"), vue.createCommentVNode("    </svg>"), vue.createCommentVNode("    <svg width=\"500\" height=\"200\" viewBox=\"0 0 200 200\" style=\"border: 1px solid #000000\" preserveAspectRatio=\"xMaxYMin slice\">"), vue.createCommentVNode("      <rect x=\"100\" y=\"100\" width=\"100\" height=\"50\" stroke-width=\"10\" style=\"stroke: #000000; fill:none;\"/>"), vue.createCommentVNode("    </svg>"), vue.createCommentVNode("    <svg width=\"500\" height=\"200\" viewBox=\"0 0 200 200\" style=\"border: 1px solid #000000\" preserveAspectRatio=\"none\">"), vue.createCommentVNode("      <rect x=\"100\" y=\"100\" width=\"100\" height=\"50\" stroke-width=\"10\" style=\"stroke: #000000; fill:none;\"/>"), vue.createCommentVNode("    </svg>"), vue.createCommentVNode("    currentColor会取上一个组件的颜色"), vue.createCommentVNode("    <svg width=\"0\" height=\"0\" viewBox=\"0 0 100 100\">"), vue.createCommentVNode("      <defs>"), vue.createCommentVNode("&lt;!&ndash;        <g id=\"more\">&ndash;&gt;"), vue.createCommentVNode("&lt;!&ndash;          <circle r=\"5\" cx=\"10\" cy=\"25\" fill=\"currentColor\"></circle>&ndash;&gt;"), vue.createCommentVNode("&lt;!&ndash;          <circle r=\"5\" cx=\"10\" cy=\"50\" fill=\"currentColor\"></circle>&ndash;&gt;"), vue.createCommentVNode("&lt;!&ndash;          <circle r=\"5\" cx=\"10\" cy=\"75\" fill=\"currentColor\"></circle>&ndash;&gt;"), vue.createCommentVNode("&lt;!&ndash;          <line x1=\"40\" y1=\"25\" x2=\"100\" y2=\"25\" stroke-width=\"8\" stroke=\"currentColor\"></line>&ndash;&gt;"), vue.createCommentVNode("&lt;!&ndash;          <line x1=\"40\" y1=\"50\" x2=\"100\" y2=\"50\" stroke-width=\"8\" stroke=\"currentColor\"></line>&ndash;&gt;"), vue.createCommentVNode("&lt;!&ndash;          <line x1=\"40\" y1=\"75\" x2=\"100\" y2=\"75\" stroke-width=\"8\" stroke=\"currentColor\"></line>&ndash;&gt;"), vue.createCommentVNode("&lt;!&ndash;        </g>&ndash;&gt;"), vue.createCommentVNode("        <symbol id=\"arrowRight\" viewBox=\"0 0 100 100\">"), vue.createCommentVNode("          <polyline points=\"20 10, 80 50, 20 90 \" fill=\"transparent\" stroke=\"currentColor\" stroke-width=\"3\"></polyline>/"), vue.createCommentVNode("        </symbol>"), vue.createCommentVNode("        <symbol id=\"snow\" viewBox=\"0 0 1024 1024\">"), vue.createCommentVNode("          <path d=\"M853.333333 464.138667c0-71.253333-60.650667-129.013333-135.466666-129.013334 0-106.88-90.976-193.525333-203.2-193.525333-89.045333 0-164.714667 54.549333-192.170667 130.464-82.72 10.624-146.496 78.133333-146.496 159.818667 0 89.066667 75.818667 161.28 169.333333 161.28H717.866667c74.816 0 135.466667-57.770667 135.466666-129.024z\" fill=\"#D3F2FF\" p-id=\"4315\"></path><path d=\"M738.24 315.050667C814.474667 324.586667 874.666667 386.901333 874.666667 464.138667c0 84-71.189333 150.346667-156.8 150.346666H345.333333c-104.309333 0-190.666667-80.778667-190.666666-182.602666 0-89.056 66.154667-162.090667 152.469333-178.933334 33.888-78.293333 114.4-132.693333 207.530667-132.693333 116.053333 0 212.970667 84.757333 223.573333 194.794667z m-20.373333 20.074666c74.816 0 135.466667 57.76 135.466666 129.013334 0 71.253333-60.650667 129.013333-135.466666 129.013333H345.333333c-93.514667 0-169.333333-72.202667-169.333333-161.269333 0-81.685333 63.776-149.194667 146.496-159.808 27.456-75.925333 103.125333-130.474667 192.170667-130.474667 112.224 0 203.2 86.645333 203.2 193.525333z\" fill=\"#68B9DC\" p-id=\"4316\"></path><path d=\"M778.666667 348.810667c26.261333 23.530667 42.666667 56.938667 42.666666 93.994666 0 71.253333-60.650667 129.013333-135.466666 129.013334H313.333333c-29.077333 0-56.448-6.976-80.362666-19.274667 29.898667 25.269333 69.248 40.608 112.362666 40.608H717.866667c74.816 0 135.466667-57.76 135.466666-129.013333 0-50.432-30.378667-94.101333-74.666666-115.328z m-61.653334-31.594667c-6.24-64.725333-45.941333-120.224-102.485333-150.677333 43.658667 35.498667 71.338667 88.298667 71.338667 147.253333 10.72 0 21.141333 1.173333 31.146666 3.413333z\" fill=\"#AAE0F8\" p-id=\"4317\"></path><path d=\"M347.989333 729.322667a47.274667 47.274667 0 1 1-94.549333 0 47.274667 47.274667 0 0 1 94.549333 0z\" fill=\"#D3F2FF\" p-id=\"4318\"></path><path d=\"M369.322667 729.322667a68.608 68.608 0 1 1-137.216 0 68.608 68.608 0 0 1 137.216 0z m-68.608 47.274666a47.274667 47.274667 0 1 0 0-94.549333 47.274667 47.274667 0 0 0 0 94.549333z\" fill=\"#68B9DC\" p-id=\"4319\"></path><path d=\"M446.762667 881.728a38.805333 38.805333 0 1 1-77.610667 0 38.805333 38.805333 0 0 1 77.610667 0z\" fill=\"#D3F2FF\" p-id=\"4320\"></path><path d=\"M468.096 881.728a60.138667 60.138667 0 1 1-120.277333 0 60.138667 60.138667 0 0 1 120.277333 0zM407.957333 920.533333a38.805333 38.805333 0 1 0 0-77.610666 38.805333 38.805333 0 0 0 0 77.610666z\" fill=\"#68B9DC\" p-id=\"4321\"></path><path d=\"M611.872 748.373333a60.682667 60.682667 0 1 1-121.365333 0 60.682667 60.682667 0 0 1 121.365333 0z\" fill=\"#D3F2FF\" p-id=\"4322\"></path><path d=\"M633.205333 748.373333a82.016 82.016 0 1 1-164.032 0 82.016 82.016 0 0 1 164.032 0z m-82.016 60.682667a60.682667 60.682667 0 1 0 0-121.354667 60.682667 60.682667 0 0 0 0 121.354667z\" fill=\"#68B9DC\" p-id=\"4323\"></path><path d=\"M775.552 786.474667a38.805333 38.805333 0 1 1-77.610667 0 38.805333 38.805333 0 0 1 77.610667 0z\" fill=\"#D3F2FF\" p-id=\"4324\"></path><path d=\"M796.885333 786.474667a60.138667 60.138667 0 1 1-120.277333 0 60.138667 60.138667 0 0 1 120.277333 0zM736.746667 825.28a38.805333 38.805333 0 1 0 0-77.610667 38.805333 38.805333 0 0 0 0 77.610667z\" fill=\"#68B9DC\" p-id=\"4325\"></path><path d=\"M556.298667 726.858667a20.810667 20.810667 0 1 1-41.632 0 20.810667 20.810667 0 0 1 41.632 0zM300.714667 715.584a13.738667 13.738667 0 1 1-27.477334 0 13.738667 13.738667 0 0 1 27.477334 0zM407.957333 872.917333a13.738667 13.738667 0 1 1-27.477333 0 13.738667 13.738667 0 0 1 27.477333 0zM743.072 776.597333a13.738667 13.738667 0 1 1-27.477333 0 13.738667 13.738667 0 0 1 27.477333 0z\" fill=\"#EDFAFF\" p-id=\"4326\"></path><path d=\"M464 416a101.333333 101.333333 0 1 0-100.778667-90.656A100.906667 100.906667 0 0 0 330.666667 320c-53.013333 0-96 40.597333-96 90.666667s42.986667 90.666667 96 90.666666 96-40.597333 96-90.666666c0-0.597333 0-1.173333-0.021334-1.770667A101.066667 101.066667 0 0 0 464 416z\" fill=\"#EDFAFF\" p-id=\"4327\"></path><path d=\"M789.333333 522.666667a10.666667 10.666667 0 1 1-21.333333 0 10.666667 10.666667 0 0 1 21.333333 0zM757.333333 554.666667a10.666667 10.666667 0 1 1-21.333333 0 10.666667 10.666667 0 0 1 21.333333 0zM649.333333 565.333333a10.666667 10.666667 0 1 1-21.333333 0 10.666667 10.666667 0 0 1 21.333333 0zM789.333333 453.333333a16 16 0 1 1-32 0 16 16 0 0 1 32 0zM832 480a10.666667 10.666667 0 1 1-21.333333 0 10.666667 10.666667 0 0 1 21.333333 0zM675.338667 504.330667a7.669333 7.669333 0 1 1-15.338667 0 7.669333 7.669333 0 0 1 15.338667 0zM729.333333 461.664a7.669333 7.669333 0 1 1-15.338666 0 7.669333 7.669333 0 0 1 15.338666 0zM832 437.333333a7.669333 7.669333 0 1 1-15.338667 0A7.669333 7.669333 0 0 1 832 437.333333zM621.333333 537.002667a7.669333 7.669333 0 1 1-15.338666 0 7.669333 7.669333 0 0 1 15.338666 0zM586.666667 562.336a7.669333 7.669333 0 1 1-15.338667 0 7.669333 7.669333 0 0 1 15.338667 0zM789.333333 398.666667a7.669333 7.669333 0 1 1-15.338666 0 7.669333 7.669333 0 0 1 15.338666 0zM704 549.333333a16 16 0 1 1-32 0 16 16 0 0 1 32 0zM748.672 510.005333a19.338667 19.338667 0 1 1-38.677333 0 19.338667 19.338667 0 0 1 38.677333 0z\" fill=\"#75CEF3\" p-id=\"4328\"></path>"), vue.createCommentVNode("        </symbol>"), vue.createCommentVNode("      </defs>"), vue.createCommentVNode("    </svg>"), vue.createCommentVNode("    <Icon name=\"arrowRight\" :style=\"{width:50,height:50,color:'green'}\"></Icon>"), vue.createCommentVNode("    <Icon name=\"arrowRight\" class=\"common-icon\"></Icon>"), vue.createCommentVNode("    <Icon name=\"snow\" class=\"common-icon\"></Icon>"), vue.createCommentVNode("    <Icon prefix=\"icon-\" name=\"xing\" class=\"common-icon\"></Icon>"), vue.createCommentVNode("    <svg-animation></svg-animation>"), vue.createVNode(_component_imooc_loading, {
      width: "500",
      height: "200",
      "in-side-color": "red",
      "out-side-color": "green",
      duration: "10"
    }), vue.createVNode(_component_FlyBox), vue.createCommentVNode("    <div>"), vue.createCommentVNode("      message: {{ message }}"), vue.createCommentVNode("    </div>"), vue.createCommentVNode("    <div>"), vue.createCommentVNode("      doubleCount: {{ doubleCount }}"), vue.createCommentVNode("    </div>"), vue.createCommentVNode("    <button @click=\"add\"> add count</button>")]);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$3 = ".test[data-v-dc87507c] {\n  color: red;\n}\n\n.common-icon[data-v-dc87507c] {\n  color: red;\n}";
  styleInject(css_248z$3);

  script$3.render = render$3;
  script$3.__scopeId = "data-v-dc87507c";
  script$3.__file = "src/components/Test.vue";

  var css_248z$2 = "\n.icon-wrapper{\n  display: inline-block;\n}\n.icon {\n  width: 100%;\n  height: 100%;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n";
  styleInject(css_248z$2);

  var script$2 = {
    name: 'SvgAnimation',
    setup() {
      vue.onMounted(() => {
        const logo = document.getElementsByClassName('logo')[0];
        console.log(logo.getTotalLength());
      });
    }
  };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, _cache[0] || (_cache[0] = [vue.createStaticVNode("<div class=\"container\"><svg width=\"500\" height=\"200\" viewBox=\"0 0 500 200\"><!--      &lt;rect x=&quot;0&quot; y=&quot;0&quot; width=&quot;100&quot; height=&quot;50&quot; fill=&quot;red&quot; transform=&quot;translate(10,10) rotate(30) skewX(30) skewY(30) scale(1.5)&quot;&gt;&lt;/rect&gt;--><!--        [2,-1,50] =&gt; 2*x +(-1)*y + 50 = x\n                    [1,2,0] =&gt; 1*x +2*y + 0 = y\n                    计算用到的x，y是最开始的坐标\n\n        --><rect class=\"rect\" x=\"0\" y=\"0\" width=\"100\" height=\"50\" stroke-width=\"2\" stroke=\"#d1d3d7\" fill=\"none\" transform=\"matrix(2 1 -1 2 50 0)\"></rect></svg><div class=\"container\"><svg width=\"440\" height=\"440\" viewBox=\"0 0 440 440\"><circle cx=\"220\" cy=\"220\" r=\"200\" stroke-width=\"20\" stroke=\"#d1d3d7\" fill=\"none\"></circle><circle class=\"circle\" cx=\"220\" cy=\"220\" r=\"200\" stroke-width=\"20\" stroke=\"#00a5e0\" fill=\"none\" transform=\"matrix(0 -1 1 0 0 440)\"></circle></svg></div><div class=\"container\"><svg width=\"200\" height=\"200\" viewBox=\"0 0 200 200\"><rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" stroke-width=\"8\" stroke=\"grey\" fill=\"none\"></rect><rect class=\"rect-process\" x=\"0\" y=\"0\" width=\"200\" height=\"200\" stroke-width=\"8\" stroke=\"blue\" fill=\"none\" transform=\"matrix(0 1 -1 0 200 0)\"></rect></svg></div></div>", 1), vue.createElementVNode("div", {
      class: "container"
    }, [vue.createElementVNode("svg", {
      viewBox: "0 0 1024 1024",
      width: "200",
      height: "200"
    }, [vue.createElementVNode("path", {
      class: "logo",
      d: "M411.26 739.49c-45.99 0-91.96-1.86-137.62-5.58-93.82-7.92-160-73.91-161.01-160.47-0.49-42.65 15.56-83.19 45.2-114.17 29.66-30.99 69.46-48.79 112.08-50.11 61.66-1.91 118.3 30.53 147.83 84.67 4.63 8.48 1.5 19.12-6.98 23.74-8.49 4.63-19.11 1.5-23.74-6.98-23.18-42.48-67.64-67.95-116.02-66.45-33.4 1.04-64.61 15-87.88 39.32-23.27 24.32-35.87 56.13-35.49 89.57 0.39 33.69 13.02 63.55 36.54 86.36 23.17 22.48 55.98 36.56 92.37 39.63 88.83 7.24 178.96 7.28 267.84 0.13l1.97-0.16c130.46-8.42 221.76-99.07 222.01-220.44 0.12-58.95-22.5-114.35-63.7-156-41.2-41.65-96.35-64.86-155.28-65.36h-1.94c-34.26 0-67.09 7.63-97.6 22.69-29.64 14.63-56.1 36.18-76.52 62.31l-0.28 0.35c-0.16 0.2-17.31 21.18-24.16 39.17-3.44 9.03-13.55 13.56-22.58 10.12-9.03-3.44-13.56-13.55-10.12-22.58 8.61-22.6 27.62-46.22 29.7-48.78 23.62-30.18 54.21-55.07 88.48-71.99 36.04-17.79 74.85-26.67 115.33-26.3 68.24 0.57 132.12 27.47 179.87 75.75 47.74 48.27 73.96 112.43 73.81 180.68-0.07 34.54-6.51 67.52-19.15 98.01-12.32 29.75-30.21 56.4-53.18 79.22-22.82 22.68-50 40.92-80.76 54.2-31.24 13.49-65.4 21.51-101.54 23.86l-1.56 0.12c-45.09 3.63-90.5 5.44-135.91 5.44z",
      fill: "#333333",
      "p-id": "1405"
    }), vue.createElementVNode("path", {
      class: "logo",
      d: "M781.38 734.62c-13.41 0-33.48-0.93-58.57-4.83-9.55-1.49-16.09-10.43-14.6-19.98s10.43-16.08 19.98-14.6c41.75 6.49 67.92 3.89 68.18 3.86l0.73-0.06c25.35-1.64 46.44-10.36 60.99-25.21 14-14.29 21.41-33.69 21.41-56.1 0-44.81-36.46-81.27-81.27-81.27-9.67 0-17.5-7.83-17.5-17.5s7.83-17.5 17.5-17.5c64.11 0 116.27 52.16 116.27 116.27s-46.12 111.62-114.82 116.21c-1.74 0.17-8.09 0.71-18.3 0.71zM836.82 833.02H212.78c-9.67 0-17.5-7.83-17.5-17.5s7.83-17.5 17.5-17.5h624.04c9.67 0 17.5 7.83 17.5 17.5s-7.83 17.5-17.5 17.5z",
      fill: "#333333",
      "p-id": "1406"
    })])], -1 /* HOISTED */), vue.createStaticVNode("<div class=\"container\"><svg class=\"line-container\" viewBox=\"0 0 400 400\" width=\"400\" height=\"400\"><line class=\"line\" x1=\"0\" y1=\"20\" x2=\"400\" y2=\"20\" fill=\"none\" stroke-width=\"20\" stroke=\"red\"></line> / </svg></div><div class=\"container\"><svg width=\"200\" height=\"200\"><rect x=\"0\" y=\"0\" fill=\"red\" width=\"100\" height=\"50\"><set attributeName=\"x\" attributeType=\"XML\" to=\"10\" begin=\"1s\"></set><set attributeName=\"x\" attributeType=\"XML\" to=\"20\" begin=\"2s\"></set><set attributeName=\"fill\" attributeType=\"XML\" to=\"blue\" begin=\"2s\"></set></rect></svg></div><div class=\"container\"><svg width=\"200\" height=\"200\"><circle r=\"30\" cx=\"0\" cy=\"0\" stroke=\"black\" stroke-width=\"1\"><!--          &lt;animate attributeName=&quot;cx&quot; attributeType=&quot;XML&quot; from=&quot;0&quot; to=&quot;100&quot; dur=&quot;5s&quot; fill=&quot;freeze&quot;--><!--                   repeatCount=&quot;indefinite&quot;&gt;&lt;/animate&gt;--><!--          &lt;animate attributeName=&quot;cy&quot; attributeType=&quot;XML&quot; from=&quot;0&quot; to=&quot;50&quot; dur=&quot;5s&quot; fill=&quot;freeze&quot;--><!--                   repeatCount=&quot;indefinite&quot;&gt;&lt;/animate&gt;--><animateTransform attributeName=\"transform\" attributeType=\"XML\" begin=\"0\" dur=\"3s\" type=\"scale\" from=\"1\" to=\"2\" repeatCount=\"indefinite\"></animateTransform></circle> / </svg></div><div class=\"container\"><svg width=\"400\" height=\"400\"><polygon points=\"30 30 70 30 90 70 10 70\" fill=\"#fcc\" stroke=\"black\"><animate attributeName=\"points\" attributeType=\"XML\" to=\"50 30 70 50 50 90 30 50\" dur=\"5s\" fill=\"freeze\" repeatCount=\"1\"></animate></polygon></svg></div><div class=\"container\"><svg width=\"200\" height=\"200\"><rect x=\"0\" y=\"0\" fill=\"red\" width=\"10\" height=\"10\"><animateMotion id=\"forward-rect\" path=\"M10 10 L110 10 L110 110 L10 110\" dur=\"2s\" rotate=\"0\" fill=\"freeze\" begin=\"0; backward-rect.end + 0.5s\"></animateMotion><animateMotion id=\"backward-rect\" path=\"M10 100 L110 100 L110 10 L10 10\" dur=\"2s\" rotate=\"0\" fill=\"freeze\" begin=\"forward-rect.end + 0.5s\"></animateMotion><animate id=\"red-to-blue\" attributeName=\"fill\" attributeType=\"XML\" from=\"red\" to=\"blue\" dur=\"2s\" fill=\"freeze\" begin=\"0; blue-to-red.end+0.5s\"></animate><animate id=\"blue-to-red\" attributeName=\"fill\" attributeType=\"XML\" from=\"blue\" to=\"red\" dur=\"2s\" fill=\"freeze\" begin=\"red-to-blue.end+0.5s\"></animate></rect><path d=\"M10 10 L110 10 L110 110 L10 110\" fill=\"none\" stroke=\"green\"></path></svg></div><div class=\"container\"><svg viewBox=\"0 0 200 200\" width=\"200\" height=\"200\"><g id=\"rect1\"><rect x=\"0\" y=\"0\" rx=\"0\" ry=\"0\" width=\"100\" height=\"100\" fill=\"red\"><animate attributeType=\"XML\" attributeName=\"fill\" from=\"red\" to=\"green\" begin=\"rect1.click\" dur=\"2s\" fill=\"freeze\"></animate></rect></g><animateTransform attributeType=\"XML\" attributeName=\"transform\" type=\"translate\" from=\"0, 0\" to=\"50, 50\" begin=\"rect1.click\" dur=\"2s\" fill=\"freeze\"></animateTransform><rect x=\"0\" y=\"100\" width=\"100\" height=\"100\" fill=\"blue\"><animate attributeType=\"XML\" attributeName=\"fill\" from=\"blue\" to=\"green\" begin=\"rect1.click\" dur=\"2s\" fill=\"freeze\"></animate></rect></svg></div><div class=\"container bg-grey\"><svg width=\"400\" height=\"400\"><defs><mask id=\"test-mask\"><rect x=\"5\" y=\"5\" width=\"390\" height=\"390\" fill=\"green\"></rect></mask><linearGradient id=\"test-line-gradient\"><stop offset=\"0%\" stop-color=\"red\"></stop><stop offset=\"50%\" stop-color=\"green\"></stop><stop offset=\"100%\" stop-color=\"blue\" stop-opacity=\"0.5\"></stop></linearGradient><radialGradient id=\"test-radialGradient\" r=\"50%\" cx=\"50%\" cy=\"50%\" fx=\"55%\" fy=\"50%\"><stop offset=\"0%\" stop-color=\"#fff\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#fff\" stop-opacity=\"0\"></stop></radialGradient></defs><!--        &lt;rect x=&quot;5&quot; y=&quot;5&quot; width=&quot;390&quot; height=&quot;390&quot; fill=&quot;url(#test-radialGradient)&quot;&gt;&lt;/rect&gt;--><circle cx=\"200\" cy=\"200\" r=\"150\" fill=\"url(#test-radialGradient)\"></circle><!--        &lt;rect x=&quot;5&quot; y=&quot;5&quot; width=&quot;390&quot; height=&quot;390&quot; fill=&quot;blue&quot; mask=&quot;url(#test-mask)&quot;&gt;&lt;/rect&gt;--></svg></div>", 7)]));
  }

  var css_248z$1 = ".bg-grey {\n  background-color: grey;\n}\n\n.container svg {\n  border: 1px solid #000000;\n}\n\n.rect {\n  stroke-dasharray: 10 20 30;\n}\n\n.circle {\n  animation: circle 5s linear infinite;\n}\n\n@keyframes circle {\n  from {\n    stroke-dasharray: 0 800;\n  }\n  to {\n    stroke-dasharray: 800 0;\n  }\n}\n.rect-process {\n  animation: rect-process 5s linear infinite;\n}\n\n@keyframes rect-process {\n  from {\n    stroke-dasharray: 0 1257;\n  }\n  to {\n    stroke-dasharray: 1257 0;\n  }\n}\n.logo {\n  fill: none;\n  stroke: #333;\n  stroke-width: 5;\n  animation: logo 5s linear 1 forwards;\n}\n\n@keyframes logo {\n  0% {\n    fill: white;\n    stroke-dasharray: 3908;\n    stroke-dashoffset: 3908;\n  }\n  50% {\n    fill: white;\n    stroke-dasharray: 3908;\n    stroke-dashoffset: 0;\n  }\n  75% {\n    fill: red;\n  }\n  100% {\n    fill: cyan;\n  }\n}\n.line {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  transition: stroke-dashoffset 0.5s ease-out;\n}\n\n.line-container:hover .line {\n  stroke-dashoffset: 0;\n}";
  styleInject(css_248z$1);

  script$2.render = render$2;
  script$2.__file = "src/components/SvgAnimation/SvgAnimation.vue";

  var script$1 = {
    name: 'ImoocLoading',
    props: {
      width: {
        type: [Number, String],
        default: 50
      },
      height: {
        type: [Number, String],
        default: 50
      },
      outSideColor: {
        type: String,
        default: '#3be6cb'
      },
      inSideColor: {
        type: String,
        default: '#02bcfe'
      },
      duration: {
        type: [Number, String],
        default: 5
      }
    },
    setup(ctx) {
      const outSideColorAnimation = vue.computed(() => {
        "".concat(ctx.outSideColor, ";").concat(ctx.inSideColor, ";").concat(ctx.outSideColor);
      });
      const inSideColorAnimation = vue.computed(() => {
        "".concat(ctx.inSideColor, ";").concat(ctx.outSideColor, ";").concat(ctx.inSideColor);
      });
      return {
        outSideColorAnimation,
        inSideColorAnimation
      };
    }
  };

  const _hoisted_1$1 = {
    class: "imoocLoading"
  };
  const _hoisted_2$1 = ["width", "height"];
  const _hoisted_3 = ["stroke"];
  const _hoisted_4 = ["dur"];
  const _hoisted_5 = ["values", "dur"];
  const _hoisted_6 = ["stroke"];
  const _hoisted_7 = ["dur"];
  const _hoisted_8 = ["values", "dur"];
  const _hoisted_9 = {
    class: "imooc"
  };
  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [(vue.openBlock(), vue.createElementBlock("svg", {
      width: $props.width,
      height: $props.height,
      viewBox: "0 0 50 50",
      preserveAspectRatio: "xMidYMid meet"
    }, [vue.createCommentVNode("      stroke-dasharray = 2pir/4 = 2*3.1415926*22/4=34"), vue.createElementVNode("circle", {
      cx: "25",
      cy: "25",
      r: "22",
      fill: "none",
      stroke: $props.outSideColor,
      "stroke-width": "3",
      "stroke-dasharray": "34",
      "stroke-linecap": "round"
    }, [vue.createElementVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      from: "0 25 25",
      to: "360 25 25",
      dur: "".concat($props.duration, "s"),
      repeatCount: "indefinite"
    }, null, 8 /* PROPS */, _hoisted_4), vue.createElementVNode("animate", {
      attributeName: "stroke",
      values: $setup.inSideColorAnimation,
      dur: "".concat(+$props.duration * 2, "s"),
      repeatCount: "indefinite"
    }, null, 8 /* PROPS */, _hoisted_5)], 8 /* PROPS */, _hoisted_3), vue.createElementVNode("circle", {
      cx: "25",
      cy: "25",
      r: "12",
      fill: "none",
      stroke: $props.inSideColor,
      "stroke-width": "3",
      "stroke-dasharray": "19",
      "stroke-linecap": "round"
    }, [vue.createCommentVNode("        values=\"0 25 25;360 25 25\"========= to=\"0 25 25\" from=\"360 25 25\""), vue.createElementVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      values: "360 25 25;0 25 25",
      dur: "".concat($props.duration, "s"),
      repeatCount: "indefinite"
    }, null, 8 /* PROPS */, _hoisted_7), vue.createElementVNode("animate", {
      attributeName: "stroke",
      values: $setup.outSideColorAnimation,
      dur: "".concat(+$props.duration * 2, "s"),
      repeatCount: "indefinite"
    }, null, 8 /* PROPS */, _hoisted_8)], 8 /* PROPS */, _hoisted_6)], 8 /* PROPS */, _hoisted_2$1)), vue.createElementVNode("div", _hoisted_9, [vue.renderSlot(_ctx.$slots, "default")])]);
  }

  script$1.render = render$1;
  script$1.__file = "src/components/ImoocLoading/ImoocLoading.vue";

  function ImoocLoading (Vue) {
    Vue.component(script$1.name, script$1);
  }

  var script = {
    name: 'FlyBox',
    props: {},
    setup(ctx) {}
  };

  const _hoisted_1 = {
    class: "imooc-fly-box"
  };
  const _hoisted_2 = {
    class: "imooc-fly-box-content"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [_cache[0] || (_cache[0] = vue.createStaticVNode("<svg viewBox=\"0 0 400 400\" data-v-513cc2e2><defs data-v-513cc2e2><path id=\"fly-box-path\" d=\"M5 5 L395 5 L395 395 L5 395 Z\" fill=\"none\" data-v-513cc2e2></path><radialGradient id=\"radialGradient\" r=\"50%\" cx=\"50%\" cy=\"50%\" fx=\"100%\" fy=\"50%\" data-v-513cc2e2><stop offset=\"0%\" stop-color=\"#fff\" stop-opacity=\"1\" data-v-513cc2e2></stop><stop offset=\"100%\" stop-color=\"#fff\" stop-opacity=\"0\" data-v-513cc2e2></stop></radialGradient><mask id=\"fly-box-mask\" data-v-513cc2e2><circle cx=\"0\" cy=\"0\" r=\"150\" fill=\"url(#radialGradient)\" data-v-513cc2e2><animateMotion dur=\"3s\" path=\"M5 5 L395 5 L395 395 L5 395 Z\" rotate=\"auto\" repeatCount=\"indefinite\" data-v-513cc2e2></animateMotion></circle>/ </mask>/ </defs><use href=\"#fly-box-path\" stroke=\"red\" stroke-width=\"1\" data-v-513cc2e2></use><use href=\"#fly-box-path\" stroke=\"blue\" stroke-width=\"3\" mask=\"url(#fly-box-mask)\" data-v-513cc2e2></use></svg>", 1)), vue.createElementVNode("div", _hoisted_2, [vue.renderSlot(_ctx.$slots, "default")])]);
  }

  var css_248z = ".imooc-fly-box[data-v-513cc2e2] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.imooc-fly-box svg[data-v-513cc2e2] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.imooc-fly-box .imooc-fly-box-content[data-v-513cc2e2] {\n  width: 100%;\n  height: 100%;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-513cc2e2";
  script.__file = "src/components/FlyBox/FlyBox.vue";

  function FlyBox (Vue) {
    Vue.component(script.name, script);
  }

  // const data = require("sam-test-data");
  // console.log(data.random(), data.a, data.b);
  //
  // module.exports = {}

  function index (Vue) {
    Vue.component(script$3.name, script$3);
    Vue.component(script$2.name, script$2);
    Vue.use(ImoocLoading);
    Vue.use(FlyBox);
  }

  return index;

}));
