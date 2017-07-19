import Vue from 'vue';

import VInput from './vInput';
import VSelect from './vSelect';

export default function registerComponents() {
    Vue.component('v-input', VInput);
    Vue.component('v-select', VSelect);
}
