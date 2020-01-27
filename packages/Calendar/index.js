import Calendar from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Calendar.install = Vue => {
  // 定义组件
  Vue.component(Calendar.name, Calendar) // Calendar.name就是实例的name属性
}

export default Calendar