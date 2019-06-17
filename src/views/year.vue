<template>
  <div class="year">
    <p>
      <router-link to="/">HOME: Number Trivia </router-link>
    </p>
    <h2>Year Facts</h2>
    <form v-on:submit.prevent="findYear">
      <p>Enter a year for a fact! 
        <input type="text" v-model="year"> <button type="submit">Search</button>
      </p>
    </form>
    {{ results }}
    <!-- <ul v-if="results && results.length > 0" class="results">
      <li class="item" v-for="(item, index) of results" :key="index">
        <p><strong>{{item.word}}</strong></p>
        <p>{{item.score}}</p>
      </li>
    </ul> 

    <div class="no-results" v-else-if="results & results.length === 0">
      <h2>No Words Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div> -->

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
  name: 'Year',
  data () {
    return {
      results: null,
      errors: [],
      year: null,
    }
  },
  methods: {
    findYear: function (){
      let url = `//numbersapi.com/${this.year}/year`
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
.year {
  font-size: 1.4rem;
}
input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
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
  color: #42b983;
  text-decoration: none;
  font-size: 1rem;
}
</style>