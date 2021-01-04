// pages/text/text.js

Page({
  data: {
    disabled: true,
    btnstate: "default"
  },
  accountblur: function (e) {
    var account = e.detail.value;
    console.log(account);
    if (account != '') {
      this.setData({ disabled: false, btnstate: "primary", account: account });
    } else {
      this.setData({ disabled: true, btnstate: "default" });
    }
  },
  formSubmit: function (e) {
 
    var that = this;
    var formData = e.detail.value;
    wx.request({
      url: 'http://localhost:8088/Z_web/zhuce',
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == 200) {
          // if (JSON.stringify(res.data[0].code === 200)) {
          wx.showToast({
            title: '成功',
          })

          wx.reLaunch({
            url: '/pages/login/login',
          })

        } else {
          wx.showToast({
            title: 'unseccess',
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

