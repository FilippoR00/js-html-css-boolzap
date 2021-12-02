const app = new Vue({
    el: "#root",
    data: {
        pointer: 0,
        tempMsg: '',
        tempSearch: '',
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        arrowBox: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        arrowBox: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        arrowBox: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        arrowBox: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        arrowBox: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received',
                        arrowBox: false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        arrowBox: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        arrowBox: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        arrowBox: false,
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        arrowBox: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        arrowBox: false,
                    }
                ],
            },
        ],
    },
    methods: {
        // funzione che genera il percorso delle immagini 
        initImage : function(index){
            return "img/avatar" + this.contacts[index].avatar + ".jpg";
        },
        // funzione che aggiunge i nuovi messaggi all'array, li stampa a video e genera il messaggio di risposta dopo un secondo 
        sendMsg : function() {
            if(this.tempMsg != "" && this.tempMsg != " "){
                this.contacts[this.pointer].messages.push({
                    date: this.createData(),
                    message: this.tempMsg,
                    status: 'sent',
                    arrowBox: false,
                });
                this.tempMsg = "";
                setTimeout(() => {
                    this.contacts[this.pointer].messages.push({
                        date: this.createData(),
                        message: 'ok',
                        status: 'received',
                        arrowBox: false,
                    });}, 1000);
            }
        },
        // funzione che compara due stringhe (una proveniente dal nome dell'utente e una proveniente dall'input di testo), e ne trova le similitudini. Poi tramite un v-if si decide se far stampare a video l'utente.
        search : function(index){
            if (this.contacts[index].name.toLowerCase().includes(this.tempSearch.toLowerCase())) {
                return true
            } else {
                return false
            }
        },
        // funzione che prende giorno mese anno ora minuti e secondi e ritorna una stringa
        createData : function() {
            let today = new Date();
            let day = today.getDate();
            let month = today.getMonth() + 1;
            let year = today.getFullYear();
            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;
            let date = day + '/' + month + '/' + year;
            let ora = today.getHours();
            let minuti = today.getMinutes();
            let secondi = today.getSeconds();
            if (secondi < 10) secondi = '0' + secondi;
            if (minuti < 10) minuti = '0' + minuti;
            if (ora < 10) ora = '0' + ora;
            let time = ora + ":" + minuti + ":" + secondi;
            return date + " " + time;
        },
        // funzione che genera un numero random compreso tra min e max 
        random(min,max){
            let temp = Math.floor(Math.random() * max - min + 1) + min;
            if(temp < 10) temp = '0' + temp;
            return temp;
        },
        deleteMsg(index){
            this.contacts[this.pointer].messages.splice(index, 1);
            this.contacts[this.pointer].messages[index].arrowBox = true;
        }
    },
})