<script>
export default {
  name: 'ProjectComponent',
  props: {
    project: Object,
    links: Array
  }
}
</script>


<template>
  <div class="col">

    <div class="card">
    <img :src="project.cover_image" class="card-img-top" :alt="project.name">
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <h5 class="card-title">{{ project.id }}</h5>
      <p class="card-text">{{ project.summary }}</p>
    </div>
  </div>
  </div>
</template>


<style>

</style>