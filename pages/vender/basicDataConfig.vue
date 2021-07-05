/*
 * @Description: 设备厂商管理-基础数据管理
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-02 17:00:04
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:09:31
 */
<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card
        :body-style="{ padding: '0px' }"
        shadow="never"
      >
        <div
          slot="header"
          class="clearfix">
          <span>配置列表</span>
        </div>
        <el-menu
          default-active="1"
        >
          <el-menu-item
            v-for = "(data, index) in retDatas"
            :key="index + 'basicData '"
            :index="index + 'basicData'"
          >
            <div
              slot="title"
              @click = "setDatas(data)"
            >
              <span
                slot="title"
              >{{ data.value }}</span>
            </div>
            <!-- <i class = "fa fa-minus text-danger"/> -->
          </el-menu-item>
        </el-menu>
      </el-card>
    </el-col>
    <el-col :span="18">
      <el-card
        :body-style="{ padding: '10px' }"
        shadow="never"
      >
        <div
          slot="header"
          class="clearfix">
          <span>配置详情</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-input
              v-model = "itemData.value"
              placeholder="请输入内容"
            >
              <template slot="prepend">名称</template>
            </el-input>
          </el-col>
          <el-col :span="24">
            <div
              v-for = "(item, index) in itemData.content"
              :key = "'item' + index"
              style="padding:10px"
            >
              <el-input
                v-model = "itemData.content[index]"
                placeholder="请输入内容"
              >
                <el-button
                  v-if="itemData.type === 'Array'"
                  slot="append"
                  icon="fa fa-minus text-danger"
                  @click = "reduceContent(index)"
                />
              </el-input>
            </div>
            <el-row
              :gutter="20"
              style="margin:10px"
            >
              <el-col
                v-if="itemData.type === 'Array'"
                :span="6"
              >
                <el-button
                  type="success"
                  @click = "addContent()"
                >添加</el-button>
              </el-col>
              <el-col
                :span="6"
              >
                <el-button
                  type="primary"
                  @click = "saveBasicDataConfig"
                >保存</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import {
  DELETE_CLIENT_DELETE_BASIC_DATA_CONFIG_BY_TYPE, // 删除配置
  SAVE_CLIENT_SAVE_BASIC_DATA_CONFIG // 保存配置
} from '@/lib/ApiURL'
import { $post, findBasicDataConfigByType } from '@/lib/Util'
export default {
  data() {
    return {
      itemData: {
        content: []
      }, // 选择的数据配置
      retDatas: [] // 全部查询返回结果
    }
  },
  async created() {
    if (process.server) return
    this.retDatas = await findBasicDataConfigByType(
      'customer_baseDataConfiguration'
    )
  },
  methods: {
    /**
     * [getSvgIcon 获取图标]
     * @param  {[type]} path [description]
     * @return {[type]}      [description]
     */
    getImageUrl(path) {
      var iconPath
      if (!process.server) {
        iconPath = '/api' + path
      } else {
        iconPath = path
      }
      return iconPath
    },
    showImgUrl(imageUrl) {
      this.imageUrl = imageUrl
    },
    /**
     * [saveBasicDataConfig 保存基础数据]
     * @return {[type]} [description]
     */
    async saveBasicDataConfig() {
      var content = []
      console.log('----save basic data config')
      this.itemData.content.map(function(item) {
        if (item.length > 0) {
          content.push(item)
        }
      })
      if (this.itemData.name && this.itemData.name.length > 0) {
        if (this.itemData.type.length > 0) {
          if (content.length > 0) {
            var info = await $post(SAVE_CLIENT_SAVE_BASIC_DATA_CONFIG, {
              name: this.itemData.value,
              type: this.itemData.name,
              flag: 'String',
              content: content
            })
            console.debug('数据不能为空', info)
            if (info) {
              this.$message({
                message: '操作成功',
                type: 'success'
              })
            } else {
              this.$message({
                message: '操作失败',
                type: 'error'
              })
            }
            this.retDatas = await findBasicDataConfigByType(
              'customer_baseDataConfiguration'
            )
          } else {
            console.debug('数据不能为空')
          }
        } else {
          console.debug('类型不能为空')
        }
      } else {
        console.debug('名称不能为空')
      }
    },
    /**
     * [addContent 添加子属性]
     */
    addContent() {
      console.debug('配置数据：', this.itemData.content)
      if (!this.itemData.content) {
        this.itemData.content = ['']
        return
      }
      this.itemData.content.push('')
    },
    /**
     * [reduceContent 删除子属性]
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    reduceContent(index) {
      this.itemData.content.splice(index, 1)
      console.debug(this.itemData.content)
    },
    /**
     * [setDatas 左边菜单点击设置数据]
     * @param {[type]} data [description]
     */
    async setDatas(data) {
      console.debug('点击数据：', data)
      // 左边菜单点击设置数据
      this.itemData = data
      this.itemData.content = await findBasicDataConfigByType(data.name)
    }
  }
}
</script>
