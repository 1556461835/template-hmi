<!--
 * @Author: your name
 * @Date: 2021-04-08 10:01:21
 * @LastEditTime: 2021-05-11 14:05:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\layouts\components\RightAside.vue
-->
<template>
  <div class="margin8 right-aside">
    <div class="layout-webkitScrollbar padding-lr-16" style="height:100%">
      <!-- 当前班组统计 -->
      <div>
        <p class="right-aside-title text-md solid-bottom">当前班组统计</p>
        <div class="text-sm margin-bottom-16 margin-top-8">
          <p class="color-block text-weight7 margin-bottom-4 rowInfo">班组信息</p>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">当班</span>
            <span class="color-blue text-weight7">白班</span>
          </div>
          <div class="rowInfo">
            <span class="color-light-block text-weight4">当组</span>
            <span class="color-blue text-weight7">乙组</span>
          </div>
        </div>
        <!-- 轧卷统计 -->
        <div class="text-sm margin-bottom-16">
          <p class="color-block text-weight7 margin-bottom-4 rowInfo">轧卷统计</p>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">块数</span>
            <span class="color-blue text-weight7">000</span>
          </div>
          <div class="rowInfo">
            <span class="color-light-block text-weight4">重量</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo">
            <span class="color-light-block text-weight4">长度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
        </div>
        <!-- 本卷精度 -->
        <div class="text-sm margin-bottom-16">
          <p class="color-block text-weight7 margin-bottom-4 rowInfo">本卷精度</p>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">厚度</span>
            <span class="color-blue text-weight7">000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">宽度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">终温</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">卷温</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">凸度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo">
            <span class="color-light-block text-weight4">平度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
        </div>
        <!-- 班累计精度 -->
        <div class="text-sm margin-bottom-16">
          <p class="color-block text-weight7 margin-bottom-4 rowInfo">
            班累计精度
          </p>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">厚度</span>
            <span class="color-blue text-weight7">000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">宽度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">终温</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">卷温</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">凸度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo">
            <span class="color-light-block text-weight4">平度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
        </div>
      </div>
      <!-- 当月主操统计 -->
      <div>
        <p class="right-aside-title text-md solid-bottom">当月主操统计</p>
        <!-- 轧卷统计 -->
        <div class="text-sm margin-bottom-16 margin-top-8">
          <p class="color-block text-weight7 margin-bottom-4 rowInfo">轧卷统计</p>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">块数</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">重量</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo">
            <span class="color-light-block text-weight4">长度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
        </div>
        <!-- 班累计精度 -->
        <div class="text-sm margin-bottom-16 margin-top-8">
          <p class="color-block text-weight7 margin-bottom-4 rowInfo">
            班累计精度
          </p>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">厚度</span>
            <span class="color-blue text-weight7">000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">宽度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">终温</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">卷温</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo margin-bottom-4">
            <span class="color-light-block text-weight4">凸度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
          <div class="rowInfo">
            <span class="color-light-block text-weight4">平度</span>
            <span class="color-blue text-weight7">0000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
