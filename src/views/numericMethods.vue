<template>
    <div></div>
</template>

<script>

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