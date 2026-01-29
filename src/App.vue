<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Exercice pratique complet</RouterLink>
        <RouterLink to="/about">Exercice d'entrainement</RouterLink>
        <RouterLink :to="{ name: 'user', params: { id: 1 } }">User</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/todo-list">Todo List</RouterLink>
        <RouterLink to="/call-api">Call API</RouterLink>
      </nav>
    </div>
  </header>

  <main class="content">
    <RouterView />
  </main>
</template>


<style scoped>
  /* #app {
    grid
  } */

/* header {
  line-height: 1.5;
  height: 10%;
} */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;

  background-color: white;
  z-index: 1000;

  display: flex;
  align-items: center;
}

.content {
  margin-top: 80px; /* hauteur du header + marge */
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: top;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: 0;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
