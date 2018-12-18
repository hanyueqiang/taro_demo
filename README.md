# Taro

[![](https://img.shields.io/node/v/@tarojs/cli.svg?style=flat-square)](https://www.npmjs.com/package/@tarojs/cli)
[![](https://img.shields.io/npm/v/@tarojs/taro.svg?style=flat-square)](https://www.npmjs.com/package/@tarojs/taro)
[![](https://img.shields.io/npm/l/@tarojs/taro.svg?style=flat-square)](https://www.npmjs.com/package/@tarojs/taro)

## 简介

**Taro** 是一套遵循 [React](https://reactjs.org/) 语法规范的 **多端开发** 解决方案。

使用 **Taro**，我们可以只书写一套代码，再通过 **Taro** 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝小程序、H5、React-Native 等）运行的代码。

#### React 语法风格

Taro 的语法规则基于 React 规范，它采用与 React 一致的组件化思想，组件生命周期与 React 保持一致，同时在书写体验上也尽量与 React 类似，支持使用 JSX 语法，让代码具有更丰富的表现力。


## 安装 Taro 和使用 

### 全局安装 taro：

```bash
$ npm install -g @tarojs/cli
$ yarn global add @tarojs/cli
```

### 安装依赖包：
```
$ yarn install
```

进入项目目录开始开发，可以选择小程序预览模式，或者H5预览模式，若使用微信小程序预览模式，则需要自行下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，选择预览项目根目录下 `dist` 目录。

### 微信小程序编译预览模式

```bash
# npm script
$ npm run dev:weapp
# 仅限全局安装
$ taro build --type weapp --watch
# npx用户也可以使用
$ npx taro build --type weapp --watch
```

### H5编译预览模式
```bash
# npm script
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch
# npx用户也可以使用
$ npx taro build --type h5 --watch
```

### 项目打包

打包小程序代码
```bash
# npm script
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp
# npx用户也可以使用
$ npx taro build --type weapp
```

### 打包H5代码
```bash
# npm script
$ npm run build:h5
# 仅限全局安装
$ taro build --type h5
# npx用户也可以使用
$ npx taro build --type h5
```
