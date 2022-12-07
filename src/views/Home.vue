<template>
    <Presentation/>
    <Prestations/>
    <Localisation/>
    <Footer/>
</template>

<script>
    import Presentation from '@/components/Presentation.vue'
    import Prestations from '@/components/Prestations.vue'
    import Localisation from '@/components/Localisation.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'App',
        components: {
        Presentation, 
        Prestations,
        Localisation,
        Footer
    }
}
</script>

<style>

  * {
    padding: 0;
    margin: 0;
    }       

#home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }
</style>