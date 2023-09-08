<template>
    <div>
      <RouteListVue />
    </div>
</template>

<script>
import RouteListVue from '@/components/RouteList.vue'

export default {
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  components: {
    RouteListVue,
  },
};
</script>