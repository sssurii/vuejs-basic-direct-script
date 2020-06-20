const app = new Vue({
    el: '#app',
    data: {
        project: 'Vue.js'
    },
    created() {
        this.list = {
            0: "Learn Basic Concept - How Vue.js works",
            1: "Setup Vue.js",
            2: "Learn Vue.js syntax",
            3: "Hello world",
            4: "First dummy component"
        }
    }
});