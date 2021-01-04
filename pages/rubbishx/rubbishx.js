// pages/rubbishx/rubbishx.js
var app = getApp()
Page({
  data: {
    flag: 0,
    
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据

    
  },
  switchNav: function (e) {
    var id = e.target.id;
    var page = this;
    if (this.data.flag == id) {
      return false;
    } else {
      page.setData({ flag: id });
    }
  },
  seeDetail: function () {
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})
