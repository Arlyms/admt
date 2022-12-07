<template>
  <div id="prestations">
    <div class="cards">
      <div class="card">

      </div>
      <div class="card">

      </div>
      <div class="card">

      </div>      
    </div>
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
    width: 100vw;
    height: 100vh;
    background: #4D4D4D;
    background: radial-gradient(circle farthest-corner at center center, #666666 0%, #1B1B1D 46%);

    .cards{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: auto;
      .card{
        width: 20%;
        height: 70%;
        background-color: white;
        border-radius: 10px;
        transition: 0.2s;
        &:hover{
          transform: scale(1.05);
        }

      }
    }
  }
</style>
