var app = getApp()
Page({
  data: {
    disabled: true,
    btnstate: "default",
    account: "",
    password: "",
    

    
  },
  onLoad: function () {

    console.log('onLoad')
    var that = this
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  onGotUserInfo: function (e) {
    console.log("nickname=" + e.detail.userInfo.nickName);
  },
  accountInput: function (e) {
    var account = e.detail.value;
    console.log(account);
    if (account != '') {
      this.setData({ disabled: false, btnstate: "primary", account: account });
    } else {
      this.setData({ disabled: true, btnstate: "default" });
    }
  },
  pwdBlur: function (e) {
    var password = e.detail.value;
    // console.log(password);
    if (password != '') {
      this.setData({ password: password });
    }
  },
  formSubmit: function (e) {
  
    var that = this;
    var formData = e.detail.value;
    wx.request({
      url: 'http://localhost:8088/Z_web/WX_login',
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        if (res.data.code == 200) {
          // if (JSON.stringify(res.data[0].code === 200)) {
          wx.showToast({
            title: '成功',
          })
          setTimeout(function () {
            wx.switchTab({
              url: '/pages/zhuye/zhuye',
            })
          }, 2000)
        } else {
          wx.showToast({
            title: '不成功',
          })
        }
      },
      fail: function (error) {
        //调用服务端登录接口失败
        that.showInfo('调用接口失败');
        console.log(error);
      }
    })
  }
})
