import TabbarItem from './component/index.vue'

/*
 * 暴露组件，对外提供应用
*/
TabbarItem.install = Vue => {
  // 定义组件
  Vue.component(TabbarItem.name, TabbarItem) // Dialog.name就是实例的name属性
}

export default TabbarItem