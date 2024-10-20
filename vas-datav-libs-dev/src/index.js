// const data = require("sam-test-data");
// console.log(data.random(), data.a, data.b);
//
// module.exports = {}

// es6
// import * as  data from 'sam-test-data'
// console.log(data.random(), data.a, data.b);
//
// export default  {}


import Test from './components/Test.vue';
import Icon from "./components/Icon/Icon.vue";
import SvgAnimation from "./components/SvgAnimation/SvgAnimation.vue";
import ImoocLoading from "./components/ImoocLoading/index";

export default function (Vue) {
    Vue.component(Test.name, Test);
    Vue.component(SvgAnimation.name, SvgAnimation);
    Vue.use(ImoocLoading);
}