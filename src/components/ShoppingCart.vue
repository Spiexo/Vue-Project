<script setup lang="ts">
import { computed } from 'vue'

type Produit = {
  nom: string
  prix: number
  image: string
}

type CartItem = {
  produit: Produit
  quantity: number
}

const props = defineProps<{
  items: CartItem[]
}>()

const emit = defineEmits<{
  (e: 'increase', produit: Produit): void
  (e: 'decrease', produit: Produit): void
  (e: 'remove', produit: Produit): void
  (e: 'update-quantity', payload: { produit: Produit; quantity: number }): void
}>()

const total = computed(() =>
  props.items.reduce(
    (sum, item) => sum + item.produit.prix * item.quantity,
    0
  )
)
</script>


<template>
  <div class="shopping-cart">
    <h2>Panier</h2>
    <p v-if="items.length === 0">Panier vide</p>
    <div v-for="item in items" :key="item.produit.nom" class="cart-item">
      <img :src="item.produit.image" alt="image" />
      <div class="info">
        <h3>{{ item.produit.nom }}</h3>
        <p>{{ item.produit.prix }} €</p>
      </div>
      <div class="quantity-controls">
        <button @click="emit('decrease', item.produit)">−</button>
        <input type="number" :value="item.quantity" min="1" @change="emit('update-quantity', { produit: item.produit, quantity: Number(($event.target as HTMLInputElement).value)})"/>
        <button @click="emit('increase', item.produit)">+</button>
      </div>
      <button class="remove" @click="emit('remove', item.produit)">Supprimer</button>
    </div>
    <hr />
    <p class="total">Total : <strong>{{ total }} €</strong></p>
  </div>
</template>



<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 6px;
}

.quantity-controls input {
  width: 50px;
  text-align: center;
}

.remove {
  color: red;
}
</style>

