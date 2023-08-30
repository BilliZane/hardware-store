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

export default {
  components: {
    Breadcrumbs,
    Filters,
    ProductCard
  },

  data () {
    return {
      products: [
        {
          id: 1,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: false,
          price: 193,
          discountPrice: 154.4,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951012.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 2,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 18,
          cardImage: 'img/product-of-week/245951013.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 3,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: false,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951014.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 4,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951015.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 5,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951012.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 6,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951013.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 7,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951014.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 8,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951015.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 9,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951012.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 10,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951013.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 11,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951014.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 12,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951015.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 13,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951012.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 14,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951013.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 15,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951014.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 16,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951015.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 17,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951012.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 18,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951013.jpg',
          images: ['', '', '', '', '']
        },
        {
          id: 19,
          title: 'Мобільний телефон Samsung Galaxy A53 5G 8/256GB Black',
          description: '',
          inStock: true,
          price: 193,
          discountPrice: 150,
          discountPercent: 20,
          cardImage: 'img/product-of-week/245951014.jpg',
          images: ['', '', '', '', '']
        }
      ]
    }
  }
}
</script>
