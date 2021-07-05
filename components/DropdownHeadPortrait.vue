/*
 * @Description: 组件-用户头像
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-10-24 11:13:54
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:16:38
 */
<template>
  <div>
    <el-popover
      placement="bottom"
      trigger="hover"
      style="padding:0px" >
      <div>
        <el-button
          type="text"
          icon="fa fa-edit"
          @click="showDialogVisible()"
        >更改密码</el-button>
      </div>
      <div>
        <el-button
          type="text"
          icon="fa fa-sign-out"
          @click="logout"
        >退出登陆</el-button>
      </div>
      <div slot="reference" class="avatar-wrapper">
        <img
          :onerror="errorUserPhoto"
          :src="userImg"
          class="user-avatar">
        <p class="text-weight7 color-block">{{$store.state.user.userName}}</p>
        <i class="el-icon-caret-bottom"/>
      </div>
    </el-popover>
    <el-dialog
      :visible.sync="dialogVisible"
      title="更改密码"
      width="50%">
      <el-form
        ref="ruleForm"
        :model="changePassword"
        :rules="changePasswordRules"
        label-width="100px"
      >
        <el-form-item
          label="用户名"
          prop="userName"
        >
          <el-input
            v-model="changePassword.userName"
            placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item
          label="手机号"
          prop="userPhone"
        >
          <el-input
            v-model="changePassword.userPhone"
            placeholder="请输入手机号"/>
        </el-form-item>
        <el-form-item
          label="新密码"
          prop="newPassword"
        >
          <el-input
            v-model="changePassword.newPassword"
            :type="showNewPassword ? 'text' : 'password'"
            placeholder="请输入新密码">
            <i
              slot="suffix"
              :class="!showNewPassword ? 'fa fa-eye' : 'fa fa-eye-slash'"
              @click="showNewPassword = !showNewPassword"
            />
          </el-input>
        </el-form-item>
        <el-form-item
          label="确认新密码"
          prop="affirmPassword"
        >
          <el-input
            v-model="changePassword.affirmPassword"
            :type="showAffirmPassword ? 'text' : 'password'"
            placeholder="请输入新密码">
            <i
              slot="suffix"
              :class="!showAffirmPassword ? 'fa fa-eye' : 'fa fa-eye-slash'"
              @click="showAffirmPassword = !showAffirmPassword"
            />
          </el-input>
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="inputCode"
        >
          <el-input
            v-model="changePassword.inputCode"
            placeholder="验证码">
            <template
              slot="append"
            >
              <el-button
                :disabled = "disabled"
                style="margin: 0 2px"
                type="text"
                @click="submitForm('sendPhoneMessage')"
              >{{ timerCodeMsg }}</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('modifyPassword')"
          >确认更改密码</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
// import { post } from '@/lib/Util'
export default {
  data() {
    const validateAffirmPassword = (rule, value, callback) => {
      if (value !== this.changePassword.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      showNewPassword: false, // 判断是否显示新密码
      showAffirmPassword: false, // 判断是否显示确认密码
      disabled: false, // 是否禁用验证码按钮
      timerCodeMsg: '发送验证码', // 发送验证码
      changePasswordRules: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        userPhone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          }
        ],
        newPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 5,
            max: 16,
            message: '密码长度在 5 到 16 个字符',
            trigger: 'blur'
          }
        ],
        affirmPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            min: 5,
            max: 16,
            message: '密码长度在 5 到 16 个字符',
            trigger: 'blur'
          },
          {
            validator: validateAffirmPassword,
            trigger: 'blur'
          }
        ]
      }, // 更改密码验证
      changePassword: {}, // 更改用户密码
      dialogVisible: false, // 更改密码的弹窗
      userImg: '',
      errorUserPhoto: 'this.src="' + require('../assets/img/avatar5.png') + '"'
    }
  },
  //  (!process.server ? '/api/' : '') +
  //       '/file/' +
  //       this.$store.state.user.name +
  //       '/photo/user.file', // 头像路径
  created() {
    // this.userImg =
    //   (!process.server ? '/api/' : '') +
    //   '/file/' +
    //   this.$store.state.user.name +
    //   '/photo/user.file'
  },
  methods: {
    /**
     * @author: wangHongFei
     * @description: 验证码倒计时
     */
    countDown(time) {
      var timeRange = time
      let vm = this
      this.timerId = setInterval(function() {
        if (timeRange < 1) {
          clearInterval(this.timerId)
          vm.timerCodeMsg = '重新发送验证码'
          vm.disabled = false
          vm = ''
        } else {
          --timeRange
          vm.timerCodeMsg = timeRange + '秒后重发验证'
        }
      }, 1000)
    },
    /**
     * @author: wangHongFei
     * @description: 确认表单信息
     */
    submitForm(functionName) {
      console.debug('表单验证')
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this[functionName]()
        } else {
          this.$message({
            message: '请检查用户信息',
            type: 'error'
          })
          return false
        }
      })
    },
    /**
     * @author: wangHongFei
     * @description: 修改密码
     */
    async modifyPassword() {
      var result = await post('/user/modifyPassword.form', {
        userName: this.changePassword.userName,
        phone: this.changePassword.userPhone,
        password: this.changePassword.affirmPassword,
        code: this.changePassword.inputCode
      })
      if (result.status === 'success') {
        this.$message({
          message: '密码修改成功, 请重新登陆',
          type: 'success'
        })
        this.timerCodeMsg = '发送验证码'
        this.disabled = false
        clearInterval(this.timerId)
        this.$router.push({ name: 'login', query: { url: '/login' } })
        this.changePasswordRules['inputCode'] = []
      } else if (result.status === 'noUserNameOrPhone') {
        this.$message({
          message: '用户名或电话号码或验证码不正确',
          type: 'error'
        })
      } else if (result.status === 'expired') {
        this.$message({
          message: '验证码过期',
          type: 'error'
        })
      } else if (result.status === 'codeError') {
        this.$message({
          message: '验证码错误',
          type: 'error'
        })
      } else if (result.status === 'passwordError') {
        this.$message({
          message: '密码不符合规则',
          type: 'error'
        })
      }
    },
    /**
     * @author: wangHongFei
     * @description: 发送验证码
     */
    async sendPhoneMessage() {
      var result = await post('/user/sendPhoneMessage.form', {
        userName: this.changePassword.userName,
        phone: this.changePassword.userPhone
      })
      console.debug('发送验证码：', result)
      if (result.status === 'success') {
        this.disabled = true
        this.$message({
          message: '验证码发送成功',
          type: 'success'
        })
        this.changePasswordRules['inputCode'] = [
          {
            required: true,
            message: '请输入手机验证码',
            trigger: 'blur'
          }
        ]
        this.countDown(60)
      } else if (result.status === 'noUserNameOrPhone') {
        this.$message({
          message: '用户名或电话号码不正确',
          type: 'error'
        })
      } else if (result.status === 'phoneNumberError') {
        this.$message({
          message: '电话号码未注册',
          type: 'error'
        })
      }
    },
    /**
     * @author: wangHongFei
     * @description: 显示密码修改操作窗
     */
    showDialogVisible() {
      this.dialogVisible = true
      this.changePassword = {}
      this.timerCodeMsg = '发送验证码'
      this.disabled = false
      clearInterval(this.timerId)
      this.changePasswordRules['inputCode'] = []
    },
    /**
     * [logout 退出登陆]
     * @return {[type]} [description  ]
     */
    logout() {
      console.debug('退出登陆')
      localStorage.clear()
      this.$router.push({ name: 'login', query: { url: '/login' } })
    }
  }
}
</script>
<style scoped>
.avatar-wrapper {
  cursor: pointer;
  position: relative;
  text-align: center;
  height: 60px;
  display: flex;
  align-items: center;
}
/* 头像图片样式 */
.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
/* 头像图标样式 */
.el-icon-caret-bottom {
  position: absolute;
  right: -10px;
  top: auto;
  bottom: auto;
  font-size: 12px;
}
</style>
