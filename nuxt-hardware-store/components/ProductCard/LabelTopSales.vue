<template>
  <div
    :class="['label-top-sales', { 'label-top-sales--pos-left': !discountPercent }]"
    v-if="topSales && inStock"
  >
    Top sales
  </div>
</template>

<script>
export default {
  props: {
    discountPercent: {
      type: Number,
      default: false
    },
    topSales: {
      type: Boolean,
      default: false
    },
    inStock: {
      type: Boolean
    }
  }
}
</script>
