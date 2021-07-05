/**
 * 时间戳转时间
 * @param {String} timestamp 时间戳
 * @return {Object} 时间
 *
 * 例如：
 * timestampToDate('1484222693'); // Thu Jan 12 2017 20:04:53 GMT+0800 (中国标准时间)
 */
export function timestampToDate(timestamp) {
  let date = new Date()

  date.setTime(timestamp)

  console.debug('时间戳', timestamp)

  return date
}

/**
 * 获取特定格式时间
 * @param {Object} date 时间
 * @param {String} format 格式
 * @return {String} 特定格式的时间
 *
 * 例如：
 * var now = new Date(); // Mon Jan 16 2019 14:32:22 GMT+0800 (中国标准时间)
 * formatDate(now, 'yyyy-MM-dd h:m:s'); // 2019-01-16 14:32:22
 */
export function formatDate(date, format) {
  let time = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S+': date.getMilliseconds()
  }

  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }

  for (let k in time) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? time[k]
          : ('00' + time[k]).substr(('' + time[k]).length)
      )
    }
  }

  return format
}

/**
 * 时间戳转特点格式时间
 * @param {String} timestamp 时间戳
 * @return {String} 特点格式时间
 *
 * 例如：
 * timestampFormatDate('1575957943713', 'yyyy-MM-dd'); // 2019-12-10
 */
export function timestampFormatDate(timestamp, format) {
  let date = timestampToDate(timestamp)
  console.debug('时间函数', date)
  let result = formatDate(date, format)

  return result
}

/**
 * @description: 获取本月的最后一天
 * @param {*} date: 选中得当前日期
 * @return {String} '2020-02-29 23:59:59'
 */
export function lastDayFormat(date) {
  let nowDate = new Date()
  let noeMonth = nowDate.getMonth()
  let lastDate = new Date(date) // 'Wed May 01 2019 00:00:00 GMT+0800 (中国标准时间)' // 2019年5月
  let lastMonth = lastDate.getMonth()

  if (lastMonth < noeMonth) {
    var lastDay = new Date(lastDate.getFullYear(), lastMonth + 1, 0) //是0而不是-1
    let data = formatDate(lastDay, 'yyyy-MM-dd')
    return data
  }

  if (lastMonth === noeMonth) {
    let data = formatDate(nowDate, 'yyyy-MM-dd')
    return data
  }
}
