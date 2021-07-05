/*
 * @Author: your name
 * @Date: 2021-04-07 15:36:33
 * @LastEditTime: 2021-05-22 14:05:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\store\index.js
 */
export const strict = false
export const state = () => ({
  user: {},
  tagNavList: [],
  tagNavModel: '',
  baseUrl: '',
  loginLogoPath: '',
  publicKey: '',
  apiGate: '',
  companyName: '',
  bigLogoPath: '',
  smallLogoPath: '',
  baseUrl: '',
  loginLogoPath: '',
  allMenus: '',
  localeInfo: [
    {
      type: 'zh',
      name: '中文'
    },
    {
      type: 'en',
      name: 'English'
    }
  ],
  locales: ['zh', 'en'],
  locale: 'zh',
  fullScreen: false, // 全屏显示
  errorInfo: [] // 报警信息
})

export const getters = {
  // ...
  getJurisdiction: (state) => (routeName) => {
    var resources = state.user.resources
    if (!state.user.resources) {
      var user = JSON.parse(localStorage.getItem('user'))
      resources = user.resources
    }
    return resources.indexOf(routeName) > -1
  }
}

export const mutations = {
  getJurisdiction: (state) => (routeName) => {
    var resources = state.user.resources
    if (!state.user.resources) {
      var user = JSON.parse(localStorage.getItem('user'))
      resources = user.resources
    }
    return resources.indexOf(routeName) > -1
  },
  allMenus(state, allMenus) {
    state.allMenus = allMenus
  },
  setUser(state, user) {
    console.debug('用户信息:', user)
    if (!user) return
    state.user = user
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  setInitInfo(state, result) {
    state.publicKey = result.publicKey
    state.apiGate = result.apiGate
    if (!result.version) {
      return
    }
    var versionInfo =
      typeof result.version.content === 'string'
        ? JSON.parse(result.version.content)
        : result.version.content
    var array = versionInfo[0].split(',')
    state.companyName = versionInfo[0]
    state.bigLogoPath = (versionInfo[3] ? versionInfo[3] : '').split(':')[1] // 找张默认图片
    state.smallLogoPath = (versionInfo[2] ? versionInfo[2] : '').split(':')[1]
    state.baseUrl =
      versionInfo.length < 5 ? 'http://localhost:8099' : versionInfo[4]
    state.loginLogoPath = (versionInfo[5] ? versionInfo[5] : '').split(':')[1] // 登录页logo
  },
  SET_ERROR_INFO(state, errorInfo) {
    if (state.errorInfo.length >= 50) {
      state.errorInfo.pop()
    }
    state.errorInfo.unshift(errorInfo)
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const result = await app.$axios.$post('/user/getPublicKey.form', {
      version: 0
    })
    commit('setInitInfo', result)
  },
  saveUser({ commit }, user) {
    commit('setUser', user)
  }
}
