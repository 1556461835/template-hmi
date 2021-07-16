import { PCDPURL } from '@/lib/PcdpServers'

/*
 * @Author: your name
 * @Date: 2021-05-22 18:29:41
 * @LastEditTime: 2021-07-09 16:32:54
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
        // .webSocketServer
        // ws = new window.WebSocket('ws://192.168.8.115:8099/websocket')
        var wsAddress =
          PCDPURL.defaultURL.split(':')[0] + ':' + webSocketServer.split(':')[1]
        ws = new window.WebSocket(
          'ws://' + wsAddress + '/' + user.uuid + '/websocket'
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
    var body = {
      command: 'register',
      id: JSON.parse(localStorage.getItem('user') || {}).uuid,
      terminal: process.env.device
    }
    window.tsWebSocket.send(body)
  },

  closeWebSocket() {
    if (window.tsWebSocket) {
      window.tsWebSocket.close()
      window.tsWebSocket = null
    }
  }
}
