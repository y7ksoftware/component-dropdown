<script>

    import transition from 'transition-to-from-auto';
    import { mixin as clickaway } from 'vue-clickaway';

    import Arrow from '../assets/Arrow';

    /**
     *
     */
    export default {

        mixins: [
            clickaway,
        ],


        components: {
            Arrow,
        },


        props: {
            options: {
                type: Array,
                required: true,
            },
            value: {
                type: [String, Number],
                default: null,
            },
            showArrow: {
                type: Boolean,
                default: true,
            },
        },


        data() {
            return {
                isOpen: false,
            };
        },


        computed: {
            activeOption() {
                return this.options.find(option => option.value === this.value);
            },


            classes() {
                return {
                    'dropdown-isOpen': this.isOpen,
                };
            },
        },


        methods: {
            toggleDropdown() {
                if (this.isOpen) {
                    this.closeDropdown();
                } else {
                    this.openDropdown();
                }
            },


            openDropdown() {
                this.isOpen = true;
                transition({
                    element: this.$refs.options,
                    prop: 'height',
                    style: 'height 0.2s ease',
                    val: 'auto',
                });
            },


            closeDropdown() {
                this.isOpen = false;
                transition({
                    element: this.$refs.options,
                    prop: 'height',
                    style: 'height 0.2s ease',
                    val: 0,
                });
            },


            selectOption(value) {
                this.$emit('input', value);
                this.closeDropdown();
            },
        },
    };

</script>

<template>
    <div class="dropdown" :class="classes" v-on-clickaway="closeDropdown">

        <button
            class="dropdown-activeOption"
            @click="toggleDropdown"
        >
            {{ activeOption ? activeOption.label : '' }}
            <arrow v-if="this.showArrow" class="dropdown-itemArrow"></arrow>
        </button>

        <ul class="dropdown-options" ref="options">
            <li
                class="dropdown-option"
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option.value)"
            >
                {{ option.label }}
            </li>
        </ul>
    </div>
</template>
