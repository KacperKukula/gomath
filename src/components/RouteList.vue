<template>
        <ul>
            <li v-for="mainRoute in routesTree" :key="mainRoute.path">
                <router-link :to="mainRoute.path">{{ mainRoute.name }}</router-link>
            </li>
        </ul>
</template>

<script>
export default {
    props: ['routesTree'],
    setup(props) {
        console.log(props.routesTree);
    }
}
</script>

<style scoped lang="scss">
ul {
    margin: 0;
    padding: 2rem;
    box-sizing: border-box;
    width: 100%;
    display: inline-block;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    

    li {
        a {
            min-height: 3rem;
            font-size: .9rem;
            color: #515151;
            &:hover { color: #b4b4b4; }
        }
    }
}
</style>