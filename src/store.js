import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cards:null,
    loading: true,
    archetypes: [],
    selectValue: null,
    
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
    },
    APIArchetype(url) {
        axios 
          .get(url)
          .then(response => {
            response.data.data.forEach(element => {
              if(!this.archetypes.includes(element.archetype)){
                this.archetypes.push(element.archetype)
              };
            });
        })
        .catch(err => {
            console.log(err);
            console.error(err.message);
        })
    }
})