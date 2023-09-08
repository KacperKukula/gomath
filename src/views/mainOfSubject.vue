<template>
    <div>
      <h2>Lista materiałów</h2>
      <RouteListVue :routesTree="subjectRoutes" />
    </div>
</template>

<script>
import RouteListVue from '@/components/RouteList.vue';

export default {
  props: ['subjectRoutes'],
  components: {
    RouteListVue,
  },
};
</script>

<style scoped>
h2 {
  width: 100%;
  padding: 5vh 0;
  color: white;
  background: var(--primary-gradient-convex);
}
</style>