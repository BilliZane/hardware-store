<template>
  <div>Hello, SingleProduct #{{ $route.params.id }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Products',

  computed: {
    ...mapGetters('products', ['productsIdCodes'])
  },

  validate (data) {
    return Number.isInteger(parseInt(data.params.id))
  }
}

// data.params.id
</script>
