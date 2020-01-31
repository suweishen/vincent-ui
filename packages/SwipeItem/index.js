import SwipeItem from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
SwipeItem.install = Vue => {
  // 定义组件
  Vue.component(SwipeItem.name, SwipeItem) // Swipe.name就是实例的name属性
}

export default SwipeItem