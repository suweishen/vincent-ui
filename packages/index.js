/*
 * 整合所有组件，全局install
 */
import Button from './Button'
import Cell from './Cell'
import Col from './Col'
import Dialog from './Dialog'
import Divider from './Divider'
import Icon from './Icon'
import Popup from './Popup'
import Row from './Row'
import Switch from './Switch'
import Tabbar from './Tabbar'
import TabbarItem from './TabbarItem'
import Calendar from './Calendar'
import SwipeItem from './SwipeItem'
import Swipe from './Swipe'

// 存储组建列表
const components = [
  Button, Col, Dialog, Divider, Icon, Popup, Row, Switch, Tabbar, TabbarItem, Cell, Calendar, SwipeItem, Swipe
]

// 定义install方法，接收Vue作为参数
const install = Vue => {
  // 判断是否安装
  if (install.installed) return 
  install.installed = true

  // 遍历注册全局组件
  components.map(component => {
    Vue.use(component)
  })

  // 检测到Vue才会执行
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }

  // Vue.prototype.$message = message;
}

export default {
  install,
  ...components
}