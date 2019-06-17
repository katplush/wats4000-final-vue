<template>
  <div class="trivia">
    
    <h2>Number Trivia</h2>
    <p>
      <router-link to="/year">GO TO: Year Facts</router-link>
    </p>
    <form v-on:submit.prevent="findTrivia">
      <p>Enter your integer of interest!
        <input type="text" v-model="number"> <button type="submit">Search</button>
      </p>
    </form>
    <p class="answer">{{ results }}</p>

    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error, index) of errors" :key="index">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Trivia',
  data () {
    return {
      results: null,
      errors: [],
      year: null,
    }
  },
  methods: {
    findTrivia: function (){
      let url = `//numbersapi.com/${this.number}/trivia`
      console.log(url)
      axios.get(url, {
      })
      .then(response => {
        this.results = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      });
    }
  }
}
</script>

<style scoped>
.trivia {
  font-size: 1.4rem;
  margin: 50px;
}
input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 150px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  text-align: center;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  margin: 10px;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}
ul.results {
  list-style-type: none;
  padding: 0;
}
.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
a {
  color: #6ab8d6;
  text-decoration: none;
  font-size: 1rem;
}
.answer {
  color: #148fc0;
}
</style>