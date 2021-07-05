<!--
 * @Author: your name
 * @Date: 2021-04-07 13:58:25
 * @LastEditTime: 2021-06-17 17:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\index.vue
-->
<template>
  <div>
    <div v-show="$store.state.allMenus.length == 0" style="fontSize: 30px;font-weight: boild">
      请分配用户权限
    </div>
  </div>
</template>
