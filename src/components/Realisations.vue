<template>
    <div id="realisations">
        <h2>Realisations</h2>
        <div class="cards">
            <div class="card__left">
                <div class="card__left--carousel">
                    
                    <img class="image__1" src="@/assets/photos/évier1.0.jpeg" alt="évier en bois">
                </div>
                <div class="card__left--content">
                    <h3>Vasque suspendu</h3>
                    <p>chêne massif</p>
                    <img src="" alt="">
                </div>
            </div>
            <div class="card__right">
                <div class="card__right--content">
                    <h3>Vasque suspendu</h3>
                    <p>chêne massif</p>
                    <img src="" alt="">
                </div>
                <div class="card__right--carousel">
                    <img class="image__1" src="@/assets/photos/tabouret1.0.jpeg" alt="tabouret">
                </div>
            </div>
            <div class="card__left">
                <div class="card__left--carousel">
                    <img class="image__1" src="@/assets/photos/étagère1.1.jpeg" alt="étagère">
                </div>
                <div class="card__left--content">
                    <h3>Vasque suspendu</h3>
                    <p>chêne massif</p>
                    <img src="" alt="">
                </div>
            </div>
            <div class="card__right">
                <div class="card__right--content">
                    <h3>Vasque suspendu</h3>
                    <p>chêne massif</p>
                    <img src="" alt="">
                </div>
                <div class="card__right--carousel">
                    <img class="image__1" src="@/assets/photos/tabouret_bar1.0.jpeg" alt="tabouret">
                </div>
            </div>
            <div class="card__left">
                <div class="card__left--carousel">
                    <img class="image__1" src="@/assets/photos/lit1.0.jpeg" alt="évier en bois">
                </div>
                <div class="card__left--content">
                    <h3>Lit superposé </h3>
                    <p>3 enfants</p>
                    <p>épicéa</p>
                    <img src="" alt="">
                </div>
            </div>
            <div class="card__right">
                <div class="card__right--content">
                    <h3>Vasque suspendu</h3>
                    <p>chêne massif</p>
                    <img src="" alt="">
                </div>
                <div class="card__right--carousel">
                    <img class="image__1" src="@/assets/photos/cuisine1.0.jpeg" alt="tabouret">
                </div>
            </div>
        </div>            
    </div>

</template>

<script>

export default {
    name: 'Realisation',
    components: {
    }
}
</script>

<style lang="scss" scoped>

#realisations{
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
    .cards{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        .card__left{
            width: 60%;
            height: 400px;
            margin: 40px;
            background-color: #1b1b1d;
            position: relative;
            &--carousel{
                z-index: 1;
                position: absolute;
                width: 80%;
                height: 100%;
                .image__1{
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }
            &--content{
                z-index: 2;
                position: absolute;
                right: 0;
                width: 40%;
                height: 100%;
                background-color: #D6B285;
                -webkit-clip-path: polygon(37% 0, 100% 0, 100% 100%, 0% 100%);
                clip-path: polygon(37% 0, 100% 0, 100% 100%, 0% 100%);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                h3, p{
                    color: #1b1b1d;
                    padding-right: 20px;
                }
            }
        }
        .card__right{
            width: 60%;
            height: 400px;
            margin: 30px;
            position: relative;
            background-color: #1b1b1d;
            &--content{
                z-index: 1;
                position: absolute;
                width: 40%;
                height: 100%;
                background-color: #D6B285;
                -webkit-clip-path: polygon(0 0, 63% 0, 100% 100%, 0 100%);
                clip-path: polygon(0 0, 63% 0, 100% 100%, 0 100%);
            }
            &--carousel{
                position: absolute;
                right: 0;
                width: 80%;
                height: 100%;
                .image__1{
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

</style>
