<template>
  <div>
    <div>Hello, Products!!!</div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Product',

  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
