<template>
  <div>
    <div class="images">
      <img v-for="(image, idx) in singleProduct.images" :key="idx" :src="image" alt="Photo" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions('singleProduct', ['getProduct'])
  },

  mounted () {
    this.getProduct(this.$route.params.id)

    if (!this.singleProduct) {
      this.$router.push('/')
    }
  },

  computed: {
    ...mapState('singleProduct', ['singleProduct'])
  }

  // validate (data) {
  //   return Number.isInteger(parseInt(data.params.id))
  // }
}
</script>

<style>
.images {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
