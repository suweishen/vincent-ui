<template>
  <div :class="[SafeArea]">
    <Button class="v-button" :class="[Type, Shape, Size]"  :disabled="disabled" @click="handleClick">
      <span :class="[loading ? 'v-button-icon-loading' : '' ]" v-if="loading">
        <i :class="'v-icon-' + icon" v-if='icon'></i>
      </span>
      <span v-if="loading">加载中...</span>

      <i :class="'v-icon-' + icon" v-if='icon && loading === false' style="padding-right: 3px;"></i>
      <slot v-if="!loading"></slot>
    </Button>
  </div>
</template>

<script>
export default {
  name: 'v-button', // 申明组件的name属性
  props: {
    // 禁用按钮
    disabled: {
      type: Boolean,
      default: false // 默认为false
    },
    // 按钮类型 primary | success | error
    type: {
      type: String,
    },
    // 按钮形状 round | circle
    shape: {},
    // 按钮大小 small | normal | large
    size: {},
    // 是否显示icon
    icon: {},
    // 是否显示加载状态
    loading: {
      type: Boolean,
      default: false
    },
    // 适配Iphone机型底部
    safeArea: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 按钮类型
    Type: function () {
      if (this.type) {
        if (this.type === 'primary') {
          return 'v-button-primary'
        } else if (this.type === 'success') {
          return 'v-button-success'
        } else if (this.type === 'error') {
          return 'v-button-error'
        }
      } else {
        return ''
      }
      return ''
    },
    // 按钮形状
    Shape: function () {
      if (this.shape) {
        if (this.shape === 'round') {
          return 'v-button-round'
        } else if (this.shape === 'circle') {
          return 'v-button-circle'
        }
      } else {
        return ''
      }
      return ''
    },
    Size: function () {
      if (this.size) {
        if (this.size === 'small') {
          return 'v-button-small'
        } else if (this.size === 'normal') {
          return 'v-button-normal'
        } else if (this.size === 'large') {
          return 'v-button-large'
        }
      } else {
        return ''
      }
      return ''
    },
    // 适配IPhoeX 底部
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
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
  @import './index';
  @import '../../Icon/component/index.less';
</style>