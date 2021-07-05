<!--
 * @Author: your name
 * @Date: 2021-05-27 09:47:06
 * @LastEditTime: 2021-06-15 09:52:59
 * @LastEditors: Please set LastEditors
 * @Description: 切换与跟踪
 * @FilePath: \hmi\pages\netServer\change.vue
-->
<template>
  <div>
    <div class="layout-webkitScrollbar padding16 layout-main margin-bottom-16 netGateways">
        <div class="services"></div>
        <!-- 网关服务器 -->
        <div class="gatewayServers">
            <p>网关服务器</p>
            <div class="flex gateways bg-gray">
                <div>
                    <p>All</p>
                    <div class="margin-bottom-8"><el-button size="mini">All to PCS</el-button></div>
                    <div><el-button size="mini">All to MAS</el-button></div>
                </div>
                <div>
                    <p>Track</p>
                    <div class="margin-bottom-8"><el-button size="mini">To PCS</el-button></div>
                    <div><el-button size="mini">To MAS</el-button></div>
                </div>
                <div>
                    <p>FM</p>
                    <div class="margin-bottom-8"><el-button size="mini">To PCS</el-button></div>
                    <div><el-button size="mini">To MAS</el-button></div>
                </div>
                <div>
                    <p>CS</p>
                    <div class="margin-bottom-8"><el-button size="mini">To PCS</el-button></div>
                    <div><el-button size="mini">To MAS</el-button></div>
                </div>
                <div>
                    <p>CYC</p>
                    <div class="margin-bottom-8"><el-button size="mini">To PCS</el-button></div>
                    <div><el-button size="mini">To MAS</el-button></div>
                </div>
            </div>
            <div class="flex justify-between">
                <div>
                    <p class="bg-green margin-bottom-8" style="padding: 0 4px">Track msg in Channal MAS</p>
                    <p class="bg-green" style="padding: 0 4px">FM msg in Channal MAS</p>
                </div>
                <div>
                    <p>网关</p>
                    <p>服务器</p>
                </div>
                <div>
                    <p class="bg-green margin-bottom-8" style="padding: 0 4px">CS msg in Channal MAS</p>
                    <p class="bg-green" style="padding: 0 4px">CYC msg in Channal MAS</p>
                </div>
            </div>
        </div>
        <div class="netPoint flex align-center">
            <div class="arrows"></div>
            <div class="arrowsLine"></div>
        </div>
        <div class="netPoint1 flex align-center">
            <div class="arrows"></div>
            <div class="arrowsLine"></div>
        </div>
        <div class="right-server bg-gray padding16">
            <div>
                <p class="text-md text-weight4">PCS</p>
                <div class="flex">
                    <div>
                        <p class="bg-green margin-bottom-8">Track</p>
                        <p class="bg-green margin-bottom-8">FM</p>
                        <p class="bg-green margin-bottom-8">CS</p>
                        <p class="bg-green margin-bottom-8">CYC</p>
                    </div>
                    <div>
                        <i class="iconfont icon-zhuji1" style="font-size: 60px"></i>
                        <span class="text-xs">PCS</span>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-md text-weight4">MAS</p>
                <div class="flex">
                    <div>
                        <p class="bg-green margin-bottom-8">Track</p>
                        <p class="bg-green margin-bottom-8">FM</p>
                        <p class="bg-green margin-bottom-8">CS</p>
                        <p class="bg-green margin-bottom-8">CYC</p>
                    </div>
                    <div>
                        <i class="iconfont icon-zhuji1" style="font-size: 60px"></i>
                        <span class="text-xs">PCS</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="layout-webkitScrollbar padding16 layout-main">
        <!-- 动画效果 -->
        <div class="solid bg-gray netRollLine">
            <!-- 轧线轨道 -->
            <div class="line" />
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
            <div class="hot"></div>
            <div class="hot-monitor"><div class="red-flag"></div></div>
            <div class="hot-monitor1"><div class="red-flag"></div></div>
            <div class="hot-monitor2"><div class="red-flag"></div></div>
        </div>
        <el-row :gutter="20">
            <!-- MTR电文 -->
            <el-col :span="8">
                <el-form :model="formData" label-position="top">
                    <div class="flex" >
                        <div style="margin-right: 20px">
                            <el-form-item label="MTR1000电文">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="MTR1042电文">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="MTR1010电文">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="MTR1050电文">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="MTR1041电文">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="MTR1004电文">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </el-form>
            </el-col>
            <!-- 跟踪点 -->
            <el-col :span="16">
                <el-form :model="formData" label-position="top">
                    <div class="flex change-points" >
                        <div>
                            <el-form-item label="跟踪点1#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="跟踪点11#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="跟踪点2#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="跟踪点12#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="跟踪点3#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="跟踪点13#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="跟踪点4#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="跟踪点14#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="跟踪点5#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="跟踪点15#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="跟踪点6#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="跟踪点16#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="跟踪点7#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="跟踪点17#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="跟踪点8#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="跟踪点18#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="跟踪点9#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="跟踪点19#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="跟踪点10#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="跟踪点20#">
                                <el-input v-model="formData.name" disabled></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </el-form>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.change-points > div {
  margin-right: 10px;
}
.netGateways {
  position: relative;
  height: 350px;
  .services {
    background-image: url(./assets/img/machineRoom.png);
    width: 200px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    left: 19%;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .gatewayServers {
    text-align: center;
    position: absolute;
    left: 40%;
    top: 0;
    bottom: 0;
    height: 180px;
    margin: auto;
    .gateways {
      padding: 10px 20px;
      div {
        margin-right: 4px;
      }
    }
  }
  .right-server {
    padding: 10px;
    text-align: center;
    position: absolute;
    left: 80%;
    top: 0;
    bottom: 0;
    height: 295px;
    margin: auto;
  }
  .netPoint {
    position: absolute;
    left: 68%;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 16px;
    width: 12%;
  }
  .netPoint1 {
    position: absolute;
    left: 31%;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 16px;
    width: 9%;
  }
  .arrows {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 16px solid #009999;
    border-bottom: 8px solid transparent;
  }
  .arrowsLine {
    width: 100%;
    height: 8px;
    background-color: #009999;
  }
}

.netRollLine {
  height: 300px;
  border-radius: 5px;
  position: relative;
  .line {
    height: 10px;
    width: 80%;
    position: absolute;
    left: 10%;
    top: 60%;
    background-color: #b1b1b1;
    z-index: 10;
  }
  .FMAnimate {
    position: absolute;
    display: flex;
    left: 32%;
    top: 45%;
    .FM-item {
      width: 30px;
      margin-right: 10px;
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
  .hot {
    height: 60px;
    width: 60px;
    position: absolute;
    left: 10%;
    top: 50%;
    background-color: #7a7a7a;
  }
  .hot-monitor {
    position: absolute;
    left: 15%;
    top: 50%;
    border: 1px solid #7a7a7a;
    padding: 2px;
  }
  .hot-monitor1 {
    position: absolute;
    left: 52%;
    top: 50%;
    border: 1px solid #7a7a7a;
    padding: 2px;
  }
  .hot-monitor2 {
    position: absolute;
    left: 85%;
    top: 50%;
    border: 1px solid #7a7a7a;
    padding: 2px;
  }
  .red-flag {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 20px solid;
    border-top-color: red;
  }
}
</style>
