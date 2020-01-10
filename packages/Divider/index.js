import Divider from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Divider.install = Vue => {
  // 定义组件
  Vue.component(Divider.name, Divider) // Dialog.name就是实例的name属性
}

export default Divider