const { createApp } = Vue;


createApp({
    data() {
        return {
            mail:'',
            arrayEmail : [] 
        }
    },

    mounted() {
        this.emailRandom();
    },

    methods: {
        emailRandom(){
            for(let i = 1; i <= 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.arrayEmail.push(result.data.response);
                });
            }
        }
    },

}).mount('#app')