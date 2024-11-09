
import Test from './components/Test.vue';
import Icon from "./components/Icon/Icon.vue";
import SvgAnimation from "./components/SvgAnimation/SvgAnimation.vue";
import ImoocLoading from "./components/ImoocLoading/index";
import FlyBox from "./components/FlyBox";
import Map from "./components/Map";
import Container from "./components/Container";
import Logo from "./components/Logo";

export default function (Vue) {
    Vue.component(Test.name, Test);
    Vue.component(SvgAnimation.name, SvgAnimation);
    Vue.use(ImoocLoading);
    Vue.use(FlyBox);
    Vue.use(Map);
    Vue.use(Logo);
    Vue.use(Container);
}