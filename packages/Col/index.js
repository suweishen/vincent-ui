import Col from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Col.install = Vue => {
  // 定义组件
  Vue.component(Col.name, Col) // Col.name就是实例的name属性
}

export default Col