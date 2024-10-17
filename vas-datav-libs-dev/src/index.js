// const data = require("sam-test-data");
// console.log(data.random(), data.a, data.b);
//
// module.exports = {}

// es6
// import * as  data from 'sam-test-data'
// console.log(data.random(), data.a, data.b);
//
// export default  {}


import Test from './Test.vue';
export default function (Vue){
    Vue.component(Test.name, Test);
}