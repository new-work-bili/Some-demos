# 内容说明
## 正则-密码强度
## 生命周期
## router
## redux、react-redux
## hooks
## context
# cookie登陆测试
+   如果做单点登录的话其实和token的登陆方式一样，只不过是客户端这边存储在cookie中，这样就可以设置http-only这种头
**总的来说http-only + cookie签名 + 后台接口的验证(其实就是取cookie中的身份信息看他能不能用这个接口) + 对付抓包的那种方法**
**就能解决绝大部分安全问题**


## todo
+   使用axios
+   cookie的path和admin

<!-- +   中间件,的链式https://expressjs.com/zh-cn/guide/using-middleware.html -->
<!-- +   现在是两个组件，跳转两个路由：能不能把老师和学生组件合并；这个就更简单了懒得写了：
    1.  首先如果组件合并，那么就是登陆之后跳转相同的路由，然后请求相同的接口。
    2.  后台就根据cookie的身份派发对应的数据 -->
<!-- +   设置httponly -->
<!-- +   cookie签名是如何比对的 -->
<!-- +   如何知道用户更改了cookie -->