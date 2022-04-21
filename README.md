# 此项目是谭金涛一些常用的Js函数 + Lodash方法的汇总

🍑

- 🥐 现已支持模糊查询
- 🍊 富文本编辑用的Monaco Editor编辑器
- 🥑 Angular-cli v13.2.3
- 🚶 一直更新... 一周2更!!! 
  - 本人邮箱: 15751666937@163.com
  - QQ: 2771289317
  - VX: tjt740
  

# 如何将项目部署到Github Pages上
    
1. cd进入仓库里创建的angular项目
```
 gongdao@gongdaodeMacBook-Pro JavaScript-tool-function % cd javascript-tools
```
  
2. 在angular项目里安装ghpages插件
```
 ng add angular-cli-ghpages
```

3. 构建部署（deploy）
```
 ng deploy --base-href=https://[用户名].github.io/[仓库名（不是项目名）]/ 

 ng deploy --base-href=https://tjt740.github.io/JavaScript-tools-and-Lodash-tools/ 
```

4. 在Github中的 *Settings* 中的选择 *Pages*
![](course/1.png)
![](course/2.png)


5. 选择 *gh-pages* 分支，*/root*，然后Save
![](course/3.png)

6. 点击链接【完成】
​​![](course/4.png)


**PS: 最好每次都吧新创建的分支合到master再部署到Github Pages**