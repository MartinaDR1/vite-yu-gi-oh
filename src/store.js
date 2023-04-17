import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num15=&offset=0',
    cards:null,
    searchText: '',
    loading: true,

    fetchCards(url){
        axios 
        .get(url)
        .then(response => {
            console.log(response.data.data);
            this.cards = response.data.data
            this.loading = false
        })
        .catch (err => {
            console.log(err);
            console.error(err.message)
        })
    }
})