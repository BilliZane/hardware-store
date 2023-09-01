<template>
  <nav :class="['nav-mobile', { 'nav-mobile--active': isNavMobileOpen }]">
    <BaseIcon name="menuClose" @event="navMobileToggle" />
    <!-- <svg
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="nav-mobile__close"
      @click="navMobileToggle"
    >
      <path
        d="M1 1L13 13M1 13L13 1L1 13Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg> -->

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
