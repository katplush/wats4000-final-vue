<template>
  <div id="app">
    <img alt="background image numbers" src="./assets/blackNumber.jpg" width="100%">
    <h1>NUMERATE PLAYGROUND</h1>
    <p>For the love of all things dates and numbers</p>
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
  margin-top: 60px;
  /* background-image: url("./assets/blackNumber.jpg"); */
}


</style>
