<template>
  <div class="label-disount" v-if="discountPercent !== 0 && inStock ">-{{ discountPercent }}%</div>
</template>

<script>
export default {
  props: {
    discountPercent: {
      type: Number
    },
    inStock: {
      type: Boolean
    }
  }
}
</script>
