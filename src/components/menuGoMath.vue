<template>
  <nav>
    <div class="nav-wrapper">
        <!--MENU TREE-->
        <div v-for="(item, index) in items" :key="index" class="nav-cell">
            <!--MAIN CELL-->
            <router-link :to="item.path" exact class="nav-link">{{ item.name }}</router-link>
            
            <!--SUBMENU CELLS-->
            <div class="nav-submenu">
                <div v-for="(child, index) in item.children" :key="index" class="nav-subcell">
                    <router-link :to="item.path + '/' + child.path" class="nav-link">{{ child.name }}</router-link>
                </div>
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
}
</script>

<style lang="scss">
nav {
  padding: 30px;
}
nav {
    .nav-wrapper {
        display: flex;
        justify-content: center;
        gap: 3vw;

        .nav-cell {
            max-width: 12vw;
            font-weight: 500;
            overflow-x: hidden;
            font-size: 1rem;
            text-decoration: none;
            position: relative;
            overflow: visible;
            color: var(--secondary-color);

            .nav-link {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 60px;

                /* Active nav-link*/
                &.router-link-active {
                    color: var(--primary-color);
                    text-shadow: 0px 0px 8px rgb(165, 210, 162);
                }
            }

            /* Additional styles for submenu */
            .nav-submenu {
                position: absolute;
                top: 100%;
                width: 100%;
                -webkit-box-shadow: 0px 0px 9px -4px rgba(66, 68, 90, 1);
                -moz-box-shadow: 0px 0px 9px -4px rgba(66, 68, 90, 1);
                box-shadow: 0px 5px 6px -5px rgba(66, 68, 90, 1);

                display: none;

                .nav-link {
                    background: var(--angel-white);
                }
            }

            /* Handle submenu extending */
            &:hover, &:focus {
                .nav-submenu {
                    display: block;
                }
            }
        }
    }
}

@keyframes fadeIn { 0% { display: block; opacity: 0; } 100% { opacity: 1; display: block; } }
@keyframes fadeOut { 0% { display: block; opacity: 1; } 100% { opacity: 0; display: none; } }

/*main logo */
// .logo {
//     width: clamp(120px, 100%, 320px); 
//     object-fit: contain;
//     display: block;
// }

/* Styling nav <a> link */


</style>