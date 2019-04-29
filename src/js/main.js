import Vue from 'vue';

import _Dropdown from './components/Dropdown';

export default {
    registerGlobally: function() {
        Vue.component('dropdown', _Dropdown);
    },
};

export const Dropdown = _Dropdown;
