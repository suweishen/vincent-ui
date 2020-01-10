import Switch from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Switch.install = Vue => {
  // 定义组件
  Vue.component(Switch.name, Switch) // Switch.name就是实例的name属性
}

export default Switch