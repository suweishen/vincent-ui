<template>
  <div class="v-tabbar-item-wrapper">
    <a class="v-tabbar-item">
      <i :class="'v-icon-' + icon" class="icon"></i>
      <span class="name">首页</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'v-tabbar-item',
  props: {
    // tabbar-item的图标
    icon: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
  @import '../../Icon/component/index.less';
</style>