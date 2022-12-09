<template>
    <Realisations/>
    <Footer/>
</template>

<script>
    import Realisations from '@/components/Realisations.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'Home',
        components: {
        Realisations, 
        Footer
    }
}
</script>