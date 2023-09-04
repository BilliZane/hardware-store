import { data } from '../mocks/db'

export const state = () => ({
  products: []
})

export const mutations = {
  sortByPrice (state, priceStatus) {
    if (priceStatus) {
      state.products.sort((a, b) => b.price - a.price)
    } else {
      state.products.sort((a, b) => a.price - b.price)
    }
  },

  updateStore (state, payload) {
    state.products = payload
  }
}

export const actions = {
  async getProducts ({ commit }) {
    try {
      // const res = await fetch('URL')
      // const data = await res.json()
      commit('updateStore', data)
    } catch (err) {
      console.log(err)
    }
  }
}

export const getters = {
  productsCount (state) {
    return state.products.length
  },

  inStock (state) {
    return state.products.filter(prod => prod.inStock)
  },

  outOfStock (state) {
    return state.products.filter(prod => !prod.inStock)
  },

  productsIdCodes (state) {
    return state.products.map(prod => prod.id)
  }
}
