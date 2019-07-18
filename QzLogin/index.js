// 云函数入口文件
const cloud = require('wx-server-sdk');
// 云函数入口函数
const got =require('got')
exports.main = async (event, context) => {
  const { uid, pin } = event;
  const urll = "http://jwc.university.edu.cn/app.do?method=authUser&xh="+ uid + "&pwd=" + pin
  //请结合实际修改链接地址
    let postResponse = await got(urll, {
      method: 'POST', //post请求
      headers: {
        'Content-Type': 'application/json',//这里不要变
        //‘token':'qerinn54j049jg'
        //要用token的写在这，可以再加一个参数直接传过来即可
      },
      /*postData: {
        //此段无效，欢迎指正原因！
        mimeType: 'application/json',
        params: {
          methond:'authUser',
          xh : uid,
          pwd : pin
        }
      }*/
      body:{} 
    })
    return postResponse.body //返回数据
  }