# Vue Markdown Folder

## 介绍

针对 Vue CLI 项目，将 src/markdown 下的 .md 文件生成目录和页面（目前只支持一级目录，如下）

- src
  - markdown
    - folder
      - infor.md

访问页面: /#/doc/folder/infor

## 使用

```bash
$ npm install webpack-md-html-loader -D
$ npm install vue-md-folder -S
```

vue.config.js
```js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('md-html')
      .test(/\.md$/)
      .use('md-html')
      .loader('webpack-md-html-loader')
      .end()
  }
}
```

src/main.js
```js
import mdFolder from 'vue-md-folder'

mdFolder(router)
```