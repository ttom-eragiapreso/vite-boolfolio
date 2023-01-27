<script>
import axios from 'axios';
export default {
  name: 'DetailsComponent',
  data(){
    return {
      Apiurl: 'http://127.0.0.1:8000/api/projects/details/',
      project: {}
    }
  },
  methods: {
    getApi(){
      axios.get(this.Apiurl + this.$route.params.slug)
        .then( response => this.project = response.data )
    }
  },
  mounted(){
    this.getApi()
  }
}
</script>

<template>

<div class="container">
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="project.cover_image" class="img-fluid rounded-start" :alt="project.name">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text">{{ project.summary }}</p>
        <p class="card-text"><small class="text-muted">{{ project.client_name }}</small></p>
      </div>
    </div>
  </div>
</div>
</div>

  
</template>

<style>

</style>