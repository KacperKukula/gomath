<template>
    <div>
      <h2>Lista materiałów</h2>
      <RouteListVue />
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

<style>

</style>