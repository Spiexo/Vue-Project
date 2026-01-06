<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const reset = () => {
  count.value = 0
}
</script>

<template>
  <div class="card">
    <div class="text-center">
      <v-btn variant="outlined" @click="count++">+</v-btn>
      <p>{{ count }}</p>
      <v-btn variant="outlined" @click="count--">-</v-btn>
      <v-btn variant="outlined" @click="reset">Reset</v-btn>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  margin-bottom: 20px;
}
</style>