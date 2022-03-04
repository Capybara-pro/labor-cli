# labor-cli
一个简单的脚手架

### 原理
1. 创建脚手架启动命令（使用 commander）
2. 询问用户问题获取创建所需信息（使用 inquirer）
3. 下载远程模板（使用 download-git-repo）
4. 发布模板

### 使用方法
1. 安装依赖
npm install
2. 使用 
labor-cli create [options] <app-name> 创建远程模板

### 获取github信息api
1. 获取用户信息        https://api.github.com/users/
1. 获取用户所有仓库    https://api.github.com/users/{用户名}/repos
2. 获取仓库详细信息    https://api.github.com/repos/{用户名}/{仓库名}
2. 获取仓库tag        https://api.github.com/repos/{用户名}/{仓库名}/tags
