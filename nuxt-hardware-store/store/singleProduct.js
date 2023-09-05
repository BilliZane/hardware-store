import { data } from '../mocks/db'

export const state = () => ({
  singleProduct: {}
})

export const mutations = {
  updateProduct (state, payload) {
    state.singleProduct = payload
  }
}

export const actions = {
  async getProduct ({ commit }, id) {
    try {
      // const res = await fetch('URL')
      // const data = await res.json()z
      const target = data.find(prod => prod.id === id)
      commit('updateProduct', target)
    } catch (err) {
      console.log(err)
    }
  }
}

export const getters = {}
