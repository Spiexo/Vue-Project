<script setup lang="ts">
import { users } from '@/data/users'
</script>

<template>
  <div>
    <h1>Voici vos contact</h1>

    <ul>
      <li v-for="user in users" :key="user.id">
        <RouterLink :to="`/user/${user.id}`">
          {{ user.prenom }} {{ user.nom }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
