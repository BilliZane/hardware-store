<template>
  <nav class="nav">
    <div class="container">
      <ul class="nav__items">
        <li
          v-for="(item, idx) in menuItems"
          :key="item.name"
          :class="['nav__item', { 'nav__item--active': item.active }]"
          @click="menuItemToggle(idx)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('nav', ['menuItemToggle'])
  },

  computed: {
    ...mapState('nav', ['menuItems'])
  }
}
</script>
