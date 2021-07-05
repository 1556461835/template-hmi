<!--
 * @Author: your name
 * @Date: 2021-04-13 13:57:24
 * @LastEditTime: 2021-06-17 14:36:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\login.vue
-->
<template>
  <div>
      <div class="login">
          <img class="login-img" src="../assets/img/1334.png" alt="暂无图片">
          <div class="tyg-div-denglv">
              <div class="tyg-div-form">
                <div class="tyg-div-logo">
                  <p class="tyg-div-title">二级HMI系统</p>
                </div>
                <el-form ref="loginForm" label-position="right" :model="loginForm" :rules="loginRules" @submit.native.prevent>
                    <el-form-item class="inputitem">
                        <el-input
                            v-model="loginForm.username" 
                            class="tyg-form-item"
                            placeholder="请输入账户"
                            @keyup.enter.native="handleLogin"/>
                    </el-form-item>
                    <el-form-item class="inputitem">
                        <el-input
                            v-model="loginForm.password" 
                            :type="showPassword ? 'text' : 'password'" 
                            class="tyg-form-item"
                            placeholder="请输入密码"
                            @keyup.enter.native="handleLogin">
                                <i
                                slot="append"
                                :class="!showPassword ? 'iconfont icon-yincang' : 'iconfont icon-xianshi'"
                                @click="showPassword = !showPassword"
                                />
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button 
                            class="tyg-form-button"
                            type="primary"
                            style="width:100%"
                            @click="handleLogin">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
              </div>
          </div>
      </div>
      <p class="copyRight">————北京科技大学————</p>
  </div>
</template>

<script>
import { login, loginByToken } from '@/lib/Util'
import { stopGetData } from '@/lib/GetData'
export default {
  layout: 'logoLayout',
  asyncData(context) {
    console.log('login page ', process.server)
    return { project: 'nuxt' }
  },
  data() {
    return {
      src: '',
      showPassword: false, // 判断是否显示登陆密码W
      loginForm: {
        username: '',
        password: '',
        verifycode: ''
      },
      // 绑定在form表单中的验证规则
      loginRules: {
        username: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            message: '密码长度最少为6位',
            trigger: 'blur'
          }
        ]
      },
      showSlide: false
    }
  },
  async created() {
    if (process.server) return
    if (localStorage.getItem('token')) {
      var url = this.$route.query.url || '/'
      if (url != '/login') {
        let token = localStorage.getItem('token')
        if (token) {
          let result = await loginByToken(token)
          if (result.status === 'success') {
            this.$router.push(url)
            return
          }
        }
      }
    }
  },
  mounted() {
    this.src =
      this.$nuxt.$store.state.baseUrl + '/' + this.$store.state.loginLogoPath
    // this.font()
    stopGetData()
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.login()
        }
      })
    },
    async login() {
      const loginForm = await login(
        this.loginForm.username,
        this.loginForm.password
      )
      if (loginForm.status !== 'success') {
        this.$message({
          message: '用户名或者密码错误',
          type: 'error'
        })
        return
      } else {
        var url = this.$route.query.url || '/'
        if (url === '/login') url = '/'
        this.$router.push(url)
      }
    },
    /**
     * @description: rem比例换算
     */
    font() {
      let clientWidth = document.documentElement.clientWidth
      document.documentElement.style.fontSize = clientWidth / 19.2 + 'px'
      window.onresize = function temp() {
        let clientWidth = document.documentElement.clientWidth
        document.documentElement.style.fontSize = clientWidth / 19.2 + 'px'
      }
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 1366px) {
  .login {
    font-size: 16px;
  }
}
@media screen and (max-width: 1366px) {
  .login {
    font-size: 14px;
  }
}
@media screen and (max-width: 1024px) {
  .login {
    font-size: 10px;
  }
}
.login {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/img/nercar-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.login-img {
  top: 15%;
  left: 14%;
  width: 34.6em;
  height: 28.5em;
  position: absolute;
}
.tyg-div-denglv {
  position: absolute;
  top: 25%;
  right: 21%;
  width: 19.5em;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.65);
}
.el-form-item {
  margin: 0;
}
.tyg-div-form {
  height: auto;
  margin: 1.422em 2.439em 2.134em;
}
.tyg-div-logo {
  display: flex;
  align-items: center;
  margin-bottom: 1.423em;
}
.tyg-img-logo {
  width: 4.319em;
  height: 3.455em;
  font-size: 14px;
}
.tyg-div-title {
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.25em;
  font-family: PingFangSC-Medium, sans-serif;
  font-weight: bold;
}
.inputitem {
  margin-bottom: 0.711em;
}
.tyg-form-item >>> input {
  border-radius: 5px;
  height: 2em;
}
.inputitem >>> .el-form-item__content {
  line-height: 0 !important;
}
.tyg-form-item >>> input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: rgba(0, 0, 0, 0.5);
  font-family: PingFangSC-Semibold, sans-serif;
  font-weight: 600;
}
.tyg-form-button {
  margin-top: 2em;
  background: #5188ff;
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
  line-height: 5px;
  font-family: PingFangSC-Semibold, sans-serif;
}

.copyRight {
  font-size: 18px;
  bottom: 5%;
  font-family: PingFangSC-Semibold, sans-serif;
  position: fixed;
  margin-left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
}
</style>
