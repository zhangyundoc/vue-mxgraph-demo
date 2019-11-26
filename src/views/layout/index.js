export default {
    name: 'Home',

    components: {
        
    },

    data() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
            collapse: true,
        };
    },

    methods: {
        _toggle() {
            this.collapse = !this.collapse;
        },
    },

}
