<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  nom?: string
  age?: number
  email?: string
  role?: 'utilisateur' | 'admin'
  avatar?: string
}>(), {
  nom: 'Jhon Doe',
  age: 20,
  email: 'jhondoe@exemple.com',
  role: 'admin',
  avatar: ''
})

const initiales = computed(() => {
  if (!props.nom) return '?'

  return props.nom
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
})
</script>

<template>
  <div class="user-card">
    <div>
      <img v-if="avatar" :src="avatar" alt="Avatar"/>
      <div v-else>
        {{ initiales }}
      </div>
    </div>
    <h2>{{ props.nom }}</h2>
    <p>Âge: {{ props.age }}</p>
    <p>Email: {{ props.email }}</p>
    <p>Rôle: <span v-if="role === 'utilisateur'" class="user">{{ props.role }}</span>
             <span class="admin" v-else>{{ props.role }}</span></p>
  </div>
</template>


<style scoped>
.user {
  color: #ffffff;
  background-color: rgb(0, 94, 255);
  border-radius: 6px;
}

.admin {
  color: #ccc;
  background-color: rgb(255, 0, 0);
  border-radius: 6px;
}

.user-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
}
</style>