<template>
  <menuGoMath :items="routes" />
  <div class="line"></div>
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
.line {
  width: 100%;
  border: 1px solid #dfdfdf;
}
section.lession {
  padding: 4vw;
}
</style>
