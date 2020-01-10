import Icon from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Icon.install = Vue => {
  // 定义组件
  Vue.component(Icon.name, Icon) // Icon.name就是实例的name属性
}

export default Icon