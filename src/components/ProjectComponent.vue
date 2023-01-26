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
  <h1>{{ project.name }}</h1>
</template>


<style>

</style>