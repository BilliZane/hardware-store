<template>
  <div>Hello, SingleProduct!</div>
</template>

<script>
export default {
  name: 'Product',

  computed: {
    info () {
      return this.$route.params.index
    }
  }
}
</script>
