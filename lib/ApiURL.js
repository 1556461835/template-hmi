export const GET_PUBLIC_KEY = '/user/getPublicKey.form' // 获取公钥接口

export const LOGIN_URL = '/user/login.form' // 登录接口

export const GET_USER_MENUS = '/resource/getResources.form' // 获取用户URL资源

export const GET_ALL_MENUS = '/resource/findAllResources.form' // 获取所有URL资源

export const GET_ALL_ROLES = '/resource/findAllRoles.form' // 获取所有角色信息

export const ADD_RESOURCE = '/resource/addResource.form' // 增加或更新resource

export const DEL_RESOURCE = '/resource/deleteResources.form' // 删除资源信息

export const GET_CURRENT_AND_ALL_ROLE = '/resource/findCurrentAndAllRole.form' // 用户管理 获取单个用户的分配的权限

export const GET_USER_DEPT_EQUIPMENTS =
  '/equipment/findUserDepartmentEquipments.form' // 获取用户部门下所有设备列表

export const GET_EQUIPMENT_CONFIGS = '/equipment/findDataConfigs.form' // 获取设备的配置信息

export const GET_STATISTIC_PRODUCT_RECORD =
  '/record/findStatisticProductRecord.form' // 获取当班， 当日， 当月和当年的产量信息

export const GET_SUM_DATA = '/record/findSumData.form' // 获取统计数据

export const GET_ALL_WORKSHIFT_RECORD = '/record/findAllWorkShiftRecord.form' // 获取班次的生产信息

export const GET_MONTH_RECORD = '/record/findMonthRecord.form' // 获取生产月报信息

export const GET_ALL_USER = '/user/findAll.form' // 获取所有用户

export const USER_NAME_CHECK = '/user/userNameCheck.form' // 判断用户名是否重复

export const UPDATE_USER_OPER_RIGHT = '/user/updateUserOperRight.form' // 更改分配的权限

export const GET_ALL_POSITION = '/department/findPositions.form' // 获取岗位管理

export const GET_POSITION_BY_ID = '/department/findPositionById.form' // 根据ID查询岗位信息

export const GET_DEVICE_FILE_BY_EQUIPMENT_UUIDS =
  '/equipment/findDeviceFileByEquipmentUUIDs.form' // 设备档案信息

export const GET_SUBSYSTEM_BY_EQIP_UUID =
  '/equipment/findSubSystemByEquipUUID.form' // 根据设备的uuid查找该设备下的所有子系统

export const ADD_SUB_SYSTEM = '/equipment/saveSubSystem.form' // 添加系统

export const DELETE_SUB_SYSTEM = '/equipment/deleteSubSystem.form' // 删除系统

export const GET_SUB_SYSTEM_ID_AND_TEXT =
  '/equipment/findDeviceBySubSystemIdAndText.form' // 子系统在线设备查询 描述模糊查询

export const GET_BY_DEPT_UUID = '/sparePart/findByDeptUUID.form' // 备品备件管理查询

export const GET_DEVICE = '/sparePart/findDevice.form' // 已出库设备管理

export const ADD_POSITION = '/department/addPosition.form' // 修改岗位

export const DELETE_POSITIONS = '/department/deletePositions.form' // 删除岗位

export const ADD_SPARE_PART = '/sparePart/add.form' // 备品备件管理增加

export const ADD_DEVICE = '/sparePart/addDevice.form' // 备品备件管理增加

export const DELETE_SPARE_PART = '/sparePart/delete.form' // 备品备件管理删除

export const CHANGE_DEVICE_STATUS = '/sparePart/changeDeviceStatus.form' // 改变备件状态

export const IN_OUT_STORE = '/sparePart/inOutStore.form' // 备品备件出库入库

export const GET_SPARE_PART_BY_CODE = '/sparePart/findSparePartByCode.form' // 根据备件的编码查询备件信息 code 备品备件

export const GET_DEVICE_BY_ID = '/sparePart/findDeviceById.form' // 根据备件的编码查询备件信息 id 设备

export const GET_SPARE_PART_MSG = '/message/findSparePartMsg.form' // 备件记录

export const DELETE_DEVICE = '/sparePart/deleteDevice.form' // 删除备件设备

export const GET_STATUS_RECORD_INFO = '/equipment/findStatusRecordInfo.form' // 生产实时数据 左侧菜单名称

export const GET_ALL_VENDERS = '/department/findAllVenders.form' // 查找所有vender

export const GET_VENDER_BY_UUID = '/department/findVenderByUUID.form' // 根据UUID查找Vender详细信息

export const ADD_VENDER = '/department/saveVender.form' // 保存或更新vender

export const DELETE_VENDERS = '/department/deleteVenders.form' // 根据vender 的 id集合删除 vender

export const GET_ROLES_BY_ID = '/resource/findRoleById.form' // 根据Role的id 获取Role的详细信息

export const DELETE_ROLES = '/resource/deleteRoles.form' // 根据Role的 ID结合，批量删除 Role

export const ADD_ROLE = '/resource/saveRole.form' // 添加Role

export const ADD_RESOURCES_TO_VENDER = '/resource/addResourcesToVender.form' // 更新vender 的 resources 属性

export const GET_ALL_DEPARTMENT = '/department/findAll.form' // 获取 生产厂商信息管理 左边菜单

export const GET_DEPARTMENT_BY_ID = '/department/findById.form' // 点击菜单获取 department信息 根据部门的ID查找部门的详细信息

export const ADD_DEPARTMENT = '/department/save.form' // 生产厂商信息 保存

export const DELETE_DEPARTEMNET = '/department/deleteById.form' // 生产厂商信息删除

export const GET_VENDER_ADDITIONAL_INFO_BY_UUID =
  '/department/findVenderAdditionalInfoByUUID.form' // 根据venderid 获取url资源

export const GET_USER_BY_DEPARTMENT_UUID = '/user/findUserByDepartmentUUID.form' // 根据uuid 查询部门的人员

export const DELETE_USER = '/user/delete.form' // 删除用户接口

export const ADD_USER = '/user/save.form' // 添加用户

export const GET_USER_BY_UUID = '/user/findByUUID.form' // 根据ID查询用户信息

export const GET_VENDER_USERS = '/user/findVenderUsers.form' // 查找设备厂商的员工

export const MODIFY_USER_DEPARTMENT = '/user/modifyUserDepartment.form' // 获取设备厂商平台 客户信息管理  根据部门id和成员id 移除成员

export const GET_BY_NAME = '/user/findByName.form' // 获取设备厂商平台 客户信息管理 查找成员

export const GET_RESOURCES_BY_VENDERID =
  '/resource/findResourcesByVenderId.form' // 根据venderid 更新url资源

export const GET_POSITION_BY_USER_ID = '/department/findPositionsByUserId.form' // 根据id获取设备厂商平台 客户信息管理的下拉部门

export const GET_RESOURCES_BY_DEPT_ID = '/resource/findResourcesByDeptId.form' // 获取设备厂商平台 客户信息管理的url资源

export const ADD_VENDER_DEPARTMENT = '/department/addDepartment.form' // 设备厂商平台 保存部门

export const GET_USER_VENDERS_DEPARTMENTS =
  '/department/findUserVendersDepartments.form' // 设备厂商平台 根据id更新树形部门

export const ADD_TO_VENDER = '/department/addToVender.form' // 获取设备厂商平台 客户信息管理 为生产商新建部门或者公司

export const GET_RESOURCES_BY_DEPT_UUID =
  '/resource/findResourcesByDeptUUID.form' // 查找vender的资源列表

export const ADD_RESOURCES_TO_DEPARTMENT =
  '/resource/addResourcesToDepartment.form' // 保存选中的vender的资源列表

export const GET_RESOURCES_BY_VENDER_UUID =
  '/resource/findResourcesByVenderUUID.form' // 根据vender的uuid 获取设备厂商url资源 弹出的树型结构

export const GET_ALARM_INFO_STATISIC = '/record/findAlarmInfoStatistic.form' //  查询预警信息

export const GET_BY_DEPARTMENT_UUID = '/equipment/findByDepartmentUUID.form' // 设备厂商平台 项目管理 获取右边资源

export const GET_BY_UUID = '/equipment/findByUUID.form' //  设备厂商平台 项目管理 => 基本信息 数据配置 预警规则制定 （注：目前只用于基本信息取数据）

export const GET_DATA_CONFIGS = '/equipment/findDataConfigs.form' // 查询equipment的配置数据

export const ADD_DATA_CONFIG = '/equipment/saveDataConfig.form' // 保存或更新 equipment的配置参数

export const ADD_DATA_CONFIGS = '/equipment/saveDataConfigs.form' // 批量保存或更新 equipment的配置参数

export const DELETE_DATA_CONFIGS = '/equipment/deleteDataConfig.form' // 删除单条配置记录

export const GET_DATA_CONFIG = '/equipment/findDataConfig.form' // 根据配置信息ID查询单个

export const MODIFY_DATA = '/equipment/modifyData.form' //  设备厂商平台 项目管理 班次的增加修改

// 预警规则

export const GET_WARN_INFO_ITEMS = '/equipment/findWarnInfoItems.form' // 查询equipment的配置数据

export const GET_WARN_INFO_ITEM = '/equipment/findWarnInfoItem.form' // 查询equipment的配置数据

export const ADD_WARN_INFO_ITEM = '/equipment/saveWarnInfoItem.form' // 保存或更新 equipment的配置参数

export const ADD_WARN_INFO_ITEMS = '/equipment/saveWarnInfoItems.form' // 保存或更新 equipment的配置参数

export const DELETE_WARN_INFO_ITEM = '/equipment/deleteWarnInfoItem.form' //  删除单条配置记录

export const GET_DATA_CONFIG_BY_TYPE = '/equipment/findDataConfigByType.form' //  根据type 查询DataConfig
// 数据字控制

export const GET_CONTROL_WORDS = '/equipment/findControlWords.form' // 查询所有控制字

export const GET_CONTROL_WORD = '/equipment/findControlWord.form' // 根据uuid查询控制字

export const ADD_CONTROL_WORD = '/equipment/saveControlWord.form' // 保存或更新控制字

export const ADD_CONTROL_WORDS = '/equipment/saveControlWords.form' // 保存或更新所有控制字

export const DELETE_CONTROL_WORD = '/equipment/deleteControlWord.form' //  删除控制字

export const GET_TASILY_FILE = '/resource/getTasilyFile.form' // 根据设备id, 和文件类型查询上传文

export const DELETE_TASILY_FILE = '/file/deleteTasilyFile.file' // 删除上传文件

export const SAVE_EQUIPMENT = '/equipment/save.form' // 添加设备

export const GET_TECH_HELPER_USERS = '/user/getTechHelperUsers.form' // 获取好友IM列表

// 工业流程图

export const EQUIPMNET_SAVE_GRAPHICS = '/equipment/saveGraphics.form' // 保存工业流程图

export const EQUIPMNET_FIND_GRAPHICS_BY_EQUIP_UUID =
  '/equipment/findGraphicsByEquipUUID.form' // 获取工业流程图

export const EQUIPMNET_DELETE_GRAPHICS_BY_ID =
  '/equipment/deleteGraphicsById.form' // 删除工业流程图

export const GET_GRAPHIC_ITEMS = '/equipment/findGraphicItems.form' // 获取设备图标

export const EQUIPMNET_SEND_COMMANDS = '/equipment/sendCommands.form' // 发送命令

export const GET_USER_DEPARTMENTS = '/department/findUserDepartments.form' // 获取部门及其子部门列表

// 点检

export const GET_ITEMS_BY_DEPT_ID = '/spotInspection/findItemsByDeptId.form' // 根据用户部门id 查询该部门的所有点检项目

export const GET_INSPECTIONS_BY_DEPT_ID_AND_DATA_RANGE =
  '/spotInspection/findInspectionsByDeptIdAndDateRange.form' // 根据用户部门id 查询该部门的所有点检内容

export const SAVE_ITEM = '/spotInspection/saveItem.form' // 添加点检项目

export const DELETE_ITEM = '/spotInspection/deleteItems.form' // 删除点检项目

export const GET_INSPECTION_STATISTIC_BY_DEPTID =
  '/spotInspection/findInspectionStatisticByDeptId.form' // 统计点检项目

export const GET_WARN_INFO_STATISTIC_BY_EQUIPID_AND_DATE =
  '/equipment/findWarnInfoStatisticByEquipIdAndDate.form' // 查询部门当月报警统计信息

export const PUSH_MESSAGE = '/push/sendMessages.file' // 推送消息

// 库存管理

export const SAVE_SPARE_PARTRECORD = '/sparePart/saveSparePartRecord.form' // 提交领用申请

export const FIND_SPARE_PART_RECORD_BY_APPLY_USER_ID =
  '/sparePart/findSparePartRecordsByApplyUserId.form' // 根据申请人的ID查询申请列表

export const FIND_SPARE_PART_PART_PROGRESS_RECORD_BY_RECORLD =
  '/sparePart/findApplyProgressByRecordId.form' // 查询进度详细信息

export const FIND_ALL_SPARE_PART_PART_PROGRESS_RECORD_BY_DEPT_ID =
  '/sparePart/findApproveRecordByDeptId.form' // 待审核列表

export const FIND_ALL_STOREKEEPER =
  '/sparePart/findSparePartRecordByStoreKeeper.form' // 仓库管理员查询

export const SPARE_PART_DISTRIBUTION = '/sparePart/sparePartDistribution.form' // 领用

// 基础数据配置
export const GET_CLIENT_FIND_BASIC_DATA_CONFIGS =
  '/basicDataConfig/findBasicDataConfigs.form' // 查询所有基础数据配置

// 基础数据配置
export const GET_BASIC_DATA_CONFIG_PAGE =
  '/basicDataConfig/findBasicDataConfigPage.form' // 查询所有基础数据配置-分页查询

export const GET_CLIENT_FIND_BASIC_DATA_CONFIG_BY_TYPE =
  '/basicDataConfig/findBasicDataConfigByType.form' // 根据type查询基础配置数据

export const SAVE_CLIENT_SAVE_BASIC_DATA_CONFIG =
  '/basicDataConfig/saveBasicDataConfig.form' // 保存或者修改基础配置数据

export const DELETE_CLIENT_DELETE_BASIC_DATA_CONFIG_BY_TYPE =
  '/basicDataConfig/deleteBasicDataConfigByType.form' // 删除基础配置数据

export const IN_OUT_STORE_MESSAGE = '/message/inOutStoreMessage.form' // 销售生产库存记录查询

export const MESSAGE_DELETE = '/message/delete.form' // 销售生产库存记录删除

export const GET_LAST_APP_IN_FO = '/file/getLastAppInfo.file' // 获取app历史版本-不加密

// 询单管理

// export const FIND_ALL_CUSTOMER_ORDER_INFOS = '/customer/findAllCustomerOrderInfos.form' // 获取所有的客户询单信息（包含已经签订的合同）。

export const SAVE_CUSTOMER_ORDER_INFO = '/customer/saveCustomerOrderInfo.form' // 保存询单客户信息

export const DELETE_CUSTOMER_ORDER_INFO =
  '/customer/deleteCustomerOrderInfos.form' // 删除询单信息

export const FIND_USERFUL_CUSTOMER_ORDER_INFO =
  '/customer/findUsefulCustomerOrderInfos.form' // 获取未过期或作废的客户询单信息（不包含合同）不包含已过期的和已经作废的询单。

export const FIND_USERLESS_CUSTOMER_ORDER_INFO =
  '/customer/findUselessCustomerOrderInfos.form' // 获取过期或作废的客户询单信息（不包含合同）。

export const FIND_CONTRACTS = '/customer/findContracts.form' // 获取合同集合。

export const SAVE_ORDER_INFO_ITEN = '/customer/saveOrderInfoItem.form' // 保存用户需求（询单/合同）详细信息

export const DELETE_ORDER_INFO_ITENS = '/customer/deleteOrderInfoItems.form' // 删除用户需求（询单/合同）详细信息

export const FIND_CUSTOMER_ITENS = '/customer/findCustomerItems.form' // 获取询单客户的详细需求列表。

export const FINISH_REQUIREMENT = '/customer/finishRequirement.form' // 需求整理完成

export const UPDATE_REPORT_PRICE = '/customer/updateReportPrice.form' // 保存修改报价

export const UPDATE_TMP_MATERIAL_PARAM = '/customer/updateTmpMaterialParam.form' // 保存修改纵剪带宽

export const FIND_CUSTING_CUSTOMER_ORDER_INFO =
  '/customer/findCostingCustomerOrderInfos.form' // 查询成本核算信息

export const FINISH_COSTING = '/customer/finishCosting.form' // 成本核算完成

export const FIND_CUSTOMER_ORDER_INFO_BY_ID =
  '/customer/findCustomerOrderInfoById.form' // 根据id查找客户询单信息（或者合同）

export const FIND_ITEM_BY_ID = '/customer/findItemById.form' // 根据id查找用户需求条目

export const DISCAED_CUSTOMER_ORDER_INFO =
  '/customer/discardCustomerOrderInfo.form' // 询单作废处理

export const BACK_TO_REQUIREMENT = '/customer/backToRequirement.form' // 客户需求状态退回需求整理阶段

export const SIGN_CONTRACT = '/customer/signContract.form' // 签订合同

export const AUTO_CALCULATE_COST = '/customer/autoCalculateCost.form' // 自动核算成本

export const CALCULATE_COST = '/customer/calculateCost.form' // 重新核算成本

export const GET_STATISTIC_INFO = '/customer/getStatisticInfo.form' // 计算统计信息

export const SAVE_COST_ORDER = '/customer/saveCostOrder.form' // 保存预算结果

export const FING_RELATION_ORDERS_BY_ID =
  '/customer/findRelationOrdersById.form' // 获取套料订单信息

export const GENERATOR_CUSTOMER_ORDER_INFO_NO =
  '/customer/generatorCustomerOrderInfoNo.form' // 自动生成合同编号

export const FIND_UNPURCHASED_CUSTOMER_ORDER_INFO =
  '/customer/findUnPurchasedCustomerOrderInfo.form' // 获取未采购的需求合同信息

export const FIND_CONTRACT_IN_FO = '/customer/findContractInfo.form' // 获取未采购的需求合同信息

export const ADD_ORODUCTS_TO_ORDER_ITEM_FROM_CONTRACT =
  '/customer/addProductsToOrderItemFromContract.form' // 合同管理界面成品分配功能

// 采购计划

export const FIND_REQUIREMENT_PURCHASING_PLANS =
  '/plan/findRequirementPurchasingPlans.form' // 查询未提交审批的采购计划

export const FIND_AUDITED_PURCHASING_PLANS =
  '/plan/findAuditedPurchasingPlans.form' // 查询已审批的采购计划

export const TO_PURCHASING = '/plan/toPurchasing.form' // 提报采购计划

export const FIND_BUYING_PURCHASING_PLANS =
  '/plan/findBuyingPurchasingPlans.form' // 查询已提报的采购计划

export const FIND_PURCHASING_PLAN_BY_ID = '/plan/findPurchasingPlanById.form' // 根据ID查询采购计划

export const SAVE_PURCHASING_PLAN = '/plan/savePurchasingPlan.form' // 编辑保存采购计划

export const FIND_ITEM_BY_PURCHASING_PLANS_ID =
  '/customer/findItemByPurchasingPlanId.form' // 根据采购订单，查找用户的需求订单。

export const FIND_PURCHASING_PLANS = '/plan/findPurchasingPlans.form' // 查询所有采购计划

export const CREATE_PURCHASE_PLANS = '/plan/createPurchasePlans.form' // 根据合同自动生成采购计划

export const SAVE_PURCHASE_PLANS = '/plan/savePurchasingPlans.form' // 保存采购计划

export const DELETE_PURCHASE_PLANS = '/plan/deletePurchasingPlans.form' // 删除采购计划

export const IN_STORE_FROM_PURCHASING_PLAN =
  '/store/inStoreFromPurchasingPlan.form' // 采购计划入库

export const FIND_PRODUCT_FOR_ORDER_INFO_ITEM =
  '/customer/findProductForOrderInfoItem.form' // 采购计划成品分配查询接口

// 生产计划

export const TMP_PRE_PRODUCTION = '/plan/tmpPreProduction.form' // 先选择卷，在选择客户订单， 查询该卷已分配的订单配额，以及还未分配的配额

export const DISTRIBUTE_PRODUCTION = '/plan/distributePreProduction.form' // 纵剪分配订单

export const DELETE_PRE_PRODUCTION = '/plan/deletePreProduction.form' // 纵剪分配订单

export const FIND_ITEM_PURCHASING_PLAN = '/plan/findItemPurchasingPlan.form' // 获取订单的采购计划

export const PUBLISD_PLAN = '/plan/publishPlan.form' // 发布生产计划

export const MATERIALS_NEXT_PROCESS = '/material/materialsNextProcess.form' // 原料卷下道工序

export const MODIFY_MATERIAL_NEXT_PROCESS =
  '/material/modifyMaterialNextProcess.form' // 修改原料卷工序

export const TMP_MATERIALS_NEXT_PROCESS =
  '/material/tmpMaterialsNextProcess.form' // 纵剪卷下道工序

export const MODIFY_TMP_MATERIAL_NEXT_PROCESS =
  '/material/modifyTmpMaterialNextProcess.form' // 修改纵剪卷工序

export const FIND_UNPLANNERD_MATERIALS = '/material/findUnplannedMaterials.form'
// 查找没有生产计划的原材料卷, 没有生产计划的原料卷是指，没有和客户订单挂钩，以前使用剩下的，或者是其他原因没有消耗掉的卷

export const MOUNT_MATERIALS_TO_PLAN = '/plan/mountMaterialsToPlan.form' // 将原料卷挂入生产计划

export const MATERIALS_BACK_TO_STORE = '/product/materialsBackToStore.form' // 未使用的计划卷入库。

export const FIND_EQUIP_BY_INLET = '/equipment/findEquipByInlet.form' // 根据入口材料信息，查找设备。

export const FIND_CUSTOMER_NAME_AND_USD_STYLE_BY_PLAN_ID =
  '/customer/findCustomerNameAndUseStyleByPlanId.form' // 获取生产计划下采购订单的客户名称和剪裁方式

export const REMOVE_FROM_PRODUCTION_PLAN =
  '/material/removeFromProductionPlan.form' // 移除挂载卷

export const DELETE_PRODUCTION = '/plan/deleteProductionPlan.form' // 删除生产计划

export const SAVE_PRODUCTION_PLAN = '/plan/saveProductionPlan.form' // 修改生产计划接口，不能生成新的生产计划，生成新的生产计划用 createProductionPlan接口

export const FIND_UNPLANNERD_ORDER_INFO_ITENS =
  '/customer/findUnplannedOrderInfoItems.form' // 查找未排生产计划的订单

export const FIND_ITEM_BY_PRODUCTION_PLAN_ID =
  '/customer/findItemByProductionPlanId.form' // 查询生产计划的订单信息。

export const FIND_MATERIALS_BY_PRODUCTION_PLAN_ID =
  '/material/findMaterialsByProductionPlanId.form' // 查询原料卷

export const FIND_TMP_MATERIALS_BY_PRODUCTION_PLAN_ID =
  '/material/findTmpMaterialsByProductionPlanId.form' // 查询纵剪带

export const REMOVE_ITEMS_FROM_PRODUCTION_PLAN =
  '/plan/removeItemsFromProductionPlan.form' // 将已选择的用户订单从生产计划中移除。

export const ADD_ITEMS_TO_PRODUCTION_PLAN =
  '/plan/addItemsToProductionPlan.form' // 将已选择的用户订单添加到生产计划中。

export const CREATE_PRODUCTION_PLAN = '/plan/createProductionPlan.form' // 生成生产计划

export const FIND_UNPLANNERD_fINISHED_PLAN = '/plan/findUnFinishedPlan.form' // 查询未执行完的生产计划，按照计划生产时间和优先级的升序排序。

export const UNIQUENESS_CHECK = '/customer/uniquenessCheck.form' // 唯一性判断接口

export const UNIQUENESS_CHECK_MANY = '/customer/uniquenessCheckMany.form' // 唯一性判断接口批量判断

export const ADJUST_PRIORITY = '/plan/adjustPriority.form' // 调整优先级 OrderInfoItem, 订单， Material 原料卷  TmpMaterial 纵剪卷, ProductionPlan 生产计划

export const ADD_PRODUCTS_TO_OREDRTpITEM_FROM_PRODUCT_PLAN =
  '/customer/addProductsToOrderItemFromProductPlan.form' // 生产计划管理成品分配

// 仓库管理

export const IN_STORTE_CONFIRM = '/material/inStoreConfirm.form' // 库存记录确认

export const FING_IN_STORE = '/store/findInStore.form' // Material 原料卷， TmpMaterial 中间卷 Product 成品 ，传参时注意大小写

export const FING_DISCARD_IN_STORE = '/store/findDiscardInStore.form' // 查询报废

export const OUT_STORE_PRODUCT = '/store/outStoreProduct.form' // 成品出库

export const IN_STORE_PRODUCT = '/store/inStoreProduct.form' // 成品入库

export const OUT_STORE_TMP_MATERIAL = '/store/outStoreTmpMaterial.form' // 中间品入库

export const IN_STORE_TMP_MATERIAL = '/store/inStoretmpMaterial.form' // 中间品入库

export const OUT_STORE_MATERIAL = '/store/outStoreMaterial.form' // 原料卷出库

export const IN_STORE_MATERIAL = '/store/inStoreMaterials.form' // 原料卷入库

export const FIND_MATERIAL_RECORD = '/store/findMaterialRecord.form' // 原料库记录

export const FIND_MATERIAL_OUT_STORE_RECORD =
  '/store/findMaterialOutStoreRecord.form' // 原料库记录

// 纵剪计划接口

export const FING_EXECUTING_MATERIALS_BY_EQUIP_ID =
  '/plan/findExecutingMaterialsByEquipId.form' // 查询计划卷

export const DISCARD = '/material/discard.form' // 纵剪卷报废

export const FIND_HISTORY_BY_EQUIP_ID = '/plan/findHistoryByEquipId.form' // 纵剪带历史生产信息
// export const FIND_ITEM_BY_PRODUCTION_PLAN_ID =
//   '/customer/findItemByProductionPlanId.form' // 根据原料卷的 planId 查找客户订单信息

export const ONLINE_MATERIAL = '/material/onlineMaterial.form' // 选择原料卷 上线 操作

export const FING_ON_LINE = '/plan/findOnLine.form' // 查找正在生产的卷

export const FING_TMP_BY_PARENT_ID = '/material/findTmpByParentId.form' // 查询子卷信息。

export const TMP_NEXT_STATUS = '/material/tmpNextStatus.form' // 中间卷生产完成确认。

// 生产线接口

export const DISCAED_FROM_PRODUCTION = '/material/discardFromProduction.form' // 生产质检废品入库

export const ONLINE_TMP_MATERIAL = '/material/onlineTmpMaterial.form' // 选择原料卷上线操作

export const REDUCE_PRODUCT_NUM = '/material/reduceProductNum.form' // 减少订单成品

export const ADD_PRODUCT_NUM = '/material/addProductNum.form' // 减少订单成品

export const PRODUCT_NEXT_STATUS = '/material/productNextStatus.form' // 生产完成

export const FING_PRODUCTS_BY_EQUIP_ID = '/material/findProductsByEquipId.form' // 查询生产订单

export const PACKAGE_PRODUCTS = '/material/packageProducts.form' // 成品打包

export const RE_PACKAGE_PRODUCTS = '/material/rePackageProducts.form' // 成品合包

export const FIND_PACKAGE_PRODUCTS_BY_EQUIP_ID =
  '/material/findPackageProductsByEquipId.form' // 查找已经打包的成品

export const TO_NO_PLANNED_PRODUCT = '/material/toNoPlannedProduct.form' // 成品入库

export const PRODUCTS_IN_STORE = '/material/productsInStore.form' // 质检完入库

export const TO_BE_REPAIRED = '/material/toBeRepaired.form' // 成品修复

export const FIND_REPAORING_PRODUCTS = '/material/findRepairingProducts.form' // 查询成品修复

export const REPAOR_FINIDHED = '/material/repairFinished.form' // 成品修复完成

export const PRE_IN_STORE = '/plan/preInStore.form' // 多余成品入库

export const CHECK_PRODUCT_WEIGHT = '/material/checkProductWeight.form' // 录入实际重量

// 流程审核

export const CUSTOMER_ORDER_IN_FO = '/process/start/CustomerOrderInfo.form' // 发起询单审核

export const CLAIM_LIST = '/process/claim/list.form' // 查询指派给我的任务

export const PROCESS_LIST = '/process/list.form' // 我的任务

export const PROCESS_CLAIM = '/process/claim.form' // 开始处理

export const APPROVE = '/process/approve.form' // 申请同意

export const REJECT = '/process/reject.form' // 申请驳回

export const START_PURCHASING_PLAN = '/process/start/PurchasingPlan.form' // 采购订单发起审核

export const FIND_PURCHASING_PLAN_BY_ID_IN =
  '/plan/findPurchasingPlanByIdIn.form' // 批量查询采购西悉尼

export const CLAIM_COUNT = '/process/claim/count.form' // 查询我参与的任务数量
export const LIST_COUNT = '/process/list/count.form' // 查询我的任务数量

// 钢厂报价管理

export const SAVE_MATERIAL_INFO = '/material/saveMaterialInfo.form' // 添加钢厂报价

export const DELETE_MATERIAL_INFO = '/material/deleteMaterialInfo.form' // 删除钢厂报价

export const FIND_MATERIAL_INFO_BY_PLANT_AND_TYPE =
  '/material/findMaterialInfoByPlantAndType.form' // 查询报价

export const SET_PRICE_BY_PLANT = '/material/setPriceByPlant.form' // 调整基价

export const GET_PRICE_BY_PLANT_AND_TYPE =
  '/material/getPriceByPlantAndType.form' // 根据订单规格查询价格

// 产量统计

export const MATERIALS_OUTPUT_STATISTIC =
  '/product/materialOutputStatistic.form' // 原料消耗统计

export const PRODUCT_OUTPUT_STATISTIC = '/product/productOutputStatistic.form' // 成品生产统计

// 二维码相关接口

export const FIND_MATERIAL_BY_NO = '/material/findMaterialByNo.form' // 根据钢卷号查询原料卷。

export const FIND_TMP_MATERIAL_BY_NO = '/material/findTmpMaterialByNo.form' // 根据纵剪卷号查询纵剪卷。

export const FIND_PRODUCT_BY_UUID = '/material/findProductByUuid.form' // 根据纵剪卷号查询纵剪卷。

// 仓库库位管理

export const FIND_STORE_BY_TYPE = '/store/findStoreByType.form' // 根据仓库的类型查询仓库

export const SAVE_STORE = '/store/saveStore.form' // 保存子仓库

export const DELETE_STORE = '/store/deleteStore.form' // 删除子仓库

export const FIND_LOCATION_BY_STORE_ID = '/store/findLocationByStoreId.form' // 根据仓库查询库位

export const SAVE_LOCATIONS = '/store/saveLocations.form' // 保存子仓库

export const DELETE_LOCATIONS = '/store/deleteLocations.form' // 删除子仓库

// 首页
export const GET_CAPACTITY_BY_TIME = '/hmi/ci/findCapacityOfStatistical.hmi' // 今日产能统计
export const GET_PRODUCTIVITY_BY_MONTH = '/hmi/ci/findProductivityTrend.hmi' // 月产能变化趋势
export const GET_CONSUMPTION_BY_TIME =
  '/hmi/ct/findAverageEnergyConsumption.hmi' // 今日能耗均值
export const GET_TREND_OF_ENERGY_BY_TIME =
  '/hmi/ct/findTrendOfEnergyConsumption.hmi' // 月能耗变化趋势
export const GET_ELEC_OF_EACHTIME_BY_TIME =
  '/hmi/ct/findElectricityStatisticsOfEachTimePeriodByDay.hmi' // 各时段用电统计
export const GET_POWER_BY_MONTH_AND_FGP =
  '/hmi/ct/findPowerConsumptionStatisticsByMonthAndFGP.hmi' // 月峰谷平占比

// 生产能耗管理 -> 停扎能耗管理

export const STOP_ENERGY_INDEX = '/hmi/ds/findEnergyConsumptionStatistics.hmi' //获取停扎能耗信息

export const STOP_MEDIA_ENERGY_INDEX = 'ci/findMediumConsumption.hmi' //获取停轧介质能耗信息

// 生产能耗管理 -> 班组能耗评比
export const COIL_YIELD_INDEX = '/hmi/tm/findColiYieldByTimeAndClasses.hmi' // 获取班组产量

export const MEDIUM_STATISTICS_INDEX =
  '/hmi/tm/findMediumStatisticsByTeamAndMonth.hmi' // 班组月能耗统计

export const FIND_BENCHMARKING_INDEX = '/hmi/tm/findBenchmarkingByMonth.hmi' //  获取表格标杆信息

export const MEDIUM_STATISTICS_BYYEAR =
  '/hmi/tm/MediumStatisticsByTeamAndYear.hmi' // 介质能耗年指标统计

// 管理报表 -> 停扎能耗统计

export const GET_STOP_ENERGY_CONSUMPTION_STATISTICS =
  '/hmi/ds/findAllByDate.hmi' // 对应产线停轧能耗统计

export const UPDATE_STOP_ENERGY_CONSUMPTION_STATISTICS = '/hmi/ds/update.hmi' // 编辑停轧能耗统计

export const TOTAL_STOP_ENERGY_CONSUMPTION_STATISTICS =
  '/hmi/cnr/findSumByDate.hmi' //停轧能耗信息统计

export const FIND_ENERGY_CONSUMPTION_BYSTOPID = '/hmi/cnr/findAreaById.hmi' // 通过停轧id查找所消耗的介质

// 管理报表 -> 重点设备能耗统计

export const GET_REPORT_IMPORTANT_EQUIPMENT = '/hmi/cd/findByDevice.hmi' // 重点设备能耗统计

// 管理报表 -> 区域能耗水平统计

export const FIND_AREA_ENERGY_BY_PLANTANDTIME = '/hmi/cms/findByDateArea.hmi' //区域能耗统计(产线,时间,区域)

export const FIND_BY_DATE_AND_AREA_AND_SHIFTS =
  '/hmi/ms/res/findECLAByDateTimeBetweenAndAreaAndClasses.hmi' // 根据日期段，工艺锻，班次查询所选班次的工艺锻数据数据

export const FIND_BY_DATE_AND_AREA = '/hmi/ms/res/findECLAByDateTimeAndArea.hmi' // 根据日期，工艺锻查询所选班次的工艺锻数据数据

// 管理报表 -> 综合查询

export const FIND_TRACK_INFO = '/hmi/ci/findByCoilIdDate.hmi' // 跟踪能耗查询
export const FIND_MONOMER_INFO = '/hmi/cm/findSumByDate.hmi' // 单体介质查询
export const FIND_DEVICE_FIFO = '/hmi/cd/findSumByDeviceDate.hmi' // 关键设备查询

// 系统设置 -> 重点设备监测

export const GET_IMPORTANT_EQUIPMENT = '/hmi/cb/findBy.hmi' // 监测所有重点设备

export const SAVE_IMPORTANT_EQUIPMENT = '/hmi/cb/save.hmi' // 添加重点设备

export const UPDATE_IMPORTANT_EQUIPMENT = '/hmi/cb/update.hmi' // 编辑重点设备

export const DELECT_IMPORTANT_EQUIPMENT = '/hmi/cb/remove.hmi' // 删除重点设备

// 系统设置 -> 产线管理

export const SAVE_PLANT_INFO = '/hmi/plant/save.hmi' // 添加保存产线信息

export const FIND_ALL_PLANT_INFO = '/hmi/plant/findAllByDeptId.hmi' // 查找所有的产线信息

export const FIND_ALL_PLANTID_INFO = '/hmi/plant/findBy.hmi' // 根据部门ID查找产线

export const DELECT_ID_PLANT = '/hmi/plant/remove.hmi' // 删除产线信息

export const UPDATE_PLANT_INFO = '/hmi/plant/update.hmi' //更新产线消息

export const FIND_ALL_MEDIA_PRICES = '/hmi/mp/findAll.hmi' //查询全部介质价格信息

export const REMOVEL_MEDIA_PRICES = '/hmi/mp/remove.hmi' //删除介质价格信息

export const SAVE_MEDIA_PRICES = '/hmi/mp/save.hmi' //保存介质价格信息

export const UPDATE_MEDIA_PRICES = '/hmi/mp/update.hmi' //更新介质价格信息

export const FIND_MEDIA_PRICES_ID = '/hmi/mp/findById.hmi' //查询单个介质价格信息

export const FIND_ALL_ENERGY_INDEX = '/hmi/et/findAll.hmi' //查询全部能源指标信息

export const REMOVEL_ENERGY_INDEX = '/hmi/et/remove.hmi' //删除能源指标信息

export const SAVE_ENERGY_INDEX = '/hmi/et/save.hmi' //保存能源指标信息

export const UPDATE_ENERGY_INDEX = '/hmi/et/update.hmi' //更新能源指标信息

export const FIND_ENERGY_INDEX_ID = '/hmi/et/findById.hmi' //查询单个能源指标信息

export const FIND_CONSUMEDEVICE_SUM = '/hmi/cd/findCDSum.hmi' //查询关键设备的统计能耗

export const FIND_CM_SUM_GROUP_MEDIATYPE_PROCEDURE =
  '/hmi/cm/findSumGroupByArea.hmi' // 查询轧线能源消耗量，根据工序和能源类型分组
export const FIND_CM_MT_SUM_GROUP_DATE =
  '/hmi/cm/findGroupSumByProcedureAndMediaTypeAndPlantId.hmi' // 根据工序，介质烈性查询单一介质的统计信息，根据日期分组
export const FIND_CM_ENERGYMEDIA_SUM = '/hmi/cd/findCDEnergyMediaSum.hmi' // 查询工序下某个介质的设备统计能耗， eg: 精轧 用电设备能耗统计

export const COIL_INFO_FIND_BY_ID = '/hmi/ci/findById.hmi' // 根据钢卷号，查询钢卷信息

export const COIL_CONSUME_INFO = '/hmi/ct/findSumByCoilId.hmi' // 获取钢卷的统计数据

export const GET_TAGS = 'get_tags'

export const SET_TAGS = 'set_tags'

export const SEND_MSG = 'send_msg'
