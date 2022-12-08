<template>
  <div id="presentation">
    <div class="side-left">
      <div class="logo">
      </div>
      <p>Spécialisé dans la <strong>création</strong> de <strong>mobilier</strong> sur mesure<br>ainsi que l’aménagement intérieur.<br>L’<strong>ébenisterie</strong> ADMT vous accompagnera dans vos projets,<br>du <strong>design</strong> à la <strong>conception</strong>.</p>
    </div>
    <div class="side-right">
      <img class="background" src="@/assets/background-home.jpg" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Presentation',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  
  #presentation{
    position: relative;
    width: 100vw;
    height: 100vh;
    .side-left{
      z-index: 2;
      position: absolute;
      display: flex;
      flex-direction: column;
      left: 0;
      width: 61.77%;
      height: 100%;
      background-color: #1b1b1d;
      -webkit-clip-path: polygon(0 0, 63% 0, 100% 100%, 0 100%);
      clip-path: polygon(0 0, 63% 0, 100% 100%, 0 100%);
      padding-left: 100px;
      .logo{
        height: 50%;
      }
      p{
        height: 50%;
        text-align: start;
        color: #D6B285;
        font-size: 1.2em;
      }
    }

    .side-right{
      z-index: 1;
      position: absolute;
      right: 0;
      width: 70%;
      height: 100%;
      background-color: #1b1b1d;
        .background{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
    }
    
  }
</style>
