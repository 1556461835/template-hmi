/*
 * @Description: 系统管理-基础数据管理
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-02 17:00:04
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:09:31
 */
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <div slot="header" class="clearfix">
            <span>配置列表</span>
            <el-button
              type="text"
              style="float: right; padding: 3px 0"
              @click="addBasicDataConfig"
              >添加配置</el-button
            >
          </div>
          <el-menu default-active="1">
            <el-menu-item
              v-for="(data, index) in retDatas"
              :key="index + 'basicData '"
              :index="index + 'basicData'"
            >
              <!-- <span
                slot="title"
                @click = "setDatas(data)"
              >{{ data.name }}</span> -->
              <div slot="title" @click.stop="setDatas(data)">
                <span slot="title">{{ data.name }}</span>
                <i
                  class="el-icon-delete"
                  style="
                    float: right;
                    line-height: 56px;
                    color: red;
                    z-index: 3;
                  "
                  @click.stop="delBasicDataConfig(data, index)"
                />
              </div>
              <!-- <i class = "fa fa-minus text-danger"/> -->
            </el-menu-item>
          </el-menu>
          <div
            style="
              text-align: center;
              border: 1px solid #ebeef5;
              background-color: #fff;
            "
          >
            <el-pagination
              :current-page="currentPage"
              :page-sizes="pageSizeList"
              :page-size="pageSize"
              :total="total"
              small
              layout="total, prev, pager, next"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card :body-style="{ padding: '10px' }" shadow="never">
          <div slot="header" class="clearfix">
            <span>配置详情</span>
          </div>
          <el-row :gutter="20">
            <el-col :span="24">
              <div style="padding: 5px 0px 10px 0px">
                <label> 类型： </label>
              </div>
            </el-col>
            <el-col :span="8">
              <el-input v-model="type" placeholder="请输入内容">
                <template slot="prepend">type</template>
              </el-input>
            </el-col>
            <el-col :span="8">
              <el-input v-model="name" placeholder="请输入内容">
                <template slot="prepend">name</template>
              </el-input>
            </el-col>
            <el-col :span="8">
              <el-select v-model="flag" placeholder="请选择数据类型">
                <el-option label="json" value="json" />
                <el-option label="string" value="string" />
              </el-select>
            </el-col>
            <el-col :span="24">
              <div style="padding: 10px 10px 0px 0px">
                <label> 描述： </label>
              </div>
              <el-input
                v-model="description"
                :rows="2"
                style="margin-top: 10px"
                placeholder="描述"
                type="textarea"
                autosize
              />
              <div style="padding: 10px; float: right">
                <el-button  v-show="flag == 'json'" type="success" @click="openDataDialog"
                  >数据格式</el-button
                >
                <el-button type="success" @click="saveBasicDataConfig"
                  >保存配置</el-button
                >
              </div>
            </el-col>
          </el-row>
          <div style="padding: 0 10px; border-top: 2px dashed #dcdfe6">
            <div style="padding: 10px 0px">
              <label> 内容： </label>
            </div>
            <el-table :data="content" border style="width: 100%">
              <el-table-column type="index" />
              <el-table-column label="内容">
                <template slot-scope="scope">
                  <div v-if="!getContentType(scope.row)">
                    {{ scope.row }}
                  </div>
                  <div v-if="getContentType(scope.row)[0] === 'imagePath'">
                    <div
                      style="
                        text-align: center;
                        border: solid #c2c2c2;
                        width: 150px;
                        padding: 5px;
                      "
                    >
                      <i
                        class="fa fa-times"
                        style="
                          color: red;
                          float: right;
                          margin-top: -15px;
                          margin-right: -15px;
                          padding: 2px;
                        "
                        @click="reduceContent(scope.$index)"
                      />
                      <img
                        :src="getContentType(scope.row)[1]"
                        class="img-responsive center-block"
                        width="100px"
                      />
                      <br />
                    </div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                  <el-button-group>
                    <el-button
                      type="success"
                      icon="el-icon-sort-up"
                      size="mini"
                      @click="adjustPosition(scope.$index, -1)"
                    />
                    <el-button
                      type="warning"
                      icon="el-icon-sort-down"
                      size="mini"
                      @click="adjustPosition(scope.$index, 1)"
                    /> </el-button-group
                  ><br />
                  <el-button-group
                    v-if="!getContentType(scope.row)"
                    style="padding-top: 5px"
                  >
                    <el-button
                      type="danger"
                      icon="el-icon-minus"
                      size="mini"
                      @click="reduceContent(scope.$index)"
                    />
                    <el-button
                      type="primary"
                      icon="el-icon-edit-outline"
                      size="mini"
                      @click="addContent(scope.row, scope.$index)"
                    />
                  </el-button-group>
                </template>
              </el-table-column>
            </el-table>
            <el-row :gutter="20" style="margin: 10px">
              <el-col :span="6">
                <el-button type="success" @click="addContent()">添加</el-button>
              </el-col>
              <!-- <el-col :span="6">
                <el-upload
                  ref="uploadTwo"
                  :on-success="uploadSuccess"
                  :on-error="uploadError"
                  :data="uploadData"
                  :accept="accept"
                  :show-file-list="false"
                  :action="getPostUrl(postUrl)"
                >
                  <el-button type="primary">图片上传</el-button>
                </el-upload>
              </el-col> -->
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 添加数据 -->
    <el-dialog :visible.sync="dialogVisible" title="编辑基础数据" width="40%">
      <el-table :data="basicDataItem" border style="width: 100%">
        <el-table-column type="index" />
        <el-table-column prop="key" label="属性名">
          <template slot-scope="scope">
            <el-input v-model="scope.row.key" placeholder="请输入内容" />
          </template>
        </el-table-column>
        <el-table-column prop="value" label="属性值">
          <template slot-scope="scope">
            <el-input v-if="scope.row.format == 'String'" v-model="scope.row.value" placeholder="请输入内容" />
            <el-input v-else-if="scope.row.format == 'Number'" v-model="scope.row.value" type="number" placeholder="请输入数值" />
            <el-input v-else-if="scope.row.format == 'Date'" v-model="scope.row.value" type="datetime-local" placeholder="请输入日期时间" />
            <el-input v-else v-model="scope.row.value" placeholder="请输入内容" />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button-group>
              <el-button
                type="danger"
                icon="el-icon-minus"
                size="mini"
                @click="reduceContentItem(scope.$index)"
              />
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer">
        <el-button type="primary" size="mini" @click="addContentItem()"
          >增加字段</el-button
        >
        <el-button type="success" size="mini" @click="saveContentItem()"
          >保存编辑</el-button
        >
      </div>
    </el-dialog>
    <!-- 编辑数据格式 -->
    <el-dialog :visible.sync="dataDialog" title="编辑数据格式" width="40%">
      <el-table :data="dataConfig" border style="width: 100%">
        <el-table-column type="index" />
        <el-table-column prop="field" label="字段名">
          <template slot-scope="scope">
            <el-input v-model="scope.row.field" placeholder="请输入内容" />
          </template>
        </el-table-column>
        <el-table-column prop="format" label="字段类型">
          <template slot-scope="scope">
            <el-select v-model="scope.row.format" placeholder="请选择">
              <el-option
                v-for="item in selectConfig"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button-group>
              <el-button
                type="danger"
                icon="el-icon-minus"
                size="mini"
                @click="delDataField(scope.$index)"
              />
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer">
        <el-button type="primary" size="mini" @click="addDataField()"
          >增加字段</el-button
        >
        <el-button type="success" size="mini" @click="saveDataConfig()"
          >保存编辑</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  GET_CLIENT_FIND_BASIC_DATA_CONFIG_BY_TYPE, // 查询单个订单类型
  GET_BASIC_DATA_CONFIG_PAGE, // 获取所有的配置
  DELETE_CLIENT_DELETE_BASIC_DATA_CONFIG_BY_TYPE, // 删除配置
  SAVE_CLIENT_SAVE_BASIC_DATA_CONFIG // 保存配置
} from '@/lib/ApiURL'
import { fixMenus, $post } from '@/lib/Util'
export default {
  data() {
    return {
      dialogVisible: false, // 编辑基础数据弹窗
      basicDataItem: [], // 单个json基础数据编辑
      contentData: '', // 增加的content下标数据
      name: '', // 保存的名称
      type: '', // 保存类型
      flag: '', // 保存的数据类型
      description: '', // 描述
      imageUrl: '', // 上传图片路径
      uploadData: {
        data: {
          type: 'basicDataConfig'
        }
      }, // 文件上传参数
      accept: '.png', // 文件上传时，限制的文件类型
      postUrl: '/file/uploadCommonFile.file', // 文件上传路径
      content: [], // 保存数据
      retDatas: [], // 全部查询返回结果
      total: 0, // 总条目数
      pageSize: 8, // 每页显示的条目数
      currentPage: 1, // 当前页面码
      pageSizeList: [5, 20, 30], // 每页显示的条数
      dataDialog: false,
      dataConfig: [], //保存的示例数据格式
      selectConfig: [
        {
          value: 'String',
          label: '字符串'
        },
        {
          value: 'Number',
          label: '数值'
        },
        {
          value: 'Date',
          label: '时间'
        }
      ]
    }
  },
  created() {
    if (process.server) return
    console.debug('创建')
    this.uploadData['data'] = JSON.stringify({
      type: 'basicDataConfig'
    })
    this.pageSize = this.pageSizeList[0]
    this.findBasicDataConfigs()
  },
  methods: {
    // 打开数据格式弹窗
    openDataDialog() {
      this.dataDialog = true
    },
    // 数据格式添加字段
    addDataField() {
      this.dataConfig.push({
        field: '',
        format: ''
      })
    },
    // 保存示例
    saveDataConfig() {
      this.dataDialog = false
    },
    // 删除示例字段
    delDataField(index) {
      this.dataConfig.splice(index, 1)
    },
    /**
     * @author: wangHongFei
     * @description: 调节排序位置
     */
    adjustPosition(index, adjustIndex) {
      var tindex = index + adjustIndex
      if (tindex < 0) {
        return
      }
      if (index > tindex) {
        this.content.splice(tindex, 0, this.content[index])
        this.content.splice(index + 1, 1)
      } else {
        this.content.splice(tindex + 1, 0, this.content[index])
        this.content.splice(index, 1)
      }
      this.saveBasicDataConfig()
    },
    /**
     * [addBasicDataConfig 添加项目基础类型]
     */
    addBasicDataConfig() {
      this.name = ''
      this.type = ''
      this.description = ''
      this.flag = ''
      this.content = []
    },
    /**
     * @author: wangHongFei
     * @description: 上传成功
     */
    uploadSuccess(response, file, fileList) {
      console.debug('response：', response)
      var retData = response
      var imageUrl = 'imagePath:' + retData.path
      this.content.push(imageUrl)
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
     * @description: 判断数据类型
     */
    getContentType(type) {
      var isImage = false
      // var typeArray = type.split(':')
      // if (typeArray[0] === 'imagePath') {
      //   typeArray[1] = this.getImageUrl(typeArray[1])
      //   isImage = typeArray
      // }
      return isImage
    },
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
     * [delBasicDataConfig 删除项目基础类型]
     * @param  {[type]} data  [description]
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    async delBasicDataConfig(data, index) {
      var info = await $post(DELETE_CLIENT_DELETE_BASIC_DATA_CONFIG_BY_TYPE, {
        type: data.type
      })
      info = JSON.parse(info)
      if (info.status === 'success') {
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
      this.retDatas.splice(index, 1)
      this.name = ''
      this.type = ''
      this.flag = ''
      this.description = ''
      this.content = []
    },
    /**
     * [findBasicDataConfigs 查询所有基础数据]
     * @return {[type]} [description]
     */
    async findBasicDataConfigs() {
      var info = await $post(GET_BASIC_DATA_CONFIG_PAGE, {
        start: this.currentPage - 1,
        size: this.pageSize
      })
      var result = JSON.parse(info)
      this.retDatas = result.content
      this.total = result.totalElements
    },
    /**
     * [saveBasicDataConfig 保存基础数据]
     * @return {[type]} [description]
     */
    async saveBasicDataConfig() {
      var content = []
      console.debug('删除字段：', this.content)
      content = this.content.map(function(item) {
        if (item.length > 0) {
          return item
        }
      })
      if (this.name.length > 0) {
        if (this.type.length > 0) {
          if (content.length > 0) {
            var info = await $post(SAVE_CLIENT_SAVE_BASIC_DATA_CONFIG, {
              name: this.name,
              type: this.type,
              description: this.description,
              flag: this.flag,
              content: content,
              example: this.dataConfig
            })
            if (info) {
              this.$message({
                message: '操作成功',
                type: 'success'
              })
              this.dialogVisible = false
            } else {
              this.$message({
                message: '操作失败',
                type: 'error'
              })
            }
            this.setDatas({ type: this.type })
            this.findBasicDataConfigs()
            // this.name = ''
            // this.type = ''
            // this.flag = ''
            // this.content = []
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
    addContent(item, index) {
      console.debug('基础数据配置类型：', this.flag)
      if (this.flag === 'string') {
        this.addItem(item, index)
      } else {
        var basicDataItem = item ? JSON.parse(item) : {}
        this.basicDataIndex = item ? index : -1
        this.basicDataItem = []
        // for (const key in basicDataItem) {
        //   this.basicDataItem.push({
        //     key: key,
        //     value: basicDataItem[key]
        //   })
        // }
        if (!item) {
          for (const v of this.dataConfig) {
            this.basicDataItem.push({
              key: v.field,
              value: null,
              format: v.format
            })
          }
        } else {
          for (const v of this.dataConfig) {
            this.basicDataItem.push({
              key: v.field,
              value: basicDataItem[v.field],
              format: v.format
            })
          }
        }
        this.dialogVisible = true
      }
    },
    /**
     * @author: wangHongFei
     * @description: 增加字符串类型数据
     */
    addItem(item, index) {
      this.$prompt(item ? '添加数据' : '编辑数据', '提示', {
        inputValue: item,
        inputValidator: function(value) {
          console.debug('验证信息：', value)
          if (!value) {
            return '数据不可为空'
          } else {
            return true
          }
        },
        inputErrorMessage: '',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          if (item) {
            this.content.splice(index, 1, value)
          } else {
            this.content.push(value)
          }
          this.saveBasicDataConfig()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    },
    /**
     * @author: wangHongFei
     * @description: 增加json的单个数据
     */
    addContentItem() {
      this.basicDataItem.push({
        key: '',
        value: ''
      })
    },
    /**
     * @author: wangHongFei
     * @description: 保存字段
     */
    saveContentItem() {
      if (!this.basicDataItem[0] || !this.basicDataItem[0].key) {
        this.$message({
          type: 'warning',
          message: '属性名不可为空'
        })
        return
      }
      var basicDataItem = {}
      this.basicDataItem.map((item) => {
        delete item.format
        basicDataItem[item.key] = item.value
        console.debug('basicDataItem[item.key]+', basicDataItem[item.key])
      })
      console.debug('this.basicDataItem+', this.basicDataItem)
      console.debug('basicDataItem有错', basicDataItem)
      basicDataItem = JSON.stringify(basicDataItem)
      if (this.basicDataIndex > 0) {
        this.content.splice(this.basicDataIndex, 1, basicDataItem)
      } else {
        this.content.push(basicDataItem)
      }
      console.debug('saveContentItem+', this.content)
      this.dialogVisible = false
      this.saveBasicDataConfig()
    },
    /**
     * @author: wangHongFei
     * @description: 删除json的单个数据
     */
    reduceContentItem(index) {
      this.basicDataItem.splice(index, 1)
    },
    /**
     * [reduceContent 删除子属性]
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    reduceContent(index) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.content.splice(index, 1)
          this.saveBasicDataConfig()
        })
        .catch(() => {
          console.debug('取消')
        })
    },
    /**
     * [setDatas 左边菜单点击设置数据]
     * @param {[type]} data [description]
     */
    async setDatas(data) {
      // 左边菜单点击设置数据
      var info = await $post(
        GET_CLIENT_FIND_BASIC_DATA_CONFIG_BY_TYPE,
        {
          type: data.type
        },
        'no'
      )
      var infoItem = JSON.parse(info)
      this.name = infoItem.name
      this.type = infoItem.type
      this.description = infoItem.description
      this.flag = infoItem.flag
      this.uploadData['data'] = JSON.stringify({ type: infoItem.type })
      this.content = JSON.parse(infoItem.content)
      if (infoItem.example) {
        this.dataConfig = JSON.parse(infoItem.example)
      }
    },
    /**
     * @author: wangHongFei
     * @description: 切换每页显示的数量
     */
    handleSizeChange(val) {
      this.pageSize = val
      this.findBasicDataConfigs()
    },
    /**
     * @author: wangHongFei
     * @description: 切换页码
     */
    handleCurrentChange(val) {
      this.currentPage = val
      this.findBasicDataConfigs()
    }
  }
}
</script>
