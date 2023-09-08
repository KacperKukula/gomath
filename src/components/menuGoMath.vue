<template>
  <nav>
    <div>
        <!--LOGO-->
        <router-link to="/" class="nav-cell">
            <img class="logo" src="../assets/LOGO.png" alt="GOMATH">
        </router-link>
    </div>
    <div class="nav-cell-wrapper">
        <!--MENU TREE-->
        <div v-for="(item, index) in items" :key="index" class="nav-cell">
            <!--TITLE-->
            <div class="nav-subsell main">
                <router-link v-if="item.mainSite === false" :to="item.path" >{{ item.name }}</router-link>
            </div>
            <!--SUBMENU-->
            <div v-for="(child, index) in item.children" :key="index" class="nav-subcell">
                Submenu
            </div>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
    props: {
        items: { type: Array }
    },
    setup(props) {
        console.log(props.items)
    },
}
</script>

<style>
nav {
  padding: 30px;
  display: grid;
  grid-template-columns: min-content auto;
}
nav .nav-cell {
  max-width: 12vw;
  font-weight: 500;
  overflow-x: hidden;
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--secondary-color);
}
.nav-cell-wrapper {
    display: flex;
    justify-content: center;
    gap: 3vw;
}

nav .nav-cell.router-link-exact-active {
  color: var(--primary-color);
  text-shadow: 0px 0px 8px rgb(165, 210, 162);
}

/*main logo */
.logo {
 width: clamp(120px, 100%, 320px);
 object-fit: contain;
 display: block;
}
</style>