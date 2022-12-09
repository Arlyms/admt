<template>
    <Formulaire/>
    <Footer/>
</template>

<script>
    import Formulaire from '@/components/Formulaire.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'Home',
        components: {
        Formulaire, 
        Footer
    }
}
</script>