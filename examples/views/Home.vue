<template>
  <div class="home">
    <v-divider
      text="按钮类型"
    />
    <div style="display: flex; width: 100%; flex-wrap: wrap;">
      <v-button>朴素按钮</v-button>
      <v-button disabled>禁用按钮</v-button>
      <v-button type="primary">信息按钮</v-button>
      <v-button type="success" icon="refresh">按钮</v-button>
      <v-button type="error">错误按钮</v-button>
      <v-button type="primary" shape="round">圆角按钮</v-button>
      <v-button type="error" size="small">按钮</v-button>
      <v-button type="primary" size="large" icon="refresh" loading>大型按钮</v-button>
    </div>
    <v-divider
      text="switch"
      borderStyle="dashed"
    />
    <v-switch
      @on-complete="complete"
    />
    <v-divider
      text="dialog弹框"
    />
    <v-button type="primary" icon="collect" @click="showDialog = true" safeArea>展示弹窗</v-button>
    
    <v-divider
      text="Layout布局"
    />
    <v-row>
      <v-col span="4">span:4</v-col>
      <v-col span="16" offset="2" >span:16 offset:2</v-col>
      <v-col span="16" offset="4" >span:16 offset:4</v-col>
    </v-row>

    <v-divider
      text="Popup弹出层"
    />
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap; box-sizing: border-box; padding: 0 15px;">
      <v-button type="primary" @click="showPopup = true">基础弹窗</v-button>
      <v-button type="primary" @click="showTopPopup = true">顶部弹窗</v-button>
      <v-button type="primary" @click="showBottomPopup = true">底部弹窗</v-button>
      <v-button type="primary" @click="showLeftPopup = true">左部弹窗</v-button>
      <v-button type="primary" @click="showRightPopup = true">圆角弹窗</v-button>
    </div>
    <v-popup :show="showPopup" @click-mask="showPopup = false">
      content
    </v-popup>

    <v-popup :show="showTopPopup" :popupHeight="200" position="top" @click-mask="showTopPopup = false">
      <v-button type="primary" icon="collect" @click="showDialog = true" safeArea>展示弹窗</v-button>
    </v-popup>

    <v-popup :show="showBottomPopup" :popupHeight="200" position="bottom" @click-mask="showBottomPopup = false">
      <v-button type="primary" icon="collect" @click="showDialog = true" safeArea>展示弹窗</v-button>
    </v-popup>

    <v-popup :show="showLeftPopup" position="left" @click-mask="showLeftPopup = false">
      left content
    </v-popup>

    <v-popup :show="showRightPopup" round position="right" @click-mask="showRightPopup = false">
      left content
    </v-popup>

    <v-dialog
      :show="showDialog"
      text="是否确认退出登录？"
      @mask-click="showDialog = false"
      @fail-click="showDialog = false"
      @confirm-click="showDialog = false"
    />

    <v-tabbar>
      <v-tabbar-item icon="home"></v-tabbar-item>
      <v-tabbar-item icon="category"></v-tabbar-item>
      <v-tabbar-item icon="search"></v-tabbar-item>
      <v-tabbar-item icon="my"></v-tabbar-item>
    </v-tabbar>
  </div>
</template>

<script>
// @ is an alias to /expamles
// import VButton from '~/Button/component/index.vue'
// import VSwitch from '~/Switch/component/index.vue'
// import VDivider from '~/Divider/component/index.vue'
// import VDialog from '~/Dialog/component/index.vue'
// import VTabbar from '~/Tabbar/component/index.vue'
// import VTabbarItem from '~/TabbarItem/component/index.vue'
// import VCol from '~/Col/component/index.vue'
// import VRow from '~/Row/component/index.vue'
// import VPopup from '~/Popup/component/index.vue'
export default {
  name: 'home',
  data () {
    return {
      showDialog: false,
      showPopup: false,
      showTopPopup: false,
      showBottomPopup: false,
      showLeftPopup: false,
      showRightPopup: false
    }
  },
  // components: {
  //   VButton, VSwitch, VDialog, VTabbar, VTabbarItem, VDivider, VCol, VRow, VPopup
  // },
  methods: {
    complete (data) {
      console.log(data)
      // if (data) {
      //   this.showDialog = true
      // }
    }
  }
}
</script>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }
</style>
