<template>
  <div class="filters">
    <div class="filters__products">
      Products found:
      <span class="filters__products-amount">(25)</span>
    </div>
    <div class="filters__wrap">
      <span class="filters__label">Sorting by:</span>
      <span class="filters__item">New product</span>
      <span
        :class="[
          'filters__item',
          { 'filters__price-up': priceStatus },
          { 'filters__price-down': !priceStatus }
        ]"
        @click="togglePriceStatus"
        >Price</span
      >
      <!-- <span class="filters__item">Date of addition</span> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      priceStatus: false
    }
  },

  methods: {
    togglePriceStatus () {
      this.priceStatus = !this.priceStatus
    }
  }
}
</script>
