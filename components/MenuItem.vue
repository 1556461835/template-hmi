<!--
 * @Author: your name
 * @Date: 2021-06-30 14:48:23
 * @LastEditTime: 2021-06-30 15:05:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\components\MenuItem.vue
-->
<template>
  <div>
    <template v-if="!item.children || item.children.length == 0">
      <el-menu-item :index="item.router + ''">
        <i :class = "item.icon + ' fa-lg'"/>
        <span slot="title" class="tmenu">{{ item.name }}</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu :index="item.router + ''">
        <span slot="title" class="tmenu">{{ item.name }}</span>
        <menu-item
          v-for="route in item.children"
          :key="route.router"
          :item="route"
        />
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
