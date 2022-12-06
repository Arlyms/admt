<template>
  <Loader/>
  <Home/>
  <Produit/>
  <Contact/>
  <Footer/>
  <router-view/>
</template>

<script>
import Loader from '@/views/Loader.vue'
import Home from '@/views/Home.vue'
import Produit from '@/views/Produit.vue'
import Contact from '@/views/Contact.vue'
import Footer from '@/views/Footer.vue'

export default {
  name: 'App',
  components: {
    Loader, 
    Home, 
    Produit,
    Contact,
    Footer
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
