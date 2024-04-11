# ershoufang
1. 后端 back使用node+mysql+express框架

2. 前端 font 使用vue3+ts

项目介绍：普通用户可以查看房屋信息，超级管理员可以实现房屋的入库以及出库的登记管理，实现员工以及用户基本信息的登记与管理。

1.项目拆分为登录页面，首页概览，用户页面，房屋页面，消息管理，个人设置

2.登录页面完成注册账号，登录账号以及忘记密码等功能，使用加密中间件 bcryptjs加密密码。登录系统之后，使用v-if条件渲染使不同身份的user看到不同的界面，普通用户仅可以查看个人信息以及房屋信息，用户管理员可以管理所有用户，产品管理员可以管理所有房屋，而超级用户可以进行公司的设置与对所有产品与人员管理。

3.通过Multer+express静态托管上传头像，首页展示轮播图以及后台发布的公告，使用echarts展示用户与房屋数量等信息概览。

4.对用户有编辑，赋权与冻结等操作，对房屋有入库，审核以及出库等操作，对每个用户登录记录登记日志。

5.消息管理界面发布公告，设置界面可以上传头像，编辑基本信息，右上角同步显示个人头像。

项目展示：

超级管理员：
![image](https://github.com/nooramu/ershoufang/assets/92021673/1ba26bcd-3dfb-4e2b-a3e4-ec10b84989cd)
用户管理：
![image](https://github.com/nooramu/ershoufang/assets/92021673/dacec51e-9320-4bd3-9846-abf3b439c236)
房屋管理：
![image](https://github.com/nooramu/ershoufang/assets/92021673/cc7fb309-1b89-4517-be39-c9eefe28c8b6)
个人设置：
![image](https://github.com/nooramu/ershoufang/assets/92021673/84bebac7-0fb7-40d4-ae75-b3a01d95a5c9)
普通用户：
![image](https://github.com/nooramu/ershoufang/assets/92021673/ab9825f9-00b4-4a07-a635-ef7d358202aa)

