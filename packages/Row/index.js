import Row from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Row.install = Vue => {
  // 定义组件
  Vue.component(Row.name, Row) // Row.name就是实例的name属性
}

export default Row