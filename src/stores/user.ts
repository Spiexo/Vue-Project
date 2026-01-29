import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export type User = {
  id: number
  name: string
  email: string
  address?: {
    city: string
  }
}

export const useUserStore = defineStore('user', () => {
  // STATE
  const users = ref<User[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const selectedCity = ref<string>('')

  // GETTERS
  const usersCount = computed(() => users.value.length)

  const cities = computed(() => {
    return [...new Set(users.value.map((u) => u.address?.city).filter(Boolean))]
  })

  const filteredUsers = computed(() => {
    if (!selectedCity.value) return users.value

    return users.value.filter((user) => user.address?.city === selectedCity.value)
  })

  // ACTIONS
  async function fetchUsers() {
    loading.value = true
    error.value = null

    try {
      const response = await axios.get<User[]>('http://jsonplaceholder.typicode.com/users')
      users.value = response.data
    } catch (err) {
      error.value = 'Erreur lors du chargement des utilisateurs'
    } finally {
      loading.value = false
    }
  }

  return {
    // state
    users,
    loading,
    error,
    selectedCity,

    // getters
    usersCount,
    cities,
    filteredUsers,

    // actions
    fetchUsers,
  }
})
