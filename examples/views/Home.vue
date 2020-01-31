<template>
  <div class="home">
    <div style="width: 100%; overflow: hidden;">
      <v-swipe @change="swiperChange" :initialIndex="2" indicatorColor="#2d8cf0">
        <v-swipe-item>
          <img src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg" />
        </v-swipe-item>
        <v-swipe-item>
          <img src="http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg" />
        </v-swipe-item>
        <v-swipe-item>
          <img src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg" />
        </v-swipe-item>
        <v-swipe-item>
          <img src="http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg" />
        </v-swipe-item>
        <v-swipe-item>
          <img src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg" />
        </v-swipe-item>
      </v-swipe>
    </div>

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

    <v-row>
      <v-col span="5">span:5</v-col>
      <v-col span="18" offset="2" >span:18 offset:2</v-col>
      <v-col span="24" >span:24</v-col>
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

    <v-divider
      text="Cell"
    />

    <v-cell title="基础样式" value="内容" isLink />
    <v-cell title="单元格" titleIcon="order" value="内容" isLink />
    <v-cell value="内容" isLink >
      <template slot="title">
        <span class="custom-title">title插槽</span>
        <v-button type="error" size="small">按钮</v-button>
      </template>
    </v-cell>

    <v-cell title="right-icon插槽">
      <v-icon
        slot="right-icon"
        name="search"
      />
    </v-cell>

    <v-dialog
      :show="showDialog"
      text="是否确认退出登录？"
      @mask-click="showDialog = false"
      @fail-click="showDialog = false"
      @confirm-click="showDialog = false"
    />

    <v-divider
      text="Calendar"
    />

    <v-button type="primary" @click="calendarShow = true">日历弹窗</v-button>

    <v-popup :show="calendarShow" popupHeight="400" position="bottom" round @click-mask="calendarShow = false">
      <v-calendar />
    </v-popup>

    <v-tabbar v-model="active">
      <v-tabbar-item icon="home" activeIcon="homeActive">首页</v-tabbar-item>
      <v-tabbar-item icon="category" activeIcon="categoryActive">分类</v-tabbar-item>
      <v-tabbar-item icon="search" activeIcon="searchActive">搜索</v-tabbar-item>
      <v-tabbar-item icon="my" activeIcon="myActive">我的</v-tabbar-item>
    </v-tabbar>
  </div>
</template>

<script>
// @ is an alias to /expamles
export default {
  name: 'home',
  data () {
    return {
      showDialog: false,
      showPopup: false,
      showTopPopup: false,
      showBottomPopup: false,
      showLeftPopup: false,
      showRightPopup: false,
      calendarShow: false,
      active: 0,
    }
  },
  methods: {
    complete (data) {
      console.log(data)
      // if (data) {
      //   this.showDialog = true
      // }
    },
    swiperChange (index) {
      console.log(index)
    }
  },
  watch: {
    active: {
      handler(newVal) {
        console.log('home:' + newVal)
      },
      immediate: true
    }
  }
}
</script>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }
  .home {
    padding-bottom: 135px;
  }
</style>
