<template>
  <div :class="['product-card', { 'product-card--opacity-low': !product.inStock }]">
    <div class="product-card__image-wrap">
      <div class="product-card__labels">
        <LabelDisount :discountPercent="product.discountPercent" :inStock="product.inStock" />
        <LabelTopSales
          :discountPercent="product.discountPercent"
          :topSales="product.topSales"
          :inStock="product.inStock"
        />
        <img :src="product.cardImage" class="product-card__image" />
      </div>
    </div>

    <div class="product-card__title">
      {{ product.title }}
    </div>
    <div class="product-card__old-price">$ {{ product.discountPrice }}</div>
    <div class="product-card__price">$ {{ product.price }}</div>

    <div class="product-card__shipping" v-if="product.inStock">
      <span class="product-card__label">Ready to shipping</span>
      <BaseIcon name="deliveryTruck" />
    </div>

    <div class="product-card__shipping" v-else>
      <span class="product-card__label product-card__label--alert"
        >The product is expected soon</span
      >
      <BaseIcon name="deliveryClock" />
    </div>

    <div class="product-card__buttons">
      <ButtonDark class="button-dark__mr button-dark__mb" />
      <ButtonLight :class="{ 'button-light--disabled': !product.inStock }" />
    </div>
  </div>
</template>

<script>
import ButtonDark from '@/components/Buttons/ButtonDark.vue'
import ButtonLight from '@/components/Buttons/ButtonLight.vue'
import LabelDisount from '@/components/ProductCard/LabelDisount'
import LabelTopSales from '@/components/ProductCard/LabelTopSales'

export default {
  props: {
    product: {
      type: Object
    }
  },

  components: {
    ButtonDark,
    ButtonLight,
    LabelDisount,
    LabelTopSales
  }
}
</script>
