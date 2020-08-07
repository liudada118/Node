- 博客网站， 我们还欠缺哪些技能？
    React 做UI 组件化思维
    - 列表
    - 详情页
    - 评论
    node 做后端
    - 后台数据库 mysql MongoDB
        不用后台数据库，怎么向应用提供数据库
        - 爬取数据 cherrio
        - MVC model(数据库)-view(react)-controller(node)
        可以实现增删改查，但不启用mysql那么繁琐
        - 简单服务的话，json文件作为资源，代替数据库
        使用json-server来启动它 resful api格式
        /posts post {id:,title:,content:}

        /posts/show/1  看某篇文章的url
        restful 标准  url不能有动词 /posts/1 show的概念由谁表达
        get 动词
JSON是数据格式 是前后端交互的一个数据标准
    设计一个URL
    汇款需求，从账户1向账户2汇款500元 如何设计
    - /accounts/:1/transfer/:520/to/:2
    restful 动词 + url（动词）
    资源
    /transaction 转账 POST
    ｛from:1,to:2,amount:500.00｝
    Restful 是后端在设计URL的国际规范