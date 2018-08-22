## 使用环境

>+ centos7
>+ python3.6.5


### 安装说明
~~~
1.    安装python3.6 和pip，参考 Centos7 yum安装Python3.6环境(http://blog.51cto.com/wenguonideshou/2083301)
2.    下载项目
3.    安装环境：pip install -r /项目目录/requirements.txt
4.    为uwsgi创建软连接：ln -s /usr/local/python3/bin/uwsgi /usr/bin/uwsgi
5.    修改/static/js/ks.js 中的地址，使用nginx反代的话可以不写端口号
6.    使用uwsgi --ini /项目目录/uwsgi.ini 启动服务
7.    安装nginx，参考https://www.cnblogs.com/Liang-jc/p/8137956.html
8.    配置nginx反代8000端口，参考https://www.cnblogs.com/lfeifei/p/8067911.html

~~~

### 配置说明
uwsgi.ini做了中文标注，可根据情况修改
编辑workers的数量可提高并发量，多人使用建议调整

