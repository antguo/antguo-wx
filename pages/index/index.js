//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 海报滚动
    bannerList: [
      { id: 1, imgUrl: '/images/banner-1.png'},
      { id: 2, imgUrl: '/images/banner-1.png'},
      { id: 3, imgUrl: '/images/banner-1.png'}
    ],
    // 当前滚动索引
    swiperIndex: 0,
    // 分类图标
    sortList: [
      { id: 1, imgUrl: '/images/icons/dress.png', describe: '女装' },
      { id: 2, imgUrl: '/images/icons/suit.png', describe: '男装' },
      { id: 3, imgUrl: '/images/icons/clothes.png', describe: '套装' },
      { id: 4, imgUrl: '/images/icons/others.png', describe: '更多' }
    ]
  },
  onSwiperChange: function (e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 获取用户地理位置
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
