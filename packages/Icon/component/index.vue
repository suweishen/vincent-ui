<template>
    <i :class="'v-icon-' + name"></i>
</template>

<script>
export default {
    name:'v-icon',
    props: {
      name: String
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>