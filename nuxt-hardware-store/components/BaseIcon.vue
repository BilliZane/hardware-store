<template>
  <span v-html="iconCode" @click="$emit('event')" class="icon"></span>
</template>

<script>
import icons from '@/icons'

export default {
  props: {
    name: {
      type: String
    }
  },

  emits: ['event'],

  computed: {
    iconCode () {
      return icons[this.name]
    }
  }
}
</script>

<style>
.icon {
  display: flex;
  align-items: center;
}
</style>
