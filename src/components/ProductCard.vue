<script setup lang="ts">

type Produit = {
  nom: string
  prix: number
  image: string
}

const emit = defineEmits<{
  (e: 'add-to-cart', produit: Produit): void
}>()

const props = withDefaults(defineProps<{
  produits?: Produit[]
}>(), {
  produits: () => ([
    {
      nom: 'Ordinateurs portables',
      prix: 2000,
      image: 'https://images-eu.ssl-images-amazon.com/images/G/08/FV_FR_Media/EvergreenRedesign/Evergreen_Redesign_LowRes_119._SY116_CB776204851_.jpg'
    },
    {
      nom: 'Tablettes',
      prix: 900,
      image: 'https://images-eu.ssl-images-amazon.com/images/G/08/FV_FR_Media/EvergreenRedesign/Evergreen_Redesign_LowRes_120._SY116_CB776204851_.jpg'
    },
    {
      nom: 'Bureaux',
      prix: 300,
      image: 'https://images-eu.ssl-images-amazon.com/images/G/08/FV_FR_Media/EvergreenRedesign/Evergreen_Redesign_LowRes_23._SY116_CB776204851_.jpg'
    }
  ])
})

</script>

<template>
  <div >
    <div class="user-card" v-for="(produit, index) in props.produits" :key="index">
      <h2>{{ produit.nom }}</h2>
      <p>Prix: {{ produit.prix }} €</p>
      <img :src="produit.image" alt="image" />
        <slot name="description" :produit="produit"/>
      <v-btn color="green-darken-1" @click="emit('add-to-cart', produit)">
        Ajouter
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

</style>