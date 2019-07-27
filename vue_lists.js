var app = new Vue({
    el: '#app',
    data: {
        countries_list: [],
        
    },
    
    mounted() {
        axios
            .get('https://add your url here')
            .then(response => (
                this.countries_list = response.data
                ))
            .catch(error =>(
                console.log(error)
                ));
    }

})