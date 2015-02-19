Banker_Algorithm
================

银行家算法小玩具，NODEJS实现。

http://123.57.73.34/

================

###1，项目架构
    Express + Jade

###2, 项目启动
    |-- 部署至服务器

    |-- 安装依赖
  	    |-- npm install

  	|-- 部署
  		|-- 目录下：forever ./bin/www
	
###3，运行
  	|-- 根据每个进程(默认为5个，可自行添加删除)的Allocation，Need，Available向量，使用
  	    银行家算法寻找一条可行的安全序列
  	    |-- 若没有找到，会给出安全序列停止时的状态。

  	|-- 若找到了安全序列，则可以不断继续添加请求向量，进而继续来寻找安全序列 


###4,心得
	|-- 又一次感受到了Express构建的快捷方便
	|-- jade有些许多余的复杂了
	|-- 页面输入验证只添加了前端的，还需加上后端
	|-- 感觉这样的一个模板，填充不同数据式的页面用AngularJS来做会更方便，下次试试!

