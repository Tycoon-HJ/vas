<script setup>
import {ref} from "vue";
import {VueUiKpi} from "vue-data-ui";
import "vue-data-ui/style.css"

const title=ref("最优价");
const Htitle=ref("最高价");
const Dtitle=ref("最低价");

const config = ref({
  "animationFrames": 60,
  "animationValueStart": 0,
  "backgroundColor": "rgba(199, 213, 255, 1)",
  "fontFamily": "inherit",
  "layoutClass": "p-4 m-4 rounded-md shadow",
  "layoutCss": "",
  "prefix": "",
  "suffix": "",
  "title": title,
  "titleBold": true,
  "titleColor": "#1A1A1A",
  "titleClass": "",
  "titleCss": "",
  "titleFontSize": 16,
  "useAnimation": true,
  "valueBold": true,
  "valueColor": "#6376DD",
  "valueClass": "",
  "valueCss": "",
  "valueFontSize": 32,
  "valueRounding": 0,
  "formatter": null,
  "analogDigits": {
    "show": false,
    "height": 40,
    "color": "#1A1A1Aff",
    "skeletonColor": "rgba(199, 213, 255, 1)"
  }
});
const config1 = ref({
  "animationFrames": 60,
  "animationValueStart": 0,
  "backgroundColor": "rgba(199, 213, 255, 1)",
  "fontFamily": "inherit",
  "layoutClass": "p-4 m-4 rounded-md shadow",
  "layoutCss": "",
  "prefix": "",
  "suffix": "",
  "title": Htitle,
  "titleBold": true,
  "titleColor": "#1A1A1A",
  "titleClass": "",
  "titleCss": "",
  "titleFontSize": 16,
  "useAnimation": true,
  "valueBold": true,
  "valueColor": "#6376DD",
  "valueClass": "",
  "valueCss": "",
  "valueFontSize": 32,
  "valueRounding": 0,
  "formatter": null,
  "analogDigits": {
    "show": false,
    "height": 40,
    "color": "#1A1A1Aff",
    "skeletonColor": "rgba(199, 213, 255, 1)"
  }
});
const config2 = ref({
  "animationFrames": 60,
  "animationValueStart": 0,
  "backgroundColor": "rgba(199, 213, 255, 1)",
  "fontFamily": "inherit",
  "layoutClass": "p-4 m-4 rounded-md shadow",
  "layoutCss": "",
  "prefix": "",
  "suffix": "",
  "title": Dtitle,
  "titleBold": true,
  "titleColor": "#1A1A1A",
  "titleClass": "",
  "titleCss": "",
  "titleFontSize": 16,
  "useAnimation": true,
  "valueBold": true,
  "valueColor": "#6376DD",
  "valueClass": "",
  "valueCss": "",
  "valueFontSize": 32,
  "valueRounding": 0,
  "formatter": null,
  "analogDigits": {
    "show": false,
    "height": 40,
    "color": "#1A1A1Aff",
    "skeletonColor": "rgba(199, 213, 255, 1)"
  }
});


const dataset = ref(1618);
const dataset1 = ref(342423);

</script>

<template>
  <div style="display: flex; height: 100%">
    <div style="margin-top: 20px; margin-left:50px;">
      <VueUiKpi :config="config" :dataset="dataset"/>

    </div>
    <div style="margin-top: 20px; margin-left:50px;">
      <VueUiKpi :config="config1" :dataset="dataset1"/>

    </div>
    <div style="margin-top: 20px; margin-left:50px;">
      <VueUiKpi :config="config2" :dataset="dataset1"/>
    </div>
    <div style="margin-top: 20px; margin-left:50px;">
      <VueUiKpi :config="config" :dataset="dataset"/>

    </div>
    <div style="margin-top: 20px; margin-left:50px;">
      <VueUiKpi :config="config1" :dataset="dataset1"/>

    </div>
    <div style="margin-top: 20px; margin-left:50px;">
      <VueUiKpi :config="config2" :dataset="dataset1"/>
    </div>
    <div style="margin-top: 20px; margin-left:50px;">
      <VueUiKpi :config="config" :dataset="dataset"/>

    </div>
    <div style="margin-top: 20px; margin-left:50px;">
      <VueUiKpi :config="config1" :dataset="dataset1"/>

    </div>
    <div style="margin-top: 20px; margin-left:50px;">
      <VueUiKpi :config="config2" :dataset="dataset1"/>
    </div>
  </div>

</template>

