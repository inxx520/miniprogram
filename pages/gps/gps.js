// pages/gps/gps.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    V_wd: 22.353995,
    V_jd: 113.531926,
    id:0
    //经度113.531926，纬度22.353995；
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.data.id=options.ID
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    that.latitude = 0
    that.longitude = 0
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        // console.log(res)
        that.latitude = res.latitude.toFixed(2)
        that.longitude = res.longitude.toFixed(2)
        that.setData({
          wd: that.latitude,
          jd: that.longitude,
       
          //V_wd: that.latitude,
          //V_jd: that.longitude,
        })
        that.distance(that.latitude, that.longitude, that.data.V_wd, that.data.V_jd)
      }
    })

    //this.distance(latitude, that.V_jd, 39.928722, 116.393853)

  },
  distance: function (la1, lo1, la2, lo2) {
    var La1 = la1 * Math.PI / 180.0;
    var La2 = la2 * Math.PI / 180.0;
    var La3 = La1 - La2;
    var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
    s = s * 6378.137;//地球半径
    s = Math.round(s * 1000) / 10000;
    s = s.toFixed(2);
    console.log("计算结果(KM)", s)
    var that = this
    that.setData({
      jl: s,
    })
  },
  formSubmit: function (e) {
    
    var that = this;
    var formData = e.detail.value;
    wx.request({
      url: 'http://localhost:8088/Z_web/gps?ID='+this.data.id,
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
       
           if (res.data.code == 200) {
          wx.showToast({
            title: '打卡成功',
          })

       

        } else {
          wx.showToast({
            title: '打卡不成功',
          })
        }
      },
      fail: function (error) {
        //调用服务端登录接口失败
        that.showInfo('调用接口失败');
        console.log(error);
      }
    })
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