<template>
  <main class="main-content">
    <Breadcrumbs />
    <Filters />
    <section class="main-content__cards-wrap">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </section>
  </main>
</template>

<script>
import Breadcrumbs from '@/components/Main/Breadcrumbs.vue'
import Filters from '@/components/Main/Filters.vue'
import ProductCard from '@/components/ProductCard/ProductCard.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Breadcrumbs,
    Filters,
    ProductCard
  },

  methods: {
    ...mapActions('products', ['getProducts'])
  },

  mounted () {
    this.getProducts()
  },

  computed: {
    ...mapState('products', ['products'])
  }
}
</script>
