<template>
  <menuGoMath :items="routes" />
  <!-- <nav>
    <router-link to="/numeric-methods" class="nav-cell">Metody numeryczne</router-link>
    <router-link to="/" class="nav-cell"><img class="logo" src="./assets/LOGO.png" alt="GOMATH"></router-link>
    <router-link to="/numeric-methods" class="nav-cell">Metody numeryczne</router-link>
  </nav> -->
  <router-view/>
</template>

<script>
import { useRouter } from 'vue-router';
import menuGoMath from './components/menuGoMath.vue'

export default {
  setup() {
    const router = useRouter();
    return { routes: router.options.routes }
  },
  components: {
    menuGoMath
  }
}
</script>

<style scoped>

</style>
