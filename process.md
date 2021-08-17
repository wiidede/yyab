# yyab 开发过程

## 总体约束

- [ ] 主题色
- [ ] 自定义主题色
- [ ] 页面布局
  - [ ] 左侧导航栏
    - [ ] 用户中心（头像）
    - [ ] 背单词
    - [ ] 统计
    - [ ] 设置
    - [ ] logo
    - [ ] 收缩
    - [ ] 隐藏
  - [ ] 底部状态栏
    - [ ] 隐藏导航栏
    - [ ] 进度显示


## 过程

### git 分支

- master: 主要的版本
- template: template from [vite-electron-builder](https://github.com/cawa-93/vite-electron-builder)
- dev: 开发分支

### 使用scss

```bash
npm install -D sass
```

### 按需引入Element Plus

```bash
npm install element-plus --save
npm install vite-plugin-style-import -D
```

按照官网的教程引入Element Plus

发现Vue版本冲突 将Vue版本回退直3.1.5

退回后Vue报错了

还是升级到Vue 3.2.2

改用yarn管理

在 `package.json` 中加入

```json
{
  "resolutions": {
    "elements-plus/vue": "^3.2.1"
  }
}
```

重新yarn

发现eslint找不到 @typescript-eslint/parser

继续添加

```shell
yarn add @typescript-eslint/parser -d
```

这样我们就引入好了Element Plus
