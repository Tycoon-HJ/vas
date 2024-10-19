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
export default function (Vue){
    Vue.component(Test.name, Test);
    Vue.component(Icon.name, Icon);
}