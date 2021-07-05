/*
 * @Description: 系统管理-app版本管理
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-01 13:40:05
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:09:09
 */
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header">
            <span>更新包上传</span>
          </div>
          <el-form
            ref="ruleFormTwo"
            :model="ruleForm"
            :rules="ruleValidation"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="更新标题" prop="title">
              <el-input v-model="ruleForm.title" />
            </el-form-item>
            <el-form-item label="版本号" prop="version">
              <el-input v-model="ruleForm.version" />
            </el-form-item>
            <el-form-item
              label="更新内容(输入内容不可超过500字):"
              prop="content"
            >
              <el-input
                v-model="ruleForm.content"
                :autosize="{ minRows: 5, maxRows: 6 }"
                type="textarea"
              />
            </el-form-item>
            <el-form-item>
              <el-upload
                ref="uploadTwo"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :data="formatRuleForm"
                :accept="acceptTwo"
                :file-list="fileListTwo"
                :limit="limit"
                :auto-upload="false"
                :on-exceed="limitExceed"
                :action="getPostUrl(postUrl)"
              >
                <el-button slot="trigger" size="small" type="primary"
                  >选取文件</el-button
                >
                <el-button
                  style="margin-left: 10px"
                  size="small"
                  type="success"
                  @click="submitUploadTwo"
                  >上传</el-button
                >
              </el-upload>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header">
            <span>app上传</span>
          </div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="ruleValidation"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="更新标题" prop="title">
              <el-input v-model="ruleForm.title" />
            </el-form-item>
            <el-form-item label="版本号" prop="version">
              <el-input v-model="ruleForm.version" />
            </el-form-item>
            <el-form-item
              label="更新内容(输入内容不可超过500字):"
              prop="content"
            >
              <el-input
                v-model="ruleForm.content"
                :autosize="{ minRows: 5, maxRows: 6 }"
                type="textarea"
              />
            </el-form-item>
            <el-form-item>
              <el-upload
                ref="upload"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :data="formatRuleForm"
                :accept="acceptOne"
                :file-list="fileList"
                :limit="limit"
                :auto-upload="false"
                :on-exceed="limitExceed"
                :action="getPostUrl(appPostUrl)"
              >
                <el-button slot="trigger" size="small" type="primary"
                  >选取文件</el-button
                >
                <el-button
                  style="margin-left: 10px"
                  size="small"
                  type="success"
                  @click="submitUpload"
                  >上传</el-button
                >
              </el-upload>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header">
            <span>当前app版本</span>
          </div>
          <el-table
            :data="tableData"
            border
            max-height="490"
            style="width: 100%"
          >
            <el-table-column prop="title" label="更新标题" />
            <el-table-column
              :formatter="formatterName"
              prop="name"
              label="类型"
            />
            <el-table-column prop="content" label="更新内容" />
            <el-table-column
              :formatter="formatterForcedUpdat"
              prop="forcedUpdate"
              label="是否强制更新"
            />
            <el-table-column prop="version" label="版本号" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  GET_LAST_APP_IN_FO // 获取app版本
} from '@/lib/ApiURL'
import { post } from '@/lib/Util'
export default {
  data() {
    return {
      tableData: [], // 历史版本信息
      acceptOne: '.apk', // app 上传组件的格式过滤
      acceptTwo: '.wgt', // 更新包上传组件的格式过滤
      limit: 1, // 最大的文件上传数
      fileList: [], // 上传app文件列表
      fileListTwo: [], // 上传更新包文件列表
      postUrl: '/zuul/file/updatePackage.file', // 上传组件更新包的上传地址
      appPostUrl: '/zuul/file/updateApp.file', // 上传组件app的的上传地址
      formatRuleForm: {
        data: 'asname'
      }, // 格式化的数据
      ruleValidation: {
        title: [
          {
            required: true,
            message: '请输入更新标题',
            trigger: 'blur'
          }
        ],
        version: [
          {
            required: true,
            message: '请输入版本号',
            trigger: 'blur'
          }
        ]
      },
      ruleForm: {} // 上传信息
    }
  },
  created() {
    if (process.server) return
    this.getLastAppInfo()
  },
  methods: {
    /**
     * @author: wangHongFei
     * @description: 整理请求路由
     */
    getPostUrl(postUrl) {
      var url = postUrl
      if (!process.server) {
        url = '/api/' + postUrl
      } else {
        url = postUrl
      }
      return url
    },
    /**
     * @author: wangHongFei
     * @description: 更新包上传
     */
    submitUploadTwo() {
      let vm = this
      console.debug('上传更新包')
      this.$refs['ruleFormTwo'].validate((valid) => {
        if (valid) {
          vm.formatRuleForm['data'] = JSON.stringify(this.ruleForm)
          vm.$refs.uploadTwo.submit()
        } else {
          this.$message({
            message: '请检查上传信息',
            type: 'error'
          })
          return false
        }
      })
    },
    /**
     * @author: wangHongFei
     * @description: app 上传
     */
    submitUpload() {
      let vm = this
      console.debug('this.formatRuleForm:', this.formatRuleForm)
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          vm.formatRuleForm['data'] = JSON.stringify(this.ruleForm)
          vm.$refs.upload.submit()
        } else {
          this.$message({
            message: '请检查上传信息',
            type: 'error'
          })
          return false
        }
      })
    },
    /**
     * @author: wangHongFei
     * @description: 整理类型
     */
    formatterForcedUpdat(row, column) {
      var item = '否'
      if (row.forcedUpdate) {
        item = '是'
      }
      return item
    },
    /**
     * @author: wangHongFei
     * @description: 上传文件现限制
     */
    limitExceed() {
      this.$message({
        message: '超出限制',
        type: 'error'
      })
    },
    /**
     * @author: wangHongFei
     * @description: 上传成功
     */
    uploadSuccess(response, file, fileList) {
      this.$message({
        message: '上传成功',
        type: 'success'
      })
    },
    /**
     * @author: wangHongFei
     * @description: 上传失败
     */
    uploadError(err, file, fileList) {
      console.debug('上传失败：', err)
      this.$message({
        message: '上传失败',
        type: 'error'
      })
    },
    /**
     * @author: wangHongFei
     * @description: 整理类型
     */
    formatterName(row, column) {
      var item = '未知'
      if (row.name === 'app') {
        item = 'app'
      } else if (row.name === 'appInfo') {
        item = '更新包'
      }
      return item
    },
    /**
     * @author: wangHongFei
     * @description: 当前app版本
     */
    async getLastAppInfo() {
      var info = await post(GET_LAST_APP_IN_FO, null)
      this.tableData = info
      console.debug('当前app版本：', info)
    },
    /**
     * [uploadFunc 上传组件 更新包的回调]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    uploadFunc(data) {
      let retData = window.JSON.parse(data)
      console.debug(retData)
    }
  }
}
</script>
