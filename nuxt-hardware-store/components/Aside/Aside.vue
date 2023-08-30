<template>
  <aside class="aside">
    <PriceWidget />
    <StockWidget />
    <CategoriesWidget />
    <ProductOfWeek />
  </aside>
</template>

<script>
import PriceWidget from '@/components/Aside/PriceWidget.vue'
import StockWidget from '@/components/Aside/StockWidget.vue'
import CategoriesWidget from '@/components/Aside/CategoriesWidget.vue'
import ProductOfWeek from '@/components/Aside/ProductOfWeek.vue'

export default {
  components: {
    PriceWidget,
    StockWidget,
    CategoriesWidget,
    ProductOfWeek
  }
}
</script>
