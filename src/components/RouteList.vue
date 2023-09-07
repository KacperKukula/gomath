<template>
    <div>
        <h2>Lista materiałów</h2>
        <div v-for="route in routes" :key="route.path">
            <router-link v-if="route.displayTree" :to="route.path">{{ route.name }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        routes() {
            return this.$router.options.routes;
        },
    },
}
</script>

<style scoped>
    h2 {
        padding: 3vh 10vw;
    }
</style>