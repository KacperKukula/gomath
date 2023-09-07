<template>
  <nav>
    <router-link to="/numeric-methods" class="nav-cell">Metody numeryczne</router-link>
    <router-link to="/" class="nav-cell"><img class="logo" src="./assets/LOGO.png" alt="GOMATH"></router-link>
    <router-link to="/numeric-methods" class="nav-cell">Metody numeryczne</router-link>
  </nav>
  <router-view/>
</template>

<script>

</script>

<style scoped>
nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 4vw;
}

nav .nav-cell {
  max-width: 12vw;
  font-weight: 500;
  overflow-x: hidden;
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--secondary-color);
}

nav .nav-cell.router-link-exact-active {
  color: var(--primary-color);
  -webkit-box-shadow: 0px 0px 8px 1px rgba(255,255,255,1);
  -moz-box-shadow: 0px 0px 8px 1px rgba(255,255,255,1);
  box-shadow: 0px 0px 8px 1px rgba(255,255,255,1);
}

/*main logo */
.logo {
 width: clamp(120px, 100%, 320px);
}

</style>
