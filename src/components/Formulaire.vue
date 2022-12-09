<template>
    <div id="formulaire">
        <h2>Contact</h2>
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

#formulaire{
    display: flex;
    flex-direction: column;
    background-color: #1b1b1d;

    h2{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 20%;
        padding: 20px;
        padding-top: 40px;
        padding-left: 100px;
        font-size: 2em;
        font-weight: 500;
        color: #D6B285;
    }
}

</style>
