import Cell from './component/index.vue'

Cell.install = Vue => {
  Vue.component(Cell.name, Cell)
}

export default Cell