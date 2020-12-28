// pages/start/start.js
const CONFIG = require('../../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      { id: 1, imgUrl: "../../images/start/1.png" },
      { id: 2, imgUrl: "../../images/start/2.jpg" }
    ],
    currentId: 0
  },
  /**
   * 滑动图片事件
   */
  onSwiperChange: function (e) {
    this.setData({
      currentId: e.detail.current
    })
  },
  /**
   * 滑动图片事件
   */
  goHomePage: function () {
    wx.setStorage({
      data: CONFIG.version,
      key: 'pages_start_version',
    })
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})