<template>
  <div>
    <div class="v-switch-wrapper" @click="handleClick">
      <div class="v-switch-ball"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-switch',
  data () {
    return {
      checked: false
    }
  },
  methods: {
    handleClick () {
      this.checked = !this.checked
      let node = document.querySelector('.v-switch-wrapper')
      let switchBall = document.querySelector('.v-switch-ball')
      if (this.checked) {
        node.style.background = '#2b85e4'
        switchBall.style.boxShadow = '-1px 0px 1px #999'
        switchBall.style.transform = 'translateX(2rem)'
      } else {
        node.style.background = '#e1e1e1'
        switchBall.style.transform = 'translateX(0rem)'
        switchBall.style.boxShadow = '1px 1px 1px #999'
      }
      this.$emit('on-complete', this.checked)
    }
  }
}
</script>

<style lang="less" scoped>
  @import './index';
</style>