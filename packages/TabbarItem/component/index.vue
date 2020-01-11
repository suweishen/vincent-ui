<template>
  <div class="v-tabbar-item-wrapper" :id="[tabbarItemId]">
    <a class="v-tabbar-item">
      <i :class="'v-icon-' + currentStatus" class="icon"></i>
      <span class="name"><slot></slot></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'v-tabbar-item',
  // 接收祖先组件传过来的参数
  inject: ['tabbar'],
  props: {
    // tabbar-item的图标
    icon: {
      type: String
    },
    // 点击时的icon
    activeIcon: {
      type: String
    },
  },
  mounted () {
    this.id = Math.floor(Math.random() * 10000)
  },
  computed: {
    // 通过随机数来给每一个tabbarItem的id赋值，来完成不同的操作
    tabbarItemId: function () {
      return 'v-tabbarItem-' + this.id
    }
  },
  data () {
    return {
      change: false,
      currentStatus: this.icon,
      id: 0,
    }
  },
  methods: {
    // 切换icon状态
    changeIconActive () {
      let currentTabbarItemId = 'v-tabbarItem-' + this.id
      if (this.tabbar.tabbarItemId === currentTabbarItemId) {
        this.currentStatus = this.activeIcon
      } else {
        this.currentStatus = this.icon
      }
    }
  },
  watch: {
    'tabbar.tabbarItemId': {
      handler() {
        this.changeIconActive()
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
  @import '../../Icon/component/index.less';
</style>