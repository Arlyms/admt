<template>
  <Loader/>
  <Navigation/>
  <router-view/>
</template>

<script>
    import Loader from '@/components/Loader'
    import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Loader,
    Navigation
  }
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
