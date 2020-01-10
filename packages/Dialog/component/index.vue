<template>
  <div>
    <div class="v-modal" v-if="show">
      <div class="v-mask" @click="clickMask"></div>
      <div class="v-modal-wrap">
        <div class="v-modal-body">
          <p class="v-modal-title">{{title}}</p>
          <p>{{text}}</p>
        </div>
        <div class="v-modal-footer">
          <a class="v-btn fail" @click="clickFail">取消</a>
          <a class="v-btn confirm" @click="clickConfirm">确认</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-dialog',
  props: {
    // 标题
    title: {
      type: String,
      default: '提示'
    },
    // 文本
    text: {
      type: String
    },
    // 展示控制
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 点击遮罩层
    clickMask () {
      this.$emit('mask-click')
    },
    // 点击取消按钮
    clickFail () {
      this.$emit('fail-click')
    },
    // 点击确认按钮
    clickConfirm () {
      this.$emit('confirm-click')
    },
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
</style>