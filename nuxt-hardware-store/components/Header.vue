<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <ul class="header__items">
          <li class="header__item">
            <div class="header__info header__info--left">
              <p class="header__info-title">Color Store</p>
              <p class="header__info-subtitle">A great store for your home</p>
              <BaseIcon name="menuOpen" class="header__info-btn" @event="navMobileToggle" />
            </div>
          </li>
          <li class="header__item header__item--hide">
            <div class="log-reg">
              <BaseIcon name="loginRegister" />

              <span class="log-reg__item">Login</span> /
              <span class="log-reg__item">Registration</span>
            </div>
          </li>
          <li class="header__item">
            <div class="cart">
              <BaseIcon name="cart" />
              <span class="cart__titile">Cart</span>
            </div>
          </li>
        </ul>

        <form class="search">
          <input class="search__input" value="" placeholder="Find a product" id="search" />

          <div class="search__icon-wrap">
            <BaseIcon name="search" />
          </div>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('nav', ['navMobileToggle'])
  },

  computed: {
    ...mapState('nav', ['isNavMobileOpen'])
  }
}
</script>
