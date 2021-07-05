// 订单工具类
import { findBasicDataConfigByType } from '@/lib/Util'

var pSteel = 7850
var wasterMaterialPrice = 2500
export async function getBasicDataConfigByType() {
  var pSteelList = await findBasicDataConfigByType('pSteel')
  var wasterMaterialPriceList = await findBasicDataConfigByType(
    'WasterMaterialPrice'
  )
  pSteel = pSteelList[0]
  wasterMaterialPrice = parseInt(wasterMaterialPriceList[0])
  console.debug(pSteel, '=================', wasterMaterialPrice)
}
/**
 * 获取钢的密度, 需要从配置信息中获取
 */
export function getPSteel() {
  // return 7.85 * 1000
  return Function('return ' + pSteel)()
}

/**
 * 算产品周长
 * @param {Object} orderInfoItem
 */
export function getPerimeter(orderInfoItem) {
  const params = orderInfoItem.type.split('*')
  return (
    (parseFloat(params[0]) + parseFloat(params[1])) * 2 -
    6 * orderInfoItem.param2
  )
}

/**
 * 获取废钢价格
 */
export function getWasterMaterialPrice() {
  // return 22
  return wasterMaterialPrice
}

/**
 * 根据卷的长度，计算重量
 * @param {float} length 长度
 * @param {float} perimeter 纵剪带周长，或者是纵剪带宽度,或卷的宽度
 * @param {float} thickness 厚度
 * return 卷的长度计算重量，单位 吨
 */
export function getWeightByLength(length, perimeter, thickness) {
  console.debug('get weight is !!!!!')
  return (
    ((((perimeter / 1000) * thickness) / 1000) * length * getPSteel()) / 1000
  )
}

/**
 * 计算订单卷的长度。
 * 注意: 如果计算纵剪带长度，需要乘以纵剪带条数
 * @param {object} obj orderInfoItem
 */
export function calcLengthByOrder(obj) {
  const calcLength =
    (parseFloat(obj.unitParam) /
      parseFloat(obj.param2) /
      (parseFloat(obj.materialType) + 10) /
      getPSteel()) *
    1000000000 *
    parseInt(obj.materialNum) *
    parseFloat(obj.productYield)
  return calcLength
}
/**
 * 计算订单的带出品
 * @param {object} OrderInfoItem 订单
 * @param {Number} sumLength 总长度
 */
export function calcAllowance(OrderInfoItem, sumLength) {
  console.debug('calc allowance !!!')
  const allowance1 = sumLength - OrderInfoItem.param5
  const allowance2 = getWeightByLength(
    allowance1,
    OrderInfoItem.tmpMaterialParam,
    OrderInfoItem.param2
  )
  return [allowance1, allowance2]
}

/**
 * 计算订单的纵剪带成本
 * @param {object} orderInfoItem
 */
export function calcTmpMaterialPrice(orderInfoItem) {
  var obj = orderInfoItem
  const tmpMaterialPrice =
    ((1 - obj.yield) * (obj.price - getWasterMaterialPrice())) / obj.yield +
    obj.price
  const totalPrice = tmpMaterialPrice * obj.param3
  return [tmpMaterialPrice, totalPrice]
}
