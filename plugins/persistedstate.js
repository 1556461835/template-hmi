/*
 * @Author: your name
 * @Date: 2021-04-14 13:50:27
 * @LastEditTime: 2021-04-14 13:51:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hmi\plugins\persistedstate.js
 */
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    storage: {
      getItem: function(key) {
        return localStorage.getItem(key)
      },
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: function(key, value) {
        localStorage.setItem(key, value)
      },
      removeItem: function(key) {
        localStorage.removeItem(key)
      }
    }
  })(store)
}
