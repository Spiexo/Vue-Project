<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { users } from '@/data/users'

const route = useRoute()
const userID = computed(() => Number(route.params.id))


const user = computed(() =>
  users.find(u => u.id === userID.value)
)
</script>

<template>
  <div>
    <h1>Profil utilisateur #{{ userID }}</h1>
       <div v-if="user">
            <p>Prénom : {{ user.prenom }}</p>
            <p>Nom : {{ user.nom }}</p>
            <p>Âge : {{ user.age }}</p>
    </div>

   <p v-else>Utilisateur introuvable</p>
  </div>
</template>