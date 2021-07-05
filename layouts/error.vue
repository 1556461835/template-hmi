<!--
 * @Author: your name
 * @Date: 2021-04-13 13:53:14
 * @LastEditTime: 2021-04-13 14:26:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\layouts\error.vue
-->
<template>
  <div class="backgroundBody">
    <div class="controller">
      <div class="objects">
        <!-- text area -->
        <div class="text-area rotate">
          <p class="error">Error 404</p>
          <p class="details">有个问题<br><br>您正在寻找的页面不在这里或移动.</p>
        </div>
        <div class="homepage rotate">
          <nuxt-link to="/">返回首页</nuxt-link>
        </div> <!-- home page -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'logoLayout'
}
</script>
<style scoped>
.backgroundBody {
  height: 100% !important;
  width: 100% !important;
  background-size: cover;
  background: #000000 url(../assets/error_images/bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
a:link,
a:hover,
a:visited {
  color: #2f2f2f;
  text-decoration: none;
}
.rotate {
  -o-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  -webkit-transform: rotate(-10deg);
  -ms-transform: rotate(-10deg);
}
@media screen and (min-width: 802px) {
  .controller {
    width: 942px;
    margin: auto;
  }
  .objects {
    background: url(../assets/error_images/objects.png) center center;
    background-size: cover;
    width: 90%;
    height: 600px;
  }
  .text-area {
    width: 300px;
    padding-top: 180px;
    margin-left: 40px;
    text-align: center;
  }
  .error {
    font: 86px Jenna Sue, Helvetica, Arial, sans-serif;
  }
  .details,
  .homepage {
    font: 32px Jenna Sue, Helvetica, Arial, sans-serif;
  }
  .homepage {
    background: url(../assets/error_images/home.png) no-repeat;
    padding-left: 50px;
    float: right;
    right: 45px;
    top: -50px;
    position: relative;
    text-align: center;
  }
}
</style>
