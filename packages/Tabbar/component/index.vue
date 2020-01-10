<template>
  <div :class="[SafeArea, Common]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-tabbar',
  computed: {
    SafeArea: function () {
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
    },
    Common: function () {
      return 'v-tabbar'
    }
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
</style>