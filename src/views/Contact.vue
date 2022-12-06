<template>
    <div id="contact">
        <div class="side-left">
            <img class="background" src="@/assets/trieves.jpeg" alt="">
        </div>
        <div class="side-right">
        </div>
    </div>
</template>

<script>

export default {
    name: 'Contact',
    components: {
    }
}
</script>

<style lang="scss" scoped>
    
    #contact{
        position: relative;
        width: 100vw;
        height: 100vh;
        .side-left{
            z-index: 1;
            position: absolute;
            left: 0;
            width: 70%;
            height: 100%;
            .background{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .side-right{
            z-index: 2;
            position: absolute;
            right: 0;
            width: 61.77%;
            height: 100%;
            background-color: #1b1b1d;
            -webkit-clip-path: polygon(37% 0, 100% 0, 100% 100%, 0% 100%);
            clip-path: polygon(37% 0, 100% 0, 100% 100%, 0% 100%);
        }
    }
</style>