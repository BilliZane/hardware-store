<template>
  <div>Hello, SingleProduct #{{ $route.params.id }}</div>
</template>

<script>
export default {
  name: 'Products',

  validate (data) {
    return Number.isInteger(parseInt(data.params.id))
  }
}
</script>
