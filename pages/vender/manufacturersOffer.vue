/*
 * @Description: 设备厂商管理-原料厂商信息
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-01 13:12:11
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:10:00
 */
<template>
  <div>
    <div style="border:1px solid #ebeef5;padding:5px;background-color:#fff">
      <el-row :gutter="10">
        <el-col
          :span="6"
        >
          <!-- style="text-align:right;" -->
          <el-input
            v-model="searchInput"
            placeholder="请输入内容"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchStart"
            />
          </el-input>
        </el-col>
        <el-col
          :span="6"
        >
          <el-select
            v-model="manufacturer"
            placeholder="请选择">
            <el-option
              v-for="item in manufacturerList"
              :key="item"
              :label="item"
              :value="item"/>
          </el-select>
        </el-col>
        <el-col
          :span="6"
        >
          <el-select
            v-model="model"
            placeholder="请选择">
            <el-option
              v-for="item in modelList"
              :key="item"
              :label="item"
              :value="item"/>
          </el-select>
        </el-col>
        <el-col
          :span="6"
        >
          <el-button
            v-if="!tableData[0] && manufacturer !== '全部' && model !== '全部' && showSaveMaterialInfo"
            type="success"
            @click="editInformation"
          >添加</el-button>
          <!-- v-if="manufacturer !== '全部' && tableData[0]" -->
          <el-button
            v-if="manufacturer !== '全部' && tableData[0] && showSetPriceByPlant"
            type="success"
            @click="adjustPrice"
          >调整基价</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData"
      border
      max-height="490"
      style="width: 100%">
      <el-table-column
        :index="formatterTableDataIndex"
        type="index"
        width="50"/>
      <el-table-column
        prop="plant"
        label="报价钢厂"
      />
      <el-table-column
        prop="type"
        label="材质"
      />
      <el-table-column
        prop="price"
        label="基础价格"
      />
      <el-table-column
        prop="deltaPrice"
        label="价格变化"
      />
      <el-table-column
        prop="typePrice"
        label="材质加价"
      />
      <el-table-column
        prop="carriage"
        label="运费"
      />
      <el-table-column
        prop="widthPrice"
        label="宽度加价"
        width="200px"
      >
        <template slot-scope="scope">
          <span>{{ getOrganizeField(scope) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="thicknessPrice"
        label="厚度加价"
        width="200px"
      >
        <template slot-scope="scope">
          <span>{{ getOrganizeField(scope) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :formatter="formatterDate"
        prop="date"
        label="修改日期"
      />
      <el-table-column
        prop="user"
        label="修改账户"
      />
      <el-table-column
        prop="description"
        label="报价描述"
      />
      <el-table-column
        v-if="showSaveMaterialInfo || showDeleteMaterialInfo"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button-group>
            <el-button
              v-if="showSaveMaterialInfo"
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="editInformation(scope.row)"
            />
            <el-button
              v-if="showDeleteMaterialInfo"
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="deleteInformation(scope.row)"
            />
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align:center;border:1px solid #ebeef5;background-color: #fff">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="pageSizeList"
        :page-size="pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog
      :visible.sync="dialogVisibleMessage"
      width="70%"
      title="编辑报价信息"
    >
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="ruleValidation"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item
              label="报价厂商"
              prop="plant"
            >
              <el-select
                v-model="ruleForm.plant"
                :disabled="edit"
                placeholder="请选择">
                <el-option
                  v-for="item in manufacturerList"
                  :key="item"
                  :label="item"
                  :value="item"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="材质"
              prop="type"
            >
              <el-select
                v-model="ruleForm.type"
                :disabled="edit"
                placeholder="请选择">
                <el-option
                  v-for="item in modelList"
                  :key="item"
                  :label="item"
                  :value="item"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="基础价格"
              prop="price"
            >
              <el-input
                v-model="ruleForm.price"
                type="number"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="材质加价"
              prop="typePrice"
            >
              <el-input
                v-model="ruleForm.typePrice"
                type="number"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="运费"
              prop="carriage"
            >
              <el-input
                v-model="ruleForm.carriage"
                type="number"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item
              label="报价描述"
              prop="description">
              <el-input
                v-model="ruleForm.description"
                type="textarea"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-table
              :data="widthPrice"
              cell-class-name="quotationTable"
              size="mini"
              style="width: 100%">
              <el-table-column label="宽度加价">
                <el-table-column
                  type="index"
                  width="50"/>
                <el-table-column
                  prop="max"
                  label="最大宽度"
                >
                  <template slot-scope="scope">
                    <el-input
                      v-model="scope.row.max"
                      size="mini"
                      type="number"
                    />
                  </template>
                </el-table-column>
                <el-table-column
                  prop="min"
                  label="最小宽度"
                >
                  <template slot-scope="scope">
                    <el-input
                      v-model="scope.row.min"
                      size="mini"
                      type="number"
                    />
                  </template>
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="加价价格"
                >
                  <template slot-scope="scope">
                    <el-input
                      v-model="scope.row.price"
                      :class="scope.row.price ? 'input-success' : 'input-error'"
                      size="mini"
                      type="number"
                    />
                    <span
                      v-show="!scope.row.price"
                      style="color:#f56c6c;position: absolute"
                    >请输入加价价格</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作"
                >
                  <template slot-scope="scope">
                    <el-button
                      type="warning"
                      size="mini"
                      @click.native.prevent="deleteListItem(scope.$index, 'widthPrice')"
                    >
                      移除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table-column>
            </el-table>
            <el-button
              style="width:100%"
              size="mini"
              type="primary"
              @click="addlistItem('widthPrice')"
            >添加</el-button>
          </el-col>
          <el-col :span="12">
            <el-table
              :data="thicknessPrice"
              cell-class-name="quotationTable"
              size="mini"
              style="width: 100%">
              <el-table-column label="厚度加价">
                <el-table-column
                  type="index"
                  width="50"/>
                <el-table-column
                  prop="max"
                  label="最大厚度"
                >
                  <template slot-scope="scope">
                    <el-input
                      v-model="scope.row.max"
                      size="mini"
                      type="number"
                    />
                  </template>
                </el-table-column>
                <el-table-column
                  prop="min"
                  label="最小厚度"
                >
                  <template slot-scope="scope">
                    <el-input
                      v-model="scope.row.min"
                      size="mini"
                      type="number"
                    />
                  </template>
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="加价价格"
                >
                  <template slot-scope="scope">
                    <div :class="scope.row.price ? 'input-success' : 'input-error'">
                      <el-input
                        v-model="scope.row.price"
                        size="mini"
                        type="number"
                      />
                      <transition name="el-zoom-in-top">
                        <p
                          v-if="!scope.row.price"
                          style="color:#f56c6c;position: absolute"
                        >请输入加价价格</p>
                      </transition>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作"
                >
                  <template slot-scope="scope">
                    <el-button
                      type="warning"
                      size="mini"
                      @click.native.prevent="deleteRow(scope.$index, 'thicknessPrice')"
                    >
                      移除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table-column>
            </el-table>
            <el-button
              style="width:100%"
              size="mini"
              type="primary"
              @click="addlistItem('thicknessPrice')"
            >添加</el-button>
          </el-col>
        </el-row>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="submitForm()"
        >保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  SET_PRICE_BY_PLANT, // 调整基价
  SAVE_MATERIAL_INFO, // 添加报价
  DELETE_MATERIAL_INFO, // 删除报价
  FIND_MATERIAL_INFO_BY_PLANT_AND_TYPE // 获取所有报价
} from '@/lib/ApiURL'
import _ from 'lodash'
import Moment from 'moment'
import { $post, findBasicDataConfigByType } from '@/lib/Util'
export default {
  data() {
    return {
      widthPrice: [], // 宽度加价
      thicknessPrice: [], // 厚度加价
      edit: false, // 添加编辑
      searchSelect: '', // 搜索框选择
      searchInput: '', // 搜索框内容
      ruleForm: {}, // 编辑信息
      ruleValidation: {
        plant: [
          {
            required: true,
            message: '请输入报价名称',
            trigger: 'blur'
          }
        ],
        type: [
          {
            required: true,
            message: '请选择报价材质',
            trigger: 'blur'
          }
        ],
        price: [
          {
            required: true,
            message: '请输入基础价格',
            trigger: 'blur'
          }
        ],
        typePrice: [
          {
            required: true,
            message: '请输入材质加价',
            trigger: 'blur'
          }
        ],
        carriage: [
          {
            required: true,
            message: '请输入运费',
            trigger: 'blur'
          }
        ]
      },
      showSaveMaterialInfo: false, // 添加报价权限
      showDeleteMaterialInfo: false, // 删除报价权限
      showSetPriceByPlant: false, // 调整基价权限
      manufacturerList: [], // 厂家选择
      modelList: [], // 规格选择
      manufacturer: '', // 选择的厂家
      model: '', // 选择的规格
      dialogVisibleMessage: false, // 报价信息弹窗编辑
      tableData: [], // 表格信息
      total: 0, // 总条目数
      pageSize: 10, // 每页显示的条目数
      currentPage: 1, // 当前页面码
      pageSizeList: [10, 20, 30] // 每页显示的条数
    }
  },
  watch: {
    manufacturer() {
      this.findAllInformation()
    },
    model() {
      this.findAllInformation()
    }
  },
  async created() {
    if (process.server) return
    // 规格选项
    this.modelList = await findBasicDataConfigByType(
      'customer_baseDataConfiguration_model'
    )
    // 报价厂家选项
    this.manufacturerList = await findBasicDataConfigByType(
      'customer_baseDataConfiguration_manufacturers'
    )
    this.modelList.splice(0, 0, '全部')
    this.manufacturerList.splice(0, 0, '全部')
    this.manufacturer = this.manufacturerList[0]
    this.model = this.modelList[0]
    this.findAllInformation()
  },
  mounted() {
    // 判断添加钢厂报价权限
    this.showSaveMaterialInfo = this.$store.getters.getJurisdiction(
      '/material/saveMaterialInfo.form'
    )
    // 判断删除钢厂报价权限
    this.showDeleteMaterialInfo = this.$store.getters.getJurisdiction(
      '/material/deleteMaterialInfo.form'
    )
    // 判断调整基价权限
    this.showSetPriceByPlant = this.$store.getters.getJurisdiction(
      '/material/setPriceByPlant.form'
    )
  },
  methods: {
    /**
     * @author: wangHongFei
     * @description: 调整基价
     */
    adjustPrice(data) {
      this.$prompt('请输入价格', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: function(value) {
          if (!value) {
            return '请输入价格'
          } else {
            return true
          }
        }
      })
        .then(({ value }) => {
          this.setPriceByPlant(value)
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
     * @description: 调整基价
     */
    async setPriceByPlant(val) {
      var info = await $post(SET_PRICE_BY_PLANT, {
        plant: this.manufacturer, // 选择的钢厂
        price: val // 选择的材质
      })
      let status = window.JSON.parse(info).status
      console.debug('调整基价：', info)
      if (status === 'success') {
        this.$message({
          message: '设置成功',
          type: 'success'
        })
        this.findAllInformation()
      } else {
        this.$message({
          message: '设置失败',
          type: 'error'
        })
      }
    },
    /**
     * @author: wangHongFei
     * @description: 格式化询单时间
     */
    formatterDate(row, column, cellValue, index) {
      console.debug('column:', column)
      var itemName = column.property
      var date = ''
      if (row[itemName]) {
        date = Moment(row[itemName]).format('YYYY-MM-DD HH:mm:ss')
      }
      return date
    },
    getOrganizeField({ row, column, cellValue, index }) {
      var itemName = column.property
      console.debug(row[itemName], '整理数据', column)
      if (!row[itemName]) {
        return ''
      }
      var valueList = JSON.parse(row[itemName])
      var valueText = ''
      console.debug('整理字段：', column.label)
      var label = column.label.substring(0, 2)
      console.debug('整理字段：', label)
      valueList.map(function(item) {
        if ((item.min !== -100 || item.max !== -100) && valueText) {
          valueText = valueText + '，'
        }
        if (item.min !== -100) {
          valueText = valueText + label + '≤' + item.min
        }
        if (item.min !== -100 && item.max !== -100) {
          valueText = valueText + '且'
        }
        if (item.max !== -100) {
          valueText = valueText + label + '≥' + item.max
        }
        if (item.min !== -100 || item.max !== -100) {
          valueText = valueText + '加价' + item.price
        }
      })
      return valueText
    },
    /**
     * @author: wangHongFei
     * @description: 添加数组信息
     */
    addlistItem(listKey) {
      this[listKey].push({})
    },
    /**
     * @author: wangHongFei
     * @description: 删除数组信息
     */
    deleteListItem(index, listKey) {
      this[listKey].splice(index, 1)
    },
    /**
     * @author: wangHongFei
     * @description: 整理index
     */
    formatterTableDataIndex(index) {
      var pageIndex = (this.currentPage - 1) * this.pageSize + index + 1
      return pageIndex
    },
    /**
     * @author: wangHongFei
     * @description: 删除报价
     */
    async deleteInformation(data) {
      this.$confirm('此操作将永久删除此信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.deleteMaterialInfo(data)
        })
        .catch((_) => {})
    },
    /**
     * @author: wangHongFei
     * @description: 删除报价
     */
    async deleteMaterialInfo(data) {
      var info = await $post(DELETE_MATERIAL_INFO, {
        plant: data.plant, // 选择的钢厂
        type: data.type // 选择的材质
      })
      let status = window.JSON.parse(info).status
      if (status === 'success') {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.findAllInformation()
      } else {
        this.$message({
          message: '删除失败',
          type: 'error'
        })
      }
      console.debug('删除报价返回信息：', info)
    },
    /**
     * @author: wangHongFei
     * @description: 查询所有报价
     */
    async findAllInformation() {
      let pSize = this.pageSize
      let page = this.currentPage - 1
      let text = this.searchInput
      var info = await $post(FIND_MATERIAL_INFO_BY_PLANT_AND_TYPE, {
        plant: this.manufacturer === '全部' ? '' : this.manufacturer, // 钢厂
        type: this.model === '全部' ? '' : this.model, // 钢厂的规格
        start: page,
        size: pSize,
        text: text
      })
      console.debug('查询所有报价：', JSON.parse(info))
      var result = JSON.parse(info)
      this.tableData = result.content
      this.total = result.totalElements
    },
    /**
     * @author: wangHongFei
     * @description: 页面编辑
     */
    editInformation(data) {
      console.debug('===========================')
      if (data.plant) {
        // 根据uuid查询报价信息
        this.ruleForm = _.clone(data)
        this.widthPrice = JSON.parse(data.widthPrice)
        this.thicknessPrice = JSON.parse(data.thicknessPrice)
        this.edit = true
      } else {
        console.debug('===========================')
        this.ruleForm = {}
        this.edit = true
        this.ruleForm.plant = this.manufacturer
        this.ruleForm.type = this.model
        this.widthPrice = []
        this.thicknessPrice = []
      }
      this.dialogVisibleMessage = true
    },
    /**
     * @author: wangHongFei
     * @description: 确认输入信息
     */
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.saveInformation()
        } else {
          this.$message({
            message: '请检查输入信息',
            type: 'error'
          })
          return false
        }
      })
    },
    /**
     * @author: wangHongFei
     * @description: 添加编辑报价
     */
    async saveInformation() {
      var widthPrice = []
      this.widthPrice.map(function(item) {
        if (item.max || item.min) {
          if (!item.min) {
            item.min = -100
          }
          if (!item.max) {
            item.min = -100
          }
          widthPrice.push(item)
        }
      })
      var thicknessPrice = []
      this.thicknessPrice.map(function(item) {
        if (item.max || item.min) {
          if (!item.min) {
            item.min = -100
          }
          if (!item.max) {
            item.min = -100
          }
          thicknessPrice.push(item)
        }
      })
      this.ruleForm['widthPrice'] = JSON.stringify(widthPrice)
      this.ruleForm['thicknessPrice'] = JSON.stringify(thicknessPrice)
      this.ruleForm.date = Moment().valueOf()
      this.ruleForm.user = this.$store.state.user.userName
      var info = await $post(SAVE_MATERIAL_INFO, this.ruleForm)
      this.dialogVisibleMessage = false
      if (!this.ruleForm.id) {
        this.findAllInformation()
        return
      }
      var result = JSON.parse(info)
      console.debug('添加编辑报价：', result)
    },
    /**
     * @author: wangHongFei
     * @description: 切换每页显示的数量
     */
    handleSizeChange(val) {
      this.pageSize = val
      this.findAllInformation()
    },
    /**
     * @author: wangHongFei
     * @description: 切换页码
     */
    handleCurrentChange(val) {
      this.currentPage = val
      this.findAllInformation()
      console.log(`当前页: ${val}`)
    },
    /**
     * @author: wangHongFei
     * @description: 搜索
     */
    searchStart() {
      this.currentPage = 1
      this.findAllInformation()
    }
  }
}
</script>
<style>
.el-table .quotationTable {
  padding-bottom: 20px;
}
.input-success .el-input__inner,
.input-success .el-input__inner:focus {
  border-color: #67c23a;
}
.input-error .el-input__inner,
.input-error .el-input__inner:focus {
  border-color: #f56c6c;
}
</style>
<style scoped>
.input-with-select .el-select {
  width: 130px;
}
.input-with-select .el-input {
  width: 100px;
}
.el-zoom-in-top-enter-active,
.el-zoom-in-top-leave-active {
  opacity: 1;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transform-origin: center top;
  transform-origin: center top;
}
.el-zoom-in-top-enter,
.el-zoom-in-top-leave-active {
  opacity: 0;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
}
</style>
