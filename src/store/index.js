import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 初始化时用sessionStore.getItem('phone'),这样子刷新页面就无需重新登录
const state = {
    phone: window.sessionStorage.getItem('phone')
}
const mutations = {
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.phone = data
    window.sessionStorage.setItem('phone', data)
  },
  LOGOUT: (state) => {
    // 登出的时候要清除用户名
    state.phone = null
    window.sessionStorage.removeItem('phone')
  }
}

const actions = {
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})