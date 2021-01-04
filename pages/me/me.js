// pages/me/me.js
var app = getApp();
Page({
  data: {
   
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
  setup: function () {
    wx.navigateTo({
      url: '../shezhi/shezhi',
    })
  }

})