<template>
  <div>
    <div :class="['col-' + Span, 'col-offset-' + Offset]">
      <div style="background-color: #1b86d7; border: 1px solid #fff;">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-col',
  props: {
    // 屏幕占比
    span: {
      type: String
    },
    // 间隔
    offset: {
      type: String
    }
  },
  computed: {
    Span: function () {
      if (this.span) {
        return this.span
      } else {
        return '0'
      }
    },
    Offset: function () {
      if (this.offset) {
        return this.offset
      } else {
        return '0'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
</style>