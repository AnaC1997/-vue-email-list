
const { createApp } = Vue

createApp({
    data() {
        return {
            // Inizializzazione dell'array vuoto per le email generate
            emailGenerati: [],
        };
    },
    methods: {
        // Metodo per generare email
        generaEmail() {
            // Resetta l'array prima di generare nuove email
            this.emailGenerati = [];
            // Ciclo per generare 10 email
            for (let i = 0; i < 10; i++) {
                // Chiamata API per ottenere una nuova email
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    // Estrae l'email dalla risposta dell'API
                    const nuovaEmail = resp.data.response;
                    // Aggiunge la nuova email all'array
                    this.emailGenerati.push(nuovaEmail);
                    console.log(nuovaEmail)
                });
            }
        },
    }
}).mount('#app')