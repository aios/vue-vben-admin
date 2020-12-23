## Wip

### ✨ Features

- 新增 `v-ripple`水波纹指令
- 新增左侧菜单混合模式
- 新增 markdown 嵌入表单内示例
- 新增主框架外页面示例

### 🐛 Bug Fixes

- 修复混合模式下滚动条丢失问题
- 修复环境变量配置失效以及 history 模式下 logo 地址问题
- 修复图表库切换页面导致宽高计算错误
- 修复多语言配置 `Locale.show`导致配置不生效
- 修复路由类型错误

## 2.0.0-rc.14 (2020-12-15)

### ✨ Features

- 移除左侧菜单搜索，新增顶部菜单搜索功能
- layout 移动端适配。业务页面未适配
- axios 加入 joinTime 配置。控制响应是否加入时间戳

### ⚡ Performance Improvements

- 异步引入组件
- 优化整体结构
- 替换菜单默认滚动条为滚动组件
- 菜单性能优化

### 🎫 Chores

- 返回顶部样式调整,避免遮住其他元素
- 升级`ant-design-vue`到`2.0.0-rc.5`
- 刷新按钮布局调整
- `route.meta` 移除 `externalLink` 属性

### ✨ Refactor

- `openModal`与`openDrawer`第三个参数`openOnSet`默认设置为 true

### 🐛 Bug Fixes

- 修复多级路由缓存导致组件渲染多次的问题
- 修复地图图表切换后消失问题
- 修复登录成功 notify 消失问题
- 修改 `VirtualScroll`和`ImportExcel`组件名为`VScroll`与`ImpExcel`,暂时解决含有关键字的组件在 vue 模版内使用内存溢出
- 修复 axios 大小写问题
- 修复按钮样式问题
- 修复菜单分割模式问题
- 修复 `Modal`与`Drawer`组件在使用 emits 数据传递失效问题
- 修复菜单已知问题
- 修复上传组件 api 失效问题
- 修复菜单权限过滤失效问题

## 2.0.0-rc.13 (2020-12-10)

## (破坏性更新) Breaking changes

- 路由重构, 不再支持以前的格式。改为支持 vue-router 最初的默认结构，具体格式可以参考示例更改。实现多级路由缓存，不再将路由转化为 2 级。
- 重构面包屑，使用 antd 的面包屑组件。之前的组件已删除

### ✨ Features

- 还原 antdv 默认 loading，重构 `Loading` 组件，增加`useLoading`和`v-loading`指令。并增加示例
- i18n 支持 vscode `i18n-ally`插件
- 新增多级路由缓存示例
- 打包代码拆分(试验)
- 提取上传地址到全局变量，打包可以动态配置

### ✨ Refactor

- tree 组件 ref 函数调用删除 `$`
- 锁屏界面重构美化，删除不必要的背景图片

### ⚡ Performance Improvements

- 页面切换 loading 逻辑修改。对于已经加载过的页面不管有没有关闭,再次打开不会在显示 loading(已经打开过的页面再次打开速度比较快,可以不需要 loading,同理顶部进度条逻辑也一样)，刷新后恢复。

### 🎫 Chores

- 首屏 loading 修改
- 升级`vue`到`3.0.4`
- 升级`ant-design-vue`到`2.0.0-rc.3`
- 重新引入`vueuse`
- 移除 route meta 内的`afterCloseLoading`属性
- 文档更新

### 🐛 Bug Fixes

- 修复表格 i18n 错误
- 修复菜单图标大小不一致
- 修复顶部菜单宽度计算问题
- 修复表格 tabSetting 问题
- 修复文件上传删除失效
- 修复表格行编辑保存错误问题

## 2.0.0-rc.12 (2020-11-30)

## (破坏性更新) Breaking changes

- ClickOutSide 组件引入方式由 `import ClickOutSide from '/@/components/ClickOutSide/index.vue'`变更为`import { ClickOutSide } from '/@/components/ClickOutSide'`
- Button 组件引入方式由 `import Button from '/@/components/Button/index.vue'`变更为`import { Button } from '/@/components/Button'`
- StrengthMeter 组件引入方式由 `import StrengthMeter from '/@/components/StrengthMeter'`变更为`import { StrengthMeter } from '/@/components/StrengthMeter'`
- 除示例外加入全局国际化功能，支持中文与英文

### ✨ Refactor

- 重构整体 layout。更改代码实现方式。代码更精简
- 配置项重构
- 移除 messageSetting 配置
- BasicTitle 组件 `showSpan`=> `span`

### ✨ Features

- 缓存可以配置是否加密,默认生产环境开启 Aes 加密
- 新增标签页拖拽排序
- 新增 LayoutFooter.默认显示，可以在配置内关闭

### ⚡ Performance Improvements

- 优化`Modal`组件全屏动画不流畅问题

### 🐛 Bug Fixes

- tree: 修复文本超出挡住操作按钮问题
- useRedo: 修复通过 useRedo 刷新页面参数丢失问题
- form: 修复表单校验先设置在校验及控制台错误信息问题
- `modal`&`drawer` 修复组件传递数组参数问题
- form: 修复`updateSchema`赋值含有`[]`时不生效
- table: 修复表格 `TableAction` 图标显示问题
- table: 修复表格列设置通过`setColumns`设置不显示

### 🎫 Chores

- 更新 antdv 到`2.0.0-rc.2`
- 更新 vue 到`3.0.3`
- 更新 vite 到`1.0.0.rc13`
- 暂时删除 `@vueuse/core`.等稳定后在集成。目前不太稳定。

## 2.0.0-rc.11 (2020-11-18)

### ✨ Features

- **Some-New-Token** base64 **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** form

### 🎫 Chores

- **Some-New-Token** antdv **Some-New-Token**`2.0.0-rc.1`（**Some-New-Token** beta15,rc1 **Some-New-Token**.）
- **Some-New-Token**

### ✨ Refactor

- **Some-New-Token**`useModal`**Some-New-Token**`useDrawer`**Some-New-Token**`receiveDrawerDataRef`**Some-New-Token**`transferDrawerData`**Some-New-Token**
- `useModal`**Some-New-Token**`useDrawer`**Some-New-Token**`openModal`**Some-New-Token**`openDrawer`**Some-New-Token**。**Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token** inputNumber **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** baseColProps **Some-New-Token**

## 2.0.0-rc.10 (2020-11-13)

### ✨ Refactor

- **Some-New-Token** hook,**Some-New-Token** `@vueuse`，**Some-New-Token**`hook`,**Some-New-Token** hook
- `useEvent` **Some-New-Token**->`useEventListener`
- **Some-New-Token**`ComponentType`**Some-New-Token** `SelectOptGroup`,`SelectOption`,`Transfer`,`Radio`,**Some-New-Token**。**Some-New-Token**`RadioButtonGroup`**Some-New-Token**

### ✨ Features

- **Some-New-Token**`componentsProps`**Some-New-Token**
- **Some-New-Token** tag **Some-New-Token**，**Some-New-Token** 4 **Some-New-Token** dot **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**

### ⚡ Wip

- **Some-New-Token**(**Some-New-Token**，**Some-New-Token**...)

### ⚡ Performance Improvements

- **Some-New-Token** settingDrawer **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** window **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** switch **Some-New-Token** checkBox **Some-New-Token**

## 2.0.0-rc.9 (2020-11-9)

### ✨ Features

- **Some-New-Token** trigger **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** schema **Some-New-Token** `required`**Some-New-Token**。**Some-New-Token**
- openModal **Some-New-Token** openDrawer **Some-New-Token**`transferModalData`**Some-New-Token**
- **Some-New-Token**

### ✨ Refactor

- **Some-New-Token**
- Route Module **Some-New-Token**

### ⚡ Performance Improvements

- **Some-New-Token**,**Some-New-Token**
- **Some-New-Token**
- layout **Some-New-Token**

### 🎫 Chores

- **Some-New-Token**
- **Some-New-Token**`ant-design-vue`**Some-New-Token**`beta15`
- **Some-New-Token**`vite`**Some-New-Token**`rc.9`
- **Some-New-Token**
- `BasicTitle` **Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token** table **Some-New-Token**
- **Some-New-Token**，**Some-New-Token**
- **Some-New-Token**`useMessage`**Some-New-Token**
- **Some-New-Token**`disabled`**Some-New-Token**
- **Some-New-Token**`useECharts`**Some-New-Token**`resize`**Some-New-Token**,**Some-New-Token**
- **Some-New-Token**`useWatermark`**Some-New-Token**`resize`**Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**

## 2.0.0-rc.8 (2020-11-2)

### ✨ Features

- **Some-New-Token** loading **Some-New-Token**
- **Some-New-Token**

### 🎫 Chores

- **Some-New-Token** sessionStorage **Some-New-Token** LocalStorage

### ⚡ Performance Improvements

- **Some-New-Token**`ant-design-vue`**Some-New-Token**`beta.12`
- Layout **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- routeModule **Some-New-Token** layout **Some-New-Token**。**Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token**
- **Some-New-Token** mock **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** size **Some-New-Token** samll **Some-New-Token**，fixed **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** message **Some-New-Token**

## 2.0.0-rc.7 (2020-10-31)

### ✨ Features

- **Some-New-Token** model **Some-New-Token** set **Some-New-Token**，**Some-New-Token\*\*\*\***Some-New-Token**->**Some-New-Token**->**Some-New-Token\*\*\*\*

- modal **Some-New-Token** useModalInner **Some-New-Token**，**Some-New-Token**`transferModalData`**Some-New-Token**，

  - **Some-New-Token**。**Some-New-Token\*\*\*\***Some-New-Token**->**Some-New-Token**->**Some-New-Token\*\*\*\*
  - `receiveModalDataRef`**Some-New-Token**。**Some-New-Token**。**Some-New-Token**。

- drawer **Some-New-Token** useDrawerInner **Some-New-Token**，**Some-New-Token**`transferModalData`**Some-New-Token**，
  - **Some-New-Token**。**Some-New-Token\*\*\*\***Some-New-Token**->**Some-New-Token**->**Some-New-Token\*\*\*\*
  - `receiveModalDataRef`**Some-New-Token**。**Some-New-Token**。**Some-New-Token**。

### ✨ Refactor

- **Some-New-Token**

### ⚡ Performance Improvements

- Modal slot **Some-New-Token**
- **Some-New-Token**

### 🎫 Chores

- **Some-New-Token**
- pwa **Some-New-Token**
- types **Some-New-Token**
- **Some-New-Token**`ant-design-vue`**Some-New-Token**`beta.11`,**Some-New-Token**,**Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token** post **Some-New-Token** https **Some-New-Token**
- **Some-New-Token** modal **Some-New-Token** footer **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**

## 2.0.0-rc.6 (2020-10-28)

### ✨ Features

- **Some-New-Token**`pwa`**Some-New-Token**，**Some-New-Token**`.env.production`**Some-New-Token**
- Button **Some-New-Token** `preIcon`**Some-New-Token**`postIcon`**Some-New-Token**
- **Some-New-Token**

### 🎫 Chores

- **Some-New-Token** vite **Some-New-Token**`v1.0.0.rc8`
- vite.config.ts **Some-New-Token** plugins **Some-New-Token**
- build **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**

### ⚡ Performance Improvements

- `setTitle`**Some-New-Token**
- **Some-New-Token** sessionStorage **Some-New-Token** LocalStorage **Some-New-Token** `7` **Some-New-Token**

### ✨ Refactor

- **Some-New-Token**`vite-plugin-html`,**Some-New-Token** html **Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** useMessage **Some-New-Token**

## 2.0.0-rc.5 (2020-10-26)

### ✨ Features

- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** tinymce **Some-New-Token**
- **Some-New-Token** submitOnReset **Some-New-Token**
- **Some-New-Token**`sortFn`**Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**/**Some-New-Token**

### ✨ Refactor

- Drawer **Some-New-Token** detailType **Some-New-Token** isDetail

### 🎫 Chores

- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** tabs **Some-New-Token**
- **Some-New-Token** vite **Some-New-Token**`v1.0.0.rc6`
- **Some-New-Token**。rc6 **Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token** footer **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** modal **Some-New-Token** destroyOnClose=true **Some-New-Token**
- **Some-New-Token** action **Some-New-Token**

# 2.0.0-rc.4 (2020-10-21)

### ✨ Features

- **Some-New-Token**
- **Some-New-Token**

### 🎫 Chores

- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** vue **Some-New-Token**`v3.0.2`
- **Some-New-Token**

### ⚡ Performance Improvements

- **Some-New-Token**
- **Some-New-Token** TableAction **Some-New-Token**
- **Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** actionColOptions **Some-New-Token**
- **Some-New-Token** loading **Some-New-Token**
- **Some-New-Token**

# 2.0.0-rc.3 (2020-10-19)

### ✨ Features

- **Some-New-Token** excel **Some-New-Token** excel/xml/csv/html **Some-New-Token**
- **Some-New-Token** excel **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** markdown **Some-New-Token**
- **Some-New-Token**

### Docs

- **Some-New-Token**

### 🎫 Chores

- **Some-New-Token**
- **Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token**
- **Some-New-Token** window **Some-New-Token**

# 2.0.0-rc.2 (2020-10-17)

### ✨ Features

- **Some-New-Token**`gizp`
- **Some-New-Token**`console`
- **Some-New-Token**，**Some-New-Token**

### 🎫 Chores

- **Some-New-Token** vue **Some-New-Token**`3.0.1`
- **Some-New-Token**`vite`**Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**`window__Some-New-Token__`**Some-New-Token** script **Some-New-Token**
- **Some-New-Token**

### ⚡ Performance Improvements

- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**

# 2.0.0-rc.1 (2020-10-14)

### ✨ Features

- **Some-New-Token** tab

### ⚡ Performance Improvements

- **Some-New-Token**
- **Some-New-Token**
- **Some-New-Token** html
- **Some-New-Token**
- **Some-New-Token**

### 🎫 Chores

- **Some-New-Token**
- **Some-New-Token**`README.en-US.md`
- **Some-New-Token**`CHANGELOG.en-US.md`

### 🐛 Bug Fixes

- **Some-New-Token**

# 2.0.0-beta.7 (2020-10-12)

### ⚡ Performance Improvements

- **Some-New-Token**

### ✨ Features

- **Some-New-Token** `CountTo`**Some-New-Token** demo
- **Some-New-Token** `closeMessageOnSwitch`**Some-New-Token**`removeAllHttpPending`
- **Some-New-Token**，**Some-New-Token**
- **Some-New-Token** `useEcharts`**Some-New-Token**`useApexChart`**Some-New-Token**，**Some-New-Token** demo
- **Some-New-Token**
- **Some-New-Token**

### 🎫 Chores

- **Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token**，tab **Some-New-Token**

# 2.0.0-beta.56 (2020-10-11)

### 💄 Styles

- **Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token**
- **Some-New-Token**，**Some-New-Token** proxy

### ⚡ Performance Improvements

- **Some-New-Token**
- **Some-New-Token**

# 2.0.0-beta.5 (2020-10-10)

### ♻ Code Refactoring

- **Some-New-Token**`tailwind css`

### ⚡ Performance Improvements

- **Some-New-Token**

### 🎫 Chores

- **Some-New-Token** `.vscode`**Some-New-Token**`.github`**Some-New-Token**
- **Some-New-Token**
- **Some-New-Token**`.env`**Some-New-Token**
- **Some-New-Token** readme.md

### 🐛 Bug Fixes

- **Some-New-Token**`Tree`**Some-New-Token**

# 2.0.0-beta.4 (2020-10-08)

### 🎫 Chores

- **Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token**
- **Some-New-Token**

# 2.0.0-beta.3 (2020-10-07)

### ✨ Features

- **Some-New-Token**`openNProgress`**Some-New-Token**
- **Some-New-Token**`table`**Some-New-Token** demo

### 🎫 Chores

- **Some-New-Token**` github workflows`

# 2.0.0-beta.2 (2020-10-07)

### ✨ Features

- **Some-New-Token**

### 🔧 Continuous Integration

- **Some-New-Token** githubAction **Some-New-Token**

# 2.0.0-beta.1(2020-09-30)

### 🎫 Chores

- **Some-New-Token** 1.0 **Some-New-Token**
- **Some-New-Token** README.md **Some-New-Token**

### 🐛 Bug Fixes

- **Some-New-Token**，**Some-New-Token**
