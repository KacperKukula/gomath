<template>
  <div class="home">
    <h1>Witaj na mojej stronie poświęconej matematyce</h1>
    <div class="sitemap">
      <RouteList />
    </div>
  </div>
</template>

<script>
import RouteList from '@/components/RouteList.vue';

export default {
  name: 'HomeView',
  components: {
    RouteList
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .sitemap {
    width: clamp(0px, 100%, 1200px);
    background-color: red;
  }
</style>