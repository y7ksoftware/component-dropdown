import Vue from 'vue';

import _Dropdown from './components/Dropdown';

export default {
    registerGlobally() {
        Vue.component('dropdown', _Dropdown);
    },
};

export const Dropdown = _Dropdown;
