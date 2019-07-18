//login.js
//获取应用实例
var app = getApp();
// pages/showout/showout.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true, //是否隐藏对话框
    userid: '',
    passwd: '',
    msg :''
  },
  //事件处理函数
  useridInput: function(e) {
    this.setData({
      userid: e.detail.value
    });
  },
  pwdInput: function(e) {
    this.setData({
      passwd: e.detail.value
    });
  },
  helptap: function() {
    wx.showModal({
      showCancel: 'false',
      title: '帮助',
      content: '如果忘记了密码，请携带有效证件去教务处重置密码！',
    })
  },
  logintap: function() {
    if (!this.data.userid || !this.data.passwd) {
      wx.showModal({
        showCancel: 'false',
        title: '请注意',
        content: '账号或密码不得为空！',
      })
    } else {
      var _this = this
      var s
      wx.cloud.init({})
      wx.cloud.callFunction({
        name: 'NefuQzLogin',
        // 传给云函数的参数
        data: {
          uid: this.data.userid,
          pin: this.data.passwd,
        },
        success(res) {
          console.log(res.result)
          s = JSON.parse(res.result)
          console.log(s)
          //_this.setData({
            app.globalData.userLoginState= s.flag,
            app.globalData.realName = s.userrealname,
            app.globalData.realCollege = s.userdwmc,
            //list_data_name: res.data.userrealname,
          //})
          console.log(app.globalData.userLoginState)
          if (app.globalData.userLoginState=='1') {
            wx.showModal({
              showCancel: 'false',
              title: '登陆成功😜',
              content: '来自' + app.globalData.realCollege + '的' + app.globalData.realName + '，欢迎您！',
            })
          }
            else{
            wx.showModal({
              showCancel: 'false',
              title: '登陆失败🤔',
              content: '账号或密码不正确，请重试！',
            })
            }
        },
        fail: console.error
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})