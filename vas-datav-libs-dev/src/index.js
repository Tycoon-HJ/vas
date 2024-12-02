
import Test from './components/Test.vue';
import Icon from "./components/Icon/Icon.vue";
import SvgAnimation from "./components/SvgAnimation/SvgAnimation.vue";
import ImoocLoading from "./components/ImoocLoading/index";
import FlyBox from "./components/FlyBox";
import Map from "./components/Map";
import Container from "./components/Container";
import Logo from "./components/Logo";
import Calendar from "./components/Calendar";
import Line from "./components/Line";
import Lines from "./components/Lines";
import BarRace from "./components/BarRace";
import DatasetLink from "./components/DatasetLink";
import LineBar from "./components/LineBar";
import Gauge from "./components/Gauge";

export default function (Vue) {
    Vue.component(Test.name, Test);
    Vue.component(SvgAnimation.name, SvgAnimation);
    Vue.use(ImoocLoading);
    Vue.use(FlyBox);
    Vue.use(Map);
    Vue.use(Logo);
    Vue.use(Calendar);
    Vue.use(Line);
    Vue.use(Lines);
    Vue.use(BarRace);
    Vue.use(DatasetLink);
    Vue.use(LineBar);
    Vue.use(Gauge);
    Vue.use(Container);
}