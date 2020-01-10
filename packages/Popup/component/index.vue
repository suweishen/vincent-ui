<template>
  <div>
    <div v-if="show">
      <div class="v-mask" v-if="afterShow" @click="clickMask"></div>
      <div id="popup" class="v-popup" :class="[Position]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',
  props: {
    // 是否显示弹出层
    show: {
      type: Boolean,
      default: false
    },
    // 弹窗位置  common | top | right | bottom | left
    position: {
      type: String,
      default: 'common'
    },
    // 弹窗高度
    popupHeight: {
      type: [String, Number],
      default: 100
    },
    // 弹窗宽度
    popupWidth: {
      type: [String, Number],
      default: 200
    },
    // 显示圆角
    round: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      afterShow: false,
    }
  },
  computed: {
    Position: function () {
      if (this.position === 'top') {
        return 'v-popup-top'
      } else if (this.position === 'right') {
        return 'v-popup-right'
      } else if (this.position === 'bottom') {
        return 'v-popup-bottom'
      } else if (this.position === 'left') {
        return 'v-popup-left'
      }
      return ''
    },
  },
  methods: {
    afterShowMask () {
      setTimeout(() => {
        this.afterShow = true
      }, 300)
    },
    // 点击遮罩层
    clickMask () {
      this.$emit('click-mask')
    },
    // 动态改变高度|宽度
    addTransition () {
      let node = document.getElementById('popup')
      if (this.position === 'top' || this.position === 'bottom' || this.position === 'common') {
        node.style.transition = 'height 0.3s linear'
      } else {
        node.style.transition = 'width 0.3s linear'
        node.style.width = this.popupWidth + 'px'
      }
      if (this.popupHeight && this.position !== 'left' && this.position !== 'right') {
        node.style.height = this.popupHeight + 'px'
      }
      if (this.position === 'bottom' || this.position === 'left' || this.position === 'right') {
        node.classList.remove("v-popup");
      }
      if (this.round) {
        switch (this.position) {
          case 'top': node.style.borderRadius = '0 0 10px 10px'; break;
          case 'bottom': node.style.borderRadius = '10px 10px 0 0'; break;
          case 'left': node.style.borderRadius = '0 10px 10px 0'; break;
          case 'right': node.style.borderRadius = '10px 0 0 10px'; break;
        }
      }
    },
  },
  watch: {
    // 监听popup组件的显示，dom加载完后马上动态改变popup的高度或宽度
    show: {
      handler(newVal) {
        if (newVal === true) {
          this.$nextTick(() => {
            this.afterShowMask()
            setTimeout(() => {
              this.addTransition()
            })
          })
        } else {
          this.afterShow = false
        }
      },
      immediate: true
    },
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
</style>