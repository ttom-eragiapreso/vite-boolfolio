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
      links: [],
      current_page: null,
      last_page: null
    }
  },
  methods: {
    ApiCall(url){
      axios.get(url)
        .then(response => {
          this.data = response.data.projects.data
          this.links = response.data.projects.links
          this.current_page = response.data.projects.current_page
          this.last_page = response.data.projects.last_page
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

  <h2>Sei alla pagina {{ this.current_page }} di {{ this.last_page }}</h2>

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