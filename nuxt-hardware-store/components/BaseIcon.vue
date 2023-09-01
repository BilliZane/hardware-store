<template>
  <span v-html="iconCode" @click="$emit('event')"></span>
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
