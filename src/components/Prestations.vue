<template>
  <div id="prestations">
    <h2>Prestations</h2>
    <div class="cards">
      <div class="card">
        <img class="card__visuel" alt="cuisine" src="../assets/photos/cuisine1.1.jpeg">
        <div class="card__content">
          <h3>aménagement</h3>
        </div>
      </div>
      <div class="card">
        <img class="card__visuel" alt="renard" src="../assets/photos/renard1.0.jpeg">
        <div class="card__content">
          <h3>design</h3>
        </div>            
      </div>
      <div class="card">
        <img class="card__visuel" alt="tabouret" src="../assets/photos/tabouret1.0.jpeg">
        <div class="card__content">
          <h3>mobilier</h3>
        </div>        
      </div>      
    </div>
    <h4><router-link class="link" :to="{name:'portfolio'}">Voir plus</router-link></h4>
  </div>
</template>

<script>

export default {
  name: 'Prestations',
  components: {
  }
}
</script>

<style lang="scss" scoped>

  #prestations {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: #1b1b1d;
    background: radial-gradient(circle farthest-corner at center center, #666666 0%, #1B1B1D 46%);

    h2{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 20%;
      padding-left: 100px;
      font-size: 2em;
      font-weight: 500;
      color: #D6B285;
    }
    .cards{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 60%;
      padding: auto;
      .card{
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 100%;
        background-color: #D6B285;
        border-radius: 10px;
        &__visuel{
          width: 100%;
          height: 80%;
          border-radius: 10px 10px 0 0;
          object-fit: cover;
          box-shadow: 0px 2px 20px 0px rgba(27, 27, 29, 1);
        }
        &__content{
          width: 100%;
          height: 20%;
          display: flex;
          justify-content: center;
          align-items: center;
          h3{
            font-size: 16px;
            text-transform: uppercase;
            font-weight: 500;
          }  
        }
      }
    }
    h4 {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 20%;
      padding-right: 100px;
      font-size: 1em;
      font-weight: 500;
      .link{
        text-decoration: none;
        color: #D6B285;
        &:hover{
          color: white;
        }
      }
    }
  }
</style>
