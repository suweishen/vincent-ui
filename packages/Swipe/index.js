import Swipe from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Swipe.install = Vue => {
  // 定义组件
  Vue.component(Swipe.name, Swipe) // Swipe.name就是实例的name属性
}

export default Swipe