export const state = () => ({
  isNavMobileOpen: false,
  menuItems: [
    { name: 'Main', active: true },
    { name: 'Product catalog', active: false },
    { name: 'About', active: false },
    { name: 'Photo', active: false },
    { name: 'Forum', active: false },
    { name: 'Feedbacks', active: false }
  ]
})

export const mutations = {
  navMobileToggle (state) {
    state.isNavMobileOpen = !state.isNavMobileOpen
  },

  menuItemToggle (state, idx) {
    state.menuItems.forEach(el => el.active = false)
    state.menuItems[idx].active = true
  }
}
