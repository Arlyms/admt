<template>
    <div id="footer">
        <div class="logo"></div>
        <div class="reseaux"></div>
        <div class="informations"></div>
    </div>
</template>

<script>

export default {
    name: 'Footer',
    components: {
    }
}
</script>

<style lang="scss" scoped>
    
    #footer{
        position: relative;
        width: 100vw;
        height: 30vh;
        background-color: #D6B285;
        display: flex;
        justify-content: space-around;
        .logo, .reseaux, .informations{
            background-color: black;
            width: 30%;
            height: 80%;
            margin-top: 20px;
        }             
    }
</style>