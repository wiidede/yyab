# yyab 开发过程

## 总体约束

- [ ] 主题色
- [ ] 自定义主题色
- [ ] 页面布局
  - [ ] 左侧导航栏
    - [ ] 用户中心（头像）
    - [ ] 背单词
    - [ ] 选词
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

这样就引入好了 Element Plus

### Element Plus

之前安装的 Element Plus 为 1.0.2-beta.70

这几天看官网已经更新了 1.1.0-beta.1 ，而且把引入方式改掉了，那么这里也来修改一下吧

删去之前再App.vue中引入的样式，改为在index.ts中引入

```ts
import 'element-plus/dist/index.css';
import './style/index.scss';
```

这样自己样式优先级就更高，可以覆盖掉elementUI的变量

这样就可以实习通过css变量快速换肤，优雅且高效

### css变量 

#### 改变主题色

有了css变量，我们可能方便的在样式中使用统一的颜色，然后通过js修改，就能很快地改变整个界面的样式

注意到看到element UI的scss变量都编译成了css变量，这样可以自己覆盖它的样式

比如本项目的主题色使用css变量：

`--main`

然后把Element UI的变量的值设为这个变量

`--el-color-primary: var(--main)`

这样只需要修改主题色，整个UI的颜色都可以改变

在js中可以这样修改css变量：

```ts
document.documentElement.style.setProperty('--main', '#808080');
```


#### 换肤

本项目还准备了换肤功能，主要还是准备两套皮肤方案

`:root`下面的是默认的皮肤

`[data-theme="dark"]`下面是dark的皮肤

```css
:root {
  --background: white;
  --font-color: #303133;
}


[data-theme="dark"] {
  --background: #383838;
  --font-color: #eeeeee;
}
```

在js中这样修改主题方案：

```ts
document.documentElement.setAttribute('data-theme', 'dark');
```

这样，html标签上会多一个`data-theme="light"`的属性，样式也会变成`[data-theme="dark"]`下的样式
