<script>
import axios from 'axios';
export default {
  data(){
    return {
      name: '',
      email: '',
      message: '',
      url: 'http://127.0.0.1:8000/api/contact'
    }
  },
  methods: {
    sendEmail(){

      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }

      axios.post(this.url, data)
        .then((response) => {
          this.name = ''
          this.email = ''
          this.message = ''
        })


    }
  }
}
</script>

<template>
  <h1>Qui ci mettiamo il form per creare una email</h1>

  <form @submit.prevent="sendEmail()">
    <div class="form-container">
      <div>
        <label for="name">Nome</label>
        <input type="text" id="name" placeholder="Inserisci il tuo nome" v-model="name">
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Inserisci la tua email" v-model="email">
      </div>
      <div>
        <label for="message">Messaggio</label>
        <textarea id="message" cols="30" rows="10" placeholder="Inserisci il tuo messaggio" v-model="message"></textarea>
      </div>
    </div>
    <button type="submit">Invia</button>
  </form>
  
  
</template>


<style>

</style>