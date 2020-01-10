<template>
  <div>
    <div
      class="v-cell-wrapper"
      :class="[Border, checkBackground]"
      @touchstart="touchStart()"
      @touchend.prevent="touchEnd()"
    >
      <div class="v-cell-title-wrapper">
        <slot name="title"></slot>

        <div class="v-cell-title-icon" v-if='titleIcon'>
          <i :class="'v-icon-' + TitleIcon" style="font-size: 20px;"></i>
        </div>
        <div class="v-cell-title">{{title}}</div>
      </div>

      <div class="v-cell-value-wrapper">
        <slot name="right-icon"></slot>

        <div class="v-cell-value">{{value}}</div>
        <div class="v-cell-value-arrow" v-if='isLink'>
          <i :class="'v-icon-' + showLink"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-cell',
  data () {
    return {
      Loop: 0, // 事件监听器
      checkBackground: '',
    }
  },
  props: {
    // 标题
    title: {
      type: String
    },
    // 内容
    value: {
      type: String
    },
    // 是否展示向右箭头
    isLink: {
      type: Boolean,
      default: false
    },
    // 箭头方向
    arrowDirection: {
      type: String,
      default: ''
    },
    // 标题icon
    titleIcon: {
      type: String
    },
    // 是否显示外边框
    border: {
      type: Boolean,
      default: true
    },
    // 是否开启点击反馈
    clickable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    showLink: function () {
      if (this.isLink && this.arrowDirection === '') {
        return 'arrow-right'
      } else if (this.isLink && this.arrowDirection === 'down') {
        return 'arrow-down'
      } else if (this.isLink && this.arrowDirection === 'up') {
        return 'arrow-up'
      } else if (this.isLink && this.arrowDirection === 'left') {
        return 'back'
      }
      return ''
    },
    TitleIcon: function () {
      if (this.titleIcon) {
        return this.titleIcon
      }
      return ''
    },
    Border: function () {
      if (this.border) {
        return 'v-cell-wrapper:after'
      } else {
        return ''
      }
    }
  },
  methods: {
    // 手指触摸
    touchStart () {
      if (this.clickable === true) {
        this.checkBackground = 'v-cell-addBckground'
      }
      var that = this
      this.Loop = setTimeout(function() {
        that.Loop = 0
        // 执行长按要执行的内容，如弹出菜单
      }, 500);
      return false;
    },
    // 手指离开
    touchEnd () {
      if (this.clickable === true) {
        this.checkBackground = 'v-cell-removeBckground'
      }
      var that = this
      clearTimeout(this.Loop)
      if(that.Loop != 0) {
        that.emit()
      }
      return false;
    },
    emit () {
      this.$emit('touch')
    }
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
  @import '../../Icon/component/index.less';
</style>