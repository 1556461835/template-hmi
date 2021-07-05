/*
 * @Author: your name
 * @Date: 2021-05-22 18:29:41
 * @LastEditTime: 2021-06-19 17:18:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\lib\WebSocketService.js
 */
export default {
  getInstance(onMessageHandler, onOpen) {
    var ws = window.tsWebSocket
    if ('WebSocket' in window) {
      if (!ws) {
        if (!localStorage.getItem('user')) {
          return null
        }
        let user = JSON.parse(localStorage.getItem('user'))
        let webSocketServer = user.webSocketServer
        console.debug('localStorage=======：', webSocketServer)
        // .webSocketServer
        // ws = new window.WebSocket('ws://192.168.8.115:8099/websocket')
        ws = new window.WebSocket(
          'ws://' + webSocketServer + '/' + user.uuid + '/websocket'
        )
        window.tsWebSocket = ws
      }
      if (onMessageHandler) ws.onmessage = onMessageHandler
      ws.onerror = this.onerror
      ws.onopen = onOpen || this.onopen
      ws.onbeforeunload = this.onbeforeunload
      ws.onclose = this.onclose
      return ws
    } else return null
  },
  onerror(error) {
    console.log(error)
  },

  onclose() {
    console.log('close')
  },

  onbeforeunload() {
    if (window.tsWebSocket) window.tsWebSocket.close()
  },

  onopen() {
    console.log('ws is open')
    window.tsWebSocket.send('{command: "register", id: "1_web"}')
  },

  closeWebSocket() {
    if (window.tsWebSocket) {
      window.tsWebSocket.close()
      window.tsWebSocket = null
    }
  }
}
