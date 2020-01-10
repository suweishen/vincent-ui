import Dialog from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
Dialog.install = Vue => {
  // 定义组件
  Vue.component(Dialog.name, Dialog) // Dialog.name就是实例的name属性
}

export default Dialog