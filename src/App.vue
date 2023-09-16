<template>
<div class='menu'>
<router-link :to="{name: 'Home'}" class='nav-item'>Home </router-link>
<router-link :to="{name: 'computed'}" class='nav-item'>Computed </router-link>
</div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
};
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
.nav-item {
  border: solid #5B6DCD 4px;
  border-top-left-radius:80px 80px;
  box-shadow:10px 5px 5px gray;
  border-bottom:none;
  background: #5B6DCD;
  color:white;
  font-weight:900;
  text-decoration:none;
  margin:10px;
  padding:20px;
  margin-bottom:20px;
}
.menu {
  width:100%;
  
}
</style>
