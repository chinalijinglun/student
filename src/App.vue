<template>
  <div id="app">
    <headers v-if="$route.path !== '/iframe'"></headers>
    <div class="main-text">
      <router-view/>
    </div>
    <footers v-if="$route.path !== '/iframe'"></footers>
  </div>
</template>

<script>
import headers from '@/components/header'
import footers from '@/components/footer'
export default {
  name: 'App',
  created(){

  },
  components:{
    headers,
    footers
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
body,html{
  height: 100%;
}
body{
  background: #F3F3F3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  position: relative;
}
.main-text{
  min-width: 1200px;
}
</style>
