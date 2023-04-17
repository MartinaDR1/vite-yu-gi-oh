import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  apiUrl: ' https://db.ygoprodeck.com/api/v7/cardinfo.php',

  fetchCards(url){
    axios 
    .get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch (err => {
        console.log(err);
        console.error(err.message)
    })
  }
})