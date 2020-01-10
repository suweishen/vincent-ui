import Button from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Button.install = Vue => {
  // 定义组件
  Vue.component(Button.name, Button) // Button.name就是实例的name属性
}

export default Button