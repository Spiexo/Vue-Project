<script setup lang="ts">
import ShoppingCart from '@/components/ShoppingCart.vue'
import ProductCard from '../components/ProductCard.vue'
import { ref } from 'vue'

type Produit = {
  nom: string
  prix: number
  image: string
}

type CartItem = {
  produit: Produit
  quantity: number
}

const cart = ref<CartItem[]>([])

const addToCart = (produit: Produit) => {
  const existing = cart.value.find(
    item => item.produit.nom === produit.nom
  )

  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ produit, quantity: 1 })
  }
}

const increase = (produit: Produit) => {
  const item = cart.value.find(
    item => item.produit.nom === produit.nom
  )
  if (item) item.quantity++
}

const decrease = (produit: Produit) => {
  const item = cart.value.find(
    item => item.produit.nom === produit.nom
  )
  if (!item) return

  item.quantity--

  if (item.quantity <= 0) {
    cart.value = cart.value.filter(p => p !== item)
  }
}

const remove = (produit: Produit) => {
  cart.value = cart.value.filter(
    item => item.produit.nom !== produit.nom
  )
}

const updateQuantity = (
  { produit, quantity }: { produit: Produit; quantity: number }
) => {
  const item = cart.value.find(
    item => item.produit.nom === produit.nom
  )
  if (!item) return

  item.quantity = Math.max(1, quantity)
}

</script>


<template>
  <main class="page">
    <ProductCard @add-to-cart="addToCart">
      <template #description="{ produit }">
        <p v-if="produit.nom === 'Ordinateurs portables'">Idéal pour le travail et le gaming</p>
        <p v-else-if="produit.nom === 'Tablettes'">Parfait pour la mobilité et le multimédia</p>
        <p v-else-if="produit.nom === 'Bureaux'">Bureau robuste pour le télétravail</p>
      </template>
    </ProductCard>
    <ShoppingCart :items="cart" @increase="increase" @decrease="decrease" @remove="remove" @update-quantity="updateQuantity" class="cart"/>
  </main>
</template>


<style scoped>
.page {
  display: flex;
  justify-content: space-between;
}
.cart {
  margin-left: 60px;
  min-width: 186px;
}
</style>