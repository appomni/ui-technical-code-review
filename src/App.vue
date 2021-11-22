<template>
  <div id="app">
    <img alt="AppOmni logo" src="./assets/ao-gear.png">
    <contact-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactList from './components/ContactList.vue';

export default Vue.extend({
  name: 'App',
  components: {
    ContactList,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
img {
  height: 100px;
}
</style>
