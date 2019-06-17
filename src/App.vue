<template>
  <div id="app">  
    <h1>NUMERATE PLAYGROUND</h1>
    <p>For the love of all things dates and numbers</p>
    <img alt="background image numbers" src="./assets/blackNumber.jpg" width="100%">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  /* background-image: url("./assets/numBack.jpg");
  background-size: 100%; */
}


</style>
