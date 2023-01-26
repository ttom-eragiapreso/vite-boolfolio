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
          console.log(this.data, this.links)
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


  <project v-for="project in this.data" :key="project.id" :project="project" :links="this.links"/>
  
</template>


<style>

</style>