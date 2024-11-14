<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

router-view {
  flex-grow: 1; 
}

/* Responsive */
@media (max-width: 768px) {
  #app {
    padding: 10px; 
  }
}

@media (max-width: 480px) {
  #app {
    padding: 5px; 
  }
}
</style>
