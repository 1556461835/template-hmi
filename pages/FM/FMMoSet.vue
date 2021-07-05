<!--
 * @Author: Li ChunXiu
 * @Date: 2021-04-21 16:40:14
 * @LastEditTime: 2021-06-17 17:58:13
 * @LastEditors: Please set LastEditors
 * @Description: 精轧模型设定
 * @FilePath: \hmi\pages\FM\FMMOSet.vue
-->
<template>
  <div>
    <div class="layout-main margin-bottom-8 padding16 ">
      <div class="flex layout-webkitScrollbar">
        <!-- 当前轧制信息 -->
        <div class="margin-right-24">
          <p class="text-height text-md color-block text-weight7 margin-bottom-8">
            当前轧制信息
          </p>
          <div class="solid bg-gray nowRollInfo margin-bottom-8">
            <div class="text-sm text-weight4 inThickness">
              入口厚度<span class="color-blue padding-lr-16">100mm</span>
            </div>
            <!-- 模型图 -->
            <div class="FMAnimate">
              <div class="FM-item" data-info="F1">
                <div class="bigCircle"></div>
                <div class="smallCircle"></div>
                <div class="smallCircle">
                  <div style="margin-top: 8px"></div>
                </div>
                <div class="bigCircle"></div>
              </div>
              <div class="FM-item" data-info="F2">
                <div class="bigCircle"></div>
                <div class="smallCircle"></div>
                <div class="smallCircle">
                  <div style="margin-top: 8px"></div>
                </div>
                <div class="bigCircle"></div>
              </div>
              <div class="FM-item" data-info="F3">
                <div class="bigCircle"></div>
                <div class="smallCircle"></div>
                <div class="smallCircle">
                  <div style="margin-top: 8px"></div>
                </div>
                <div class="bigCircle"></div>
              </div>
              <div class="FM-item" data-info="F4">
                <div class="bigCircle"></div>
                <div class="smallCircle"></div>
                <div class="smallCircle">
                  <div style="margin-top: 8px"></div>
                </div>
                <div class="bigCircle"></div>
              </div>
              <div class="FM-item" data-info="F5">
                <div class="bigCircle"></div>
                <div class="smallCircle"></div>
                <div class="smallCircle">
                  <div style="margin-top: 8px"></div>
                </div>
                <div class="bigCircle"></div>
              </div>
              <div class="FM-item" data-info="F6">
                <div class="bigCircle"></div>
                <div class="smallCircle"></div>
                <div class="smallCircle">
                  <div style="margin-top: 8px"></div>
                </div>
                <div class="bigCircle"></div>
              </div>
              <div class="FM-item" data-info="F7">
                <div class="bigCircle"></div>
                <div class="smallCircle"></div>
                <div class="smallCircle">
                  <div style="margin-top: 8px"></div>
                </div>
                <div class="bigCircle"></div>
              </div>
            </div>
            <!-- 钢卷号信息 -->
            <div class="rollInfo">
              钢卷号 <span class="color-blue margin-right-15">1551460320010</span> 板坯号 <span class="color-blue margin-right-15">1551460320010</span> 材质 <span class="color-blue">345</span>
            </div>
            <div class="text-sm text-weight4 outThickness">
              <p>出口厚度<span class="color-blue padding-lr-16">100mm</span></p>
              <p>出口温度<span class="color-blue padding-lr-16">100℃</span></p>
            </div>
          </div>
        </div>
        
        <div class="flex flex-direction">
          <!-- 板坯信息 -->
          <div class="flex margin-bottom-24">
            <div>
              <p class="text-height text-md color-block text-weight7 margin-bottom-8" >
                板坯信息
              </p>
              <el-form :model="formLabelAlign" label-width="74px" class="layout-form">
                <el-form-item label="厚度(mm)" class="margin-bottom-4">
                  <el-input
                    v-model="formLabelAlign.name"
                    type="number"
                  ></el-input>
                </el-form-item>
                <el-form-item label="宽度(mm)" class="margin-bottom-4">
                  <el-input
                    v-model="formLabelAlign.name"
                    type="number"
                  ></el-input>
                </el-form-item>
                <el-form-item label="长度(mm)" class="margin-bottom-4">
                  <el-input
                    v-model="formLabelAlign.name"
                    type="number"
                  ></el-input>
                </el-form-item>
                <el-form-item label="加热炉号" class="margin-bottom-4">
                  <el-input
                    v-model="formLabelAlign.name"
                    type="number"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
            <!-- 中间坯信息 -->
            <div style="margin: 0 24px">
              <p
                class="text-height text-md color-block text-weight7 margin-bottom-8">
                中间坯信息
              </p>
              <el-form :model="formLabelAlign" class="layout-form">
                <div class="flex">
                  <el-form-item
                    label="厚度(mm)  目标值"
                    class="margin-bottom-4 margin-right-16"
                    label-width="120px"
                  >
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item
                    label="计算值"
                    class="margin-bottom-4"
                    label-width="50px"
                  >
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-form-item
                    label="宽度(mm)  目标值"
                    class="margin-bottom-4 margin-right-16"
                    label-width="120px"
                  >
                    <el-input
                      v-model="formLabelAlign.region"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item
                    label="计算值"
                    class="margin-bottom-4"
                    label-width="50px"
                  >
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-form-item
                    label="长度  (m)   目标值"
                    class="margin-bottom-4 margin-right-16"
                    label-width="120px"
                  >
                    <el-input
                      v-model="formLabelAlign.type"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item
                    label="计算值"
                    class="margin-bottom-4"
                    label-width="50px"
                  >
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-form-item
                    label="温度  (℃)  目标值"
                    label-width="120px"
                    class="margin-right-16 margin-bottom-4"
                  >
                    <el-input
                      v-model="formLabelAlign.temp"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item
                    label="计算值"
                    class="margin-bottom-4"
                    label-width="50px"
                  >
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>
            <!-- 成品信息 -->
            <div>
              <p class="text-height text-md color-block text-weight7 margin-bottom-8">
                成品信息
              </p>
              <el-form :model="formLabelAlign" class="layout-form">
                <div class="flex">
                  <el-form-item
                    label="厚度(mm)"
                    class="margin-bottom-4 margin-right-8"
                    label-width="74px">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 margin-right-16 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item
                    label="终轧温度(℃)"
                    class="margin-bottom-4 margin-right-8"
                    label-width="88px">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-form-item
                    label="宽度(mm)"
                    class="margin-bottom-4 margin-right-8"
                    label-width="74px" >
                    <el-input
                      v-model="formLabelAlign.region"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 margin-right-16 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item
                    label="层冷温度(℃)"
                    class="margin-bottom-4 margin-right-8"
                    label-width="88px" >
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-form-item
                    label="凸度 (um)"
                    class="margin-bottom-4 margin-right-8"
                    label-width="74px" >
                    <el-input
                      v-model="formLabelAlign.type"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 margin-right-16 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item
                    label="平直度(iu)"
                    class="margin-bottom-4 margin-right-8"
                    label-width="88px">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-checkbox v-model="checked">紧急改规格</el-checkbox>
                </div>
              </el-form>
            </div>
          </div>

          <div class="flex">
            <!-- 其他信息 -->
            <div class="margin-right-24">
              <p class="text-height text-md color-block text-weight7 margin-bottom-8">其他信息</p>
              <el-form :model="formLabelAlign" class="layout-form">
                <div class="flex">
                  <el-form-item
                    label="设定结果"
                    class="margin-bottom-4 margin-right-8"
                    label-width="64px">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item
                    class="margin-bottom-4">
                    <el-input
                    :disabled="true"
                      type="number"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-form-item
                    label="入口除磷"
                    class="margin-bottom-4 margin-right-8"
                    label-width="64px">
                    <el-input
                      v-model="formLabelAlign.region"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item
                    class="margin-bottom-4 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-form-item
                    label="出口除磷"
                    class="margin-bottom-4 margin-right-8"
                    label-width="64px">
                    <el-input
                      v-model="formLabelAlign.type"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item
                    class="margin-bottom-4 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-checkbox v-model="checked1">厚头功能</el-checkbox>
                </div>
              </el-form>
            </div>
            <!-- 速度信息 -->
            <div>
              <p class="text-height text-md color-block text-weight7 margin-bottom-8">速度信息</p>
              <el-form :model="formLabelAlign" class="layout-form">
                <div class="flex">
                  <el-form-item
                    label="穿带速度(mps)"
                    class="margin-bottom-4 margin-right-8"
                    label-width="104px">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 margin-right-16 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item
                    label="一加度   (mps)"
                    class="margin-bottom-4 margin-right-8"
                     label-width="120px">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-form-item
                    label="抛钢速度(mps)"
                    class="margin-bottom-4 margin-right-8"
                    label-width="104px">
                    <el-input
                      v-model="formLabelAlign.region"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 margin-right-16 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item
                    class="margin-bottom-4 margin-right-8" label="二加度   (mps)" label-width="120px">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-form-item
                    label="最大速度(mps)"
                    class="margin-bottom-4 margin-right-8"
                    label-width="104px">
                    <el-input
                      v-model="formLabelAlign.type"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item class="margin-bottom-4 margin-right-16 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                  <el-form-item
                    class="margin-bottom-4 margin-right-8" label="加速度投用(mps)" label-width="120px">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item
                    class="margin-bottom-4 allow-input">
                    <el-input
                      v-model="formLabelAlign.name"
                      type="number"></el-input>
                  </el-form-item>
                </div>
                <div class="flex">
                  <el-checkbox v-model="checked1">调整</el-checkbox>
                  <el-checkbox v-model="checked1">调水</el-checkbox>
                </div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 表格数据 -->
    <div class="layout-main padding16">
      <p class="text-height text-md color-block text-weight7 margin-bottom-8">模型参数</p>
      <div class="layout-webkitScrollbar">
      <table class="L-table margin-bottom-8">
         <colgroup>
          <col name="col1" width="192">
          <col name="col2" width="192">
          <col name="col3" width="192">
          <col name="col4" width="192">
          <col name="col5" width="192">
          <col name="col6" width="192">
          <col name="col7" width="192">
          <col name="col8" width="192">
        </colgroup>
        <thead>
          <tr>
            <th>参数名称</th>
            <th>F1</th>
            <th>F2</th>
            <th>F3</th>
            <th>F4</th>
            <th>F5</th>
            <th>F6</th>
            <th>F7</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div>机架间冷却模式(-)</div></td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
          </tr>
          <tr>
            <td>机架间冷却流量(%)</td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </td>
          </tr>
          <tr>
            <td>负荷分配模式(-)</td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class="margin-right-15"></el-input>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
          </tr>
          <tr>
            <td>负荷分配系数(%)</td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
          </tr>
          <tr>
            <td>活套张力(N/mm2)</td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
          </tr>
          <tr>
            <td>弯辊力(t)</td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
               <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
               <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
               <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
               <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
               <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
               <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
          </tr>
          <tr>
            <td>窜辊量(mm)</td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
          </tr>
          <tr>
            <td>轧制力/扭矩(t)</td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
          </tr>
          <tr>
            <td>轧机辊缝(mm)</td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
          </tr>
          <tr>
            <td>轧机速度(m/s)</td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
          </tr>
          <tr>
            <td>弯辊力/窜辊量(kn)(mm)</td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
          </tr>
          <tr>
            <td>凸度/平直度(um)(iu)</td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
            <td>
              <div class="flex position-Line">
                <el-input v-model="input" disabled placeholder="请输入内容" class=" margin-right-15"></el-input>
                <div class="position-Line-width"></div>
                <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
              </div>
            </td>
          </tr>
          <tr>
            <td>入口温度(℃)</td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
          </tr>
          <tr>
            <td>入口厚度(mm)</td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
          </tr>
          <tr>
            <td>压下率(%)</td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
            <td>
              <el-input v-model="input" disabled placeholder="请输入内容" class=""></el-input>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="btns">
        <el-button size="mini" type="primary">计算</el-button>
        <el-button size="mini" type="primary">保存</el-button>
        <el-button size="mini" type="danger">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getHmiData, sendMsg, setTags } from '@/lib/GetData'

export default {
  data() {
    return {
      formLabelAlign: {},
      checked: '', // 紧急改规格按钮
      checked1: '', // 厚头功能
      input: '冷却模式',
      options: [
        {
          value: '1',
          label: '冷却模式'
        }
      ],
      value: '1',
      baseInfo: {}
    }
  },
  mounted() {
    // getHmiData(
    //   'FM/FMMoSet',
    //   (data) => {
    //     console.log('==RECCurRollData_F1==', data)
    //   },
    //   (err) => {
    //     console.log(err)
    //   },
    //   3000
    // )
  }
}
</script>

<style lang="scss">
.nowRollInfo {
  width: 519px;
  height: 300px;
  border-radius: 5px;
  position: relative;
  .inThickness {
    position: absolute;
    top: 10%;
    left: 5%;
  }
  .outThickness {
    position: absolute;
    top: 10%;
    right: 3%;
  }
  .FMAnimate {
    position: absolute;
    width: 100%;
    display: flex;
    left: 15%;
    top: 45%;
    .FM-item {
      width: 10%;
      .bigCircle {
        width: 30px;
        height: 30px;
        background: #aeaeae;
        border-radius: 50%;
        margin: 0 auto;
      }
      .smallCircle {
        width: 15px;
        height: 15px;
        background: #aeaeae;
        border-radius: 50%;
        margin: 0 auto;
      }
    }
  }
  .rollInfo {
    position: absolute;
    font-size: 14px;
    font-weight: 400;
    font-family: PingFang SC, Ping;
    width: 100%;
    bottom: 10%;
    text-align: center;
  }
}
.position-Line {
  position: relative;
  .position-Line-width {
    position: absolute;
    width: 1px;
    height: 16px;
    top: 4px;
    transform: rotateZ(20deg);
    background-color: rgba(0, 0, 0, 0.75);
    left: 50%;
  }
}
.btns {
  text-align: center;
}
</style>
