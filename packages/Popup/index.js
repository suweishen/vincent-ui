import Popup from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Popup.install = Vue => {
  // 定义组件
  Vue.component(Popup.name, Popup) // Popup.name就是实例的name属性
}

export default Popup