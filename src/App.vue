<template>
  <div id="app">
    <p>
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <router-link to="/calculate">Calculate</router-link> |
    <router-link to="/about">About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
    <img alt="Mortgage Calculator logo" src="./assets/mortgage-unsplash-xs.jpg">

  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Calculate from './components/Calculate.vue'

export default {
  name: 'app',
  components: {
    Home,
    Calculate,
    About
  }
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
}
</style>
