<script>
import axios from 'axios';
import Project from './components/ProjectComponent.vue'

export default {
  name: 'App',
  components: {
    Project
  },
  data(){
    return {
      Apiurl: 'http://127.0.0.1:8000/api/projects',
      data: [],
      pagination: [],
      links: []
    }
  },
  methods: {
    ApiCall(url){
      axios.get(url)
        .then(response => {
          this.data = response.data.projects.data
          this.links = response.data.projects.links
        })
        .catch(error => {console.log(error)})
    }
  },
  mounted(){
    this.ApiCall(this.Apiurl)
  }
}
</script>

<template>

  <h2>Questo è l'app principale</h2>

  <div class="container">
    <div class="row row-cols-3">
      <project v-for="project in this.data" :key="project.id" :project="project" />

    </div>
  </div>

  <button v-for="(link, index) in this.links" 
    :key="index" 
    v-html="link.label" 
    :disabled="link.active || !link.url"
    @click="this.ApiCall(link.url)"
    ></button>
  
</template>


<style>

</style>