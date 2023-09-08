<template>
  <menuGoMath :items="routes" />
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
