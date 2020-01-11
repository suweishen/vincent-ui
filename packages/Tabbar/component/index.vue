<template>
  <div :class="[SafeArea, Common]" @click="clickTabbarItem($event)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-tabbar',
  /* v-model和父组件进行双向绑定，父组件能监控到当前激活状态的tabbarItem是第几个 */
  model: {
    prop: 'active',
    event: 'eventClick'
  },
  props: {
    active: {
      type: Number,
      default: 0
    },
    // 是否显示安全区域
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      nodes: [],
      Active: this.active,
      tabbarItemId: '',
    }
  },
  mounted () {
    this.nodes = document.querySelectorAll('.v-tabbar-item-wrapper')
    // 初始化显示icon的活跃状态
    // dom操作完成后才能拿到tabbarItemId，所以需要用到nextTick
    this.$nextTick(() => {
      this.tabbarItemId = this.nodes[this.active].id
    })
  },
  provide () {
    // 整个页面提供给后代组件
    return {
      tabbar: this
    }
  },
  computed: {
    // 监控显示安全区域(默认显示)
    SafeArea: function () {
      if (this.safeArea) {
        let isIphone = /iphone/gi.test(window.navigator.userAgent)
        let windowW = window.screen.width
        let windowH = window.screen.height
        let pixelRatio = parseInt(window.devicePixelRatio)

        let isIPhoneX = isIphone && pixelRatio && pixelRatio === 3 && windowW === 375 && windowH === 812
        let isIPhoneXSMax = isIphone && pixelRatio && pixelRatio === 3 && windowW === 414 && windowH === 896
        let isIPhoneXR = isIphone && pixelRatio && pixelRatio === 2 && windowW === 414 && windowH === 896

        if (isIPhoneX || isIPhoneXSMax || isIPhoneXR) {
          return 'fix-iphonex-bottom'
        } else {
          return ''
        }
      } else {
        return ''
      }
    },
    Common: function () {
      return 'v-tabbar'
    },
  },
  methods: {
    // 切换tabbarItem区域颜色
    changeColor () {
      if (this.Active < this.nodes.length) {
        this.nodes.forEach((item, index) => {
          if (index === this.Active) {
            item.style.color = '#2d8cf0'
          } else {
            item.style.color = '#808080'
          }
        })
      }
    },
    clickTabbarItem (e) {
      this.nodes.forEach((item, index) => {
        if (item.id === e.path[2].id) {
          this.Active = index
          this.tabbarItemId = item.id
        }
      })
      let data = this.Active
      this.$emit('eventClick', data)
    }
  },
  watch: {
    nodes: {
      handler(newVal) {
        if (newVal.length > 0) {
          this.changeColor()
        }
      },
      immediate: true
    },
    active: {
      handler(newVal) {
        if (newVal >= 0) {
          this.changeColor()
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
</style>