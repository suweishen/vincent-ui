<template>
  <div>
    <div class="v-divider">
      <div class="v-divider-border" :class="Style"></div>
      <div class="v-divider-text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-divider',
  props: {
    // 文本
    text: {
      type: String
    },
    // 横线样式 solid | dashed
    borderStyle: {
      type: String,
      default: 'solid'
    }
  },
  computed: {
    Style: function () {
      if (this.borderStyle === 'dashed') {
        return 'v-divider-border-dashed'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
</style>