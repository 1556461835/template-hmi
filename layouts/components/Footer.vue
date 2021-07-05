<!--
 * @Author: your name
 * @Date: 2021-06-21 22:34:34
 * @LastEditTime: 2021-06-21 22:52:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmid:\work_project\HTLCode\layouts\components\Footer.vue
-->
<template>
    <div class="layout-footer">
      <div>当前班：白班</div>
      <div>当前组：甲组</div>
      <div class="greenLight">IIES：</div>
      <div class="greenLight">字符喷印：</div>
      <div class="greenLight">版号识别：</div>
      <div class="greenLight">1#炉PLC：</div>
      <div class="greenLight">2#炉PLC：</div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.layout-footer {
  height: 20px;
  line-height: 20px;
  letter-spacing: 1px;
  border-radius: 4px;
  width: 100%;
  border-top: 2px solid #dcdcdb;
  font-size: 12px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  div {
    width: 100px;
    margin-right: 20px;
    border-right: 4px solid #dcdcdb;
  }
}
.greenLight::after {
  width: 10px;
  height: 10px;
  content: '';
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}
</style>
