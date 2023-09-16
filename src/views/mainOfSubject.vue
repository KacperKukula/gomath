<template>
    <div>
      <h2>Lista materiałów</h2>
      <RouteListVue :routesTree="subjectRoutes" />
    </div>
    <router-view></router-view>
</template>

<script>
import RouteListVue from '@/components/RouteList.vue';
import { computed } from 'vue';

export default {
  props: ['subjectRoutes'],
  components: {
    RouteListVue,
  },
  setup() {
    const isPropabilisticsRoute = computed(() => {
        return this.$route.path === '/propabilistics' && this.$route.matched.length === 1;
      }
    );
    
    return { isPropabilisticsRoute };
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