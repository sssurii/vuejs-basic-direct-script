const app = new Vue({
    el: '#app',
    data: {
        project: 'Vue.js',
        countries: []
    },
    computed: {
        totalPopulation () {
            return this.countries.reduce((sum, country) => {
                return sum + country.population
            }, 0)
        },
        totalCountries () {
            return this.countries.length;
        }
    },
    created() {
        this.list = {
            0: "Learn Basic Concept - How Vue.js works",
            1: "Setup Vue.js",
            2: "Learn Vue.js syntax",
            3: "Hello world",
            4: "First dummy component"
        }

        fetch("https://restcountries.eu/rest/v2/region/europe?fields=name;population")
            .then(function(response) {
                return response.json();
            })
            .then(data => {
                this.countries = data
            }); //here i used arrow function to get parent this reference.
    }
});