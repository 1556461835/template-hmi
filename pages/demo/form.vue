<!--
 * @Author: Zhang ShiWei
 * @Date:
 * @LastEditTime: 2021/4/22 10:38
 * @LastEditors: Zhang ShiWei
 * @Description:
 * @FilePath: form
 * @FileName: form.vue
-->
<template>
  <div class="xw_main">
    ///
    <el-row>
      <el-col :span="24">
        展示数据
        <div>
          {{dataInfo}}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Form',
  components: {},
  data() {
    return {
      dataInfo: {
        grade: 'aaa', //普通输入框、下拉框
        selectMultiple: [], //下拉框多选
        checkBoxData: [
          {
            value: 'test2',
            label: '测试2'
          }
        ], // 复选框
        radioTest: 'test2' //单选框
      } //form绑定基本信息
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    query() {
      console.log(this.dataInfo)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
