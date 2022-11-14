<template>
  <div class="home">
    <div class="background">
      <div class="left_top"></div>
      <div class="left_top_left"></div>
      <div class="left_bottom_left"></div>
      <div class="left_bottom"></div>
      <div class="right_bottom"></div>
      <div class="right_bottom_right"></div>
      <div class="right_top_right"></div>
      <div class="right_top"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .home{
    width: 100vw;
    height: 100vh;
    .background{
      position: relative;
      width: 100%;
      height: 100%;
      .left_top{
        position: absolute;
        top: 20px;
        left: 70px;
        width: 2px;
        height: 40px; 
        background-color: #D6B285;       
      }
      .left_top_left{
        position: absolute;
        top: 70px;
        left: 20px;
        width: 40px;
        height: 2px; 
        background-color: #D6B285;        
      }
      .left_bottom_left{
        position: absolute;
        bottom: 70px;
        left: 20px;
        width: 40px;
        height: 2px; 
        background-color: #D6B285;               
      }
      .left_bottom{
        position: absolute;
        bottom: 20px;
        left: 70px;
        width: 2px;
        height: 40px; 
        background-color: #D6B285;        
      }
      .right_bottom{
        position: absolute;
        bottom: 20px;
        right: 70px;
        width: 2px;
        height: 40px; 
        background-color: #D6B285;        
      }
      .right_bottom_right{
        position: absolute;
        bottom: 70px;
        right: 20px;
        width: 40px;
        height: 2px; 
        background-color: #D6B285;        
      }
      .right_top_right{
        position: absolute;
        top: 70px;
        right: 20px;
        width: 40px;
        height: 2px; 
        background-color: #D6B285;         
      }
      .right_top{
        position: absolute;
        top: 20px;
        right: 70px;
        width: 2px;
        height: 40px; 
        background-color: #D6B285;         
      }
    }
  }
</style>
