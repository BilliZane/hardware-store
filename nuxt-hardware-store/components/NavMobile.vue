<template>
  <nav :class="['nav-mobile', { 'nav-mobile--active': isNavMobileOpen }]">
    <BaseIcon name="menuClose" @event="navMobileToggle" />
    <ul class="nav-mobile__items">
      <li
        v-for="(item, idx) in menuItems"
        :key="item.name"
        :class="['nav-mobile__item', { 'nav-mobile__item--active': item.active }]"
        @click="menuItemToggle(idx)"
      >
        {{ item.name }}
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('nav', ['navMobileToggle', 'menuItemToggle'])
  },

  computed: {
    ...mapState('nav', ['isNavMobileOpen', 'menuItems'])
  }
}
</script>
