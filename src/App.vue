<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Exercice pratique complet</RouterLink>
        <RouterLink to="/about">Exercice d'entrainement</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  /* #app {
    grid
  } */

header {
  line-height: 1.5;
  height: 10%;
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
