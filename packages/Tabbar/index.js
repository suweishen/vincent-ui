import Tabbar from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Tabbar.install = Vue => {
  // 定义组件
  Vue.component(Tabbar.name, Tabbar) // Tabbar.name就是实例的name属性
}

export default Tabbar