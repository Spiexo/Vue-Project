<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

onMounted(() => {
  userStore.fetchUsers()
})

</script>


<template>
  <div>
    <p v-if="userStore.loading">Chargement...</p>
    <p v-if="userStore.error">{{ userStore.error }}</p>
    <button class="btn-reload" @click="userStore.fetchUsers" :disabled="userStore.loading">
    Rafraîchir
    </button>

    <select class="btn-filter" v-model="userStore.selectedCity">
      <option value="">Toutes les villes</option>
      <option v-for="city in userStore.cities" :key="city" :value="city">
        {{ city }}
      </option>
    </select>

    <ul>
      <li v-for="user in userStore.filteredUsers" :key="user.id">
        {{ user.name }} - {{ user.email }} - {{ user.address?.city }}
        <hr class="barre"/>
      </li>
    </ul>
    <p>Total : {{ userStore.usersCount }}</p>
  </div>
</template>

<style scoped>  
.btn-reload {
  margin-bottom: 1rem;
  border: 1px solid #000000;
  border-radius: 8px;
  margin-right: 10px;
}

.btn-filter {
  margin-bottom: 1rem;
  border: 1px solid #000000;
  border-radius: 12px;
}

.barre {
  border: none;
  border-top: 1px solid #ccc;
  margin: 8px;
}
</style>