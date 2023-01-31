<script>
export default {
  name: 'Navbar'
}
</script>

<template>

  <nav>
    <ul>
      <li>
        <router-link :to="{name: 'home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'contact'}">Contact Us</router-link>
      </li>
    </ul>
  </nav>


</template>


<style>

</style>