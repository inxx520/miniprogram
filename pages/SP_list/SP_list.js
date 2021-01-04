// pages/SP_info/SP_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this//不要漏了这句，很重要
    wx.request({
      //url: 'https://alpha.bnuz.edu.cn/test/XCXSP_info',//先不写
      url: 'http://localhost:8088/Z_web/HT_splist',//先不写
      data: {
        message: 'ty is the The most handsome man in the ESTA',
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          list_data: res.data,
          //text1: res.data
          // SPID: res.data[0].SPID,
          //  SPJG: res.data[0].SPJG,
          //  SPMC: res.data[0].SPMC,
          //  SPKC: res.data[0].SPKC,
          //  SPPIC: res.data[0].SPPIC,
          //  SPXQ: res.data[0].SPXQ,
        });
        console.log(res.data);//回调函数中的携带服务器响应数据
      },
      fail: function (res) {
        console.log("fail to connect");
      }
    })
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