<template>
    <div id="footer">
        <div class="logo">
            <img src="../assets/logo-admt.png" alt="">
        </div>
        <div class="reseaux">
            <h4>Contacts</h4>
            <div class="links">
                <a href="https://www.instagram.com/ebenisterie.admt_/" target="_blank" ><img src="../assets/reseaux/instagram.png" alt="icone instagram"></a>
                <a href="https://www.facebook.com/profile.php?id=100076067143970" target="_blank" ><img src="../assets/reseaux/facebook.png" alt="icone facebook"></a>
                <router-link :to="{name:'contact'}"><img src="../assets/reseaux/email.png" alt="icone enveloppe"></router-link>
            </div>
        </div>
        <div class="informations">
            <h4>Informations</h4>
            <p>ADMT<br>85 RUE DE LA CHAPELLE<br>38930 LALLEY<br>FRANCE</p>
            <P><router-link class="link" :to="{name:'contact'}">Mentions légales</router-link></P>
        </div>
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
        align-items: center;
        
        h4{
            color: #1b1b1d;
            padding-bottom: 10px;
        }

        p{
            font-size: 0.8em;
        }
        .reseaux, .informations{
            width: 30%;
            height: 80%;
            margin-top: 20px;
            text-align: start;
        }  
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40%;
            height: 80%;
            img{
            width: 40%;
            } 
        }  
        .links{
            display: flex;
            align-items: center;
            width: 100%;
            img{
                height: 2.2em;
                padding: 10px 10px 10px 0;
            }
        }     
    }
</style>